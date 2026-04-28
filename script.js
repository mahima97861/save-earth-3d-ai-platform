// POPUP FUNCTION
function openPopup(title, desc){
  document.getElementById("popup").style.display="flex";
  document.getElementById("bgBlur").style.display="block";
  document.getElementById("title").innerText=title;
  document.getElementById("desc").innerText=desc;
}

function closePopup(){
  document.getElementById("popup").style.display="none";
  document.getElementById("bgBlur").style.display="none";
}

/* 3D EARTH */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 500);
document.getElementById("earthContainer").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 32, 32);
const texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
const material = new THREE.MeshBasicMaterial({map:texture});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

camera.position.z = 5;

function animate(){
  requestAnimationFrame(animate);
  earth.rotation.y += 0.003;
  renderer.render(scene, camera);
}
animate();

/* AI */
function askAI(){
  let input=document.getElementById("input").value;
  let chat=document.getElementById("chat");
  chat.innerHTML+=`<p><b>You:</b> ${input}</p>`;
  chat.innerHTML+=`<p>🌱 AI: Save water, plant trees, reduce plastic, use renewable energy.</p>`;
  document.getElementById("input").value="";
}