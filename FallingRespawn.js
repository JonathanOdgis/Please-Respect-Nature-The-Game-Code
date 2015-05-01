#pragma strict
var spawn: GameObject;
var clone : GameObject;
var currpos : Transform;
var splash : GameObject;
var hit: boolean;

function Start () 
{

}

function Update () 
{
	if (hit == true)
	{
		yield WaitForSeconds(1);
		hit = false;
	}
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		hit = true;
		currpos = other.gameObject.transform;
		clone = Instantiate(splash, currpos.position, currpos.rotation);
		Debug.Log("This is the position where the splash is");
		other.gameObject.transform.position = spawn.gameObject.transform.position;
	}
}