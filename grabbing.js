#pragma strict
var player: GameObject;   //Set equal to the player object in the editor
var target: GameObject;	  //The target area of the final impact with the platform.
var grabbed: boolean;     //Flags whether or not the edge has been grabbed. 
function Start () {

}

function Update () 
{
	if (grabbed == true)   
	{
		player.gameObject.transform.position = Vector3.MoveTowards(player.gameObject.transform.position, Vector3(player.gameObject.transform.position.x , target.gameObject.transform.position.y, player.gameObject.transform.position.z), 1);	

	}
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag('Player') && Input.GetKey("w"))
	{
		grabbed = true;
		Debug.Log("It grabbed");
		yield WaitForSeconds(.5);     //Wait a set amount of time before setting grabbed back to false to allow player to move again.
		grabbed = false;
	}
}