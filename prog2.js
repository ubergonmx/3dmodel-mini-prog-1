// Mini-Program #2 (Exercise): Edit the following code to
// 1. modify the point light source for it to be a RED color light source
// 2. add two more light sources, one should be GREEN, and the other BLUE in color
// 3. add also two more corresponding light helpers
// 4. set the 3 light positions such that they are in different locations


import * as THREE from 'three';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
	
//-----  GEOMETRY -----                       
const geometry = new THREE.SphereGeometry( 2, 64, 64 );

		
//----- MATERIAL if there is NO LIGHTING -----
// If there is no lighting use MeshBasicMaterial
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); 


//----- MATERIAL if there is LIGHTING -----
// 
// Diffuse + Specular material property: use MeshPhongMaterial()
const material = new THREE.MeshPhongMaterial( { color: 0xffffff, 
                                                specular: 0xff0000, 
                                                shininess: 75, 
                                                flatShading: true } );
//    k_d is the diffuse material coefficient constant 
//    k_s is the specular material coefficient constant 
//    In threejs k_d corresponds to the color parameter (0 to 255 or 0 to 0xff)
//    In threejs k_s corresponds to the specular parameter (0 to 255 or 0 to 0xff)
//    In the setting above: k_s,r is 0xff, k_s,g is 0x00 and k_s,b is 0x00
//              this means: k_s,r reflects red 100%
//                          k_s,g reflects green 0%
//                          k_s,b reflects blue 0%  
//              thus the specular highlight will be reddish in color
//    alpha is the shininess factor
//    In threejs alpha corresponds to shininess parameter (0 to 100); the default value is 30
                       

//---- MESH -----                       
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );


//----- LIGHT(S) ----- 
// Incorporate a point light via PointLight().
// A point light is in a finite location in 3D space.
// const pointlight = new THREE.PointLight( 0xffffff, 1, 100 );
// pointlight.position.set(0, 0, 3);
// scene.add( pointlight );

     //-- helper                             
     // the next three lines are not needed all the time
     // we want to visualize the point light source in this sample program
     // const sphereSize = 0.1;                          
     // const pointLightHelper = new THREE.PointLightHelper( pointlight, sphereSize );                            
     // scene.add( pointLightHelper );


// RED Point Light
const redPointLight = new THREE.PointLight( 0xff0000, 1, 100 );
redPointLight.position.set(2, 2, 2);
scene.add( redPointLight );
// Red light helper
const redPointLightHelper = new THREE.PointLightHelper( redPointLight, 0.1 );
scene.add( redPointLightHelper );

// GREEN Point Light
const greenPointLight = new THREE.PointLight( 0x00ff00, 1, 100 );
greenPointLight.position.set(-2, -2, 2);
scene.add( greenPointLight );
// Green light helper
const greenPointLightHelper = new THREE.PointLightHelper( greenPointLight, 0.1 );
scene.add( greenPointLightHelper );

// BLUE Point Light
const bluePointLight = new THREE.PointLight( 0x0000ff, 1, 100 );
bluePointLight.position.set(0.5, 0, 4);
scene.add( bluePointLight );
// Blue light helper
const bluePointLightHelper = new THREE.PointLightHelper( bluePointLight, 0.1 );
scene.add( bluePointLightHelper );
                        
//----- CAMERA -----
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
        
                        
//----- ACTION! -----                      
renderer.render(scene, camera);
// just render one frame, no animation
