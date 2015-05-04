#pragma strict
var cam: GameObject;

function Start () 
{

}

function GravityShift () 
{
	if (Input.GetKeyDown(KeyCode.Q))
	{
		//cam.gameObject.transform.rotation = Quaternion(cam.gameObject.transform.rotation.x, cam.gameObject.transform.rotation.y, 180);
	}
	if (Input.GetKeyDown(KeyCode.E))
	{
		//return camera back to normal
	}
}