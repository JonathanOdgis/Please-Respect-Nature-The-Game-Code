#pragma strict

var projectile : Rigidbody;
var projSpeed = 100;
var clone : Rigidbody;
var explosion : GameObject;
var soundFile : AudioClip;
var DestructionEffects : ParticleSystem; 

var roundsFired: int = 5;
var roundsMax: int = 5; 
   
function Update () 
{
	if (Input.GetButtonDown("Fire1") && roundsFired > 0) 
	{
		AudioSource.PlayClipAtPoint(soundFile, this.transform.position);
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection (Vector3.forward * projSpeed);	
		Destroy(clone.gameObject, .3);
		roundsFired = roundsFired - 1;	
		Debug.Log(roundsFired);	
	}
	else if (Input.GetKeyDown(KeyCode.R))
	{
		roundsFired = roundsMax;
		Debug.Log("Reloaded");
	}

}