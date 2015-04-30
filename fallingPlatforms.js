#pragma strict
var platform: GameObject;   //The platform to fall down and then regenerate in initial position
var collided: boolean;      //status or boolean flag of the collision between the player and the collision spot
var initialPos: Vector3;    //The original position of the platform
var initialRot: Quaternion;    //The original rotation of the platform
function Start () 
{
	initialPos = platform.transform.position;
	initialRot = platform.transform.rotation;
	collided = false;
  	platform.gameObject.GetComponent.<Rigidbody>().useGravity = false;
    platform.gameObject.GetComponent.<Rigidbody>().isKinematic = true;
}

function Update () 
{
	if (collided == true)
	{
 		platform.gameObject.GetComponent.<Rigidbody>().useGravity = true;
        platform.gameObject.GetComponent.<Rigidbody>().isKinematic = false;	
	}
	if (collided == false)
	{
  		platform.transform.position = initialPos;
  		platform.transform.rotation = initialRot;
  		platform.gameObject.GetComponent.<Rigidbody>().useGravity = false;
    	platform.gameObject.GetComponent.<Rigidbody>().isKinematic = true;		
	}
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		collided = true;
		yield WaitForSeconds(10);
		collided = false;
	}
}
