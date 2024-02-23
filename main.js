// Import Three.js
import * as THREE from 'three';

// Set up the scene
const scene = new THREE.Scene();

// Set up the camera with orthographic projection
const camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 2, 10);

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Create materials with different colors
const redMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000FF });
const yellowMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });

// Create different meshes for each quadrant
const mesh1 = new THREE.SphereGeometry(0.5, 32, 32);
const mesh2 = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
const mesh3 = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
const mesh4 = new THREE.IcosahedronGeometry(0.5, 0);

// Create mesh objects with the respective materials
const obj1 = new THREE.Mesh(mesh1, redMaterial);
const obj2 = new THREE.Mesh(mesh2, greenMaterial);
const obj3 = new THREE.Mesh(mesh3, blueMaterial);
const obj4 = new THREE.Mesh(mesh4, yellowMaterial);

// Position the meshes in the specified quadrants
obj1.position.set(1, 1, -5);
obj2.position.set(-1, 1, -5);
obj3.position.set(-1, -1, -5);
obj4.position.set(1, -1, -5);

// Add meshes to the scene
scene.add(obj1);
scene.add(obj2);
scene.add(obj3);
scene.add(obj4);

// Set the camera position
camera.position.set(0, 0, 5);

// Set the camera look at
camera.lookAt(0, 0, -2);

// Render the scene
renderer.render(scene, camera);
