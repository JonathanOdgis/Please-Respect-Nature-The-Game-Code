#pragma strict
var waterLevel: Transform;
var water: GameObject;
var hit: boolean;

function Start () {

}

function Update () 
{
	if (hit == true)   
	{
		water.gameObject.transform.position = Vector3.MoveTowards(water.gameObject.transform.position, Vector3(water.gameObject.transform.position.x,waterLevel.transform.position.y, water.gameObject.transform.position.z), Time.deltaTime * 5);		
	}
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag('Player'))
	{
		hit = true;  
		yield WaitForSeconds(10);
		hit = false;
	}
}