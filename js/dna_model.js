const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });


const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(7, 10, 7.5);

scene.add(directionalLight);
const loader = new THREE.GLTFLoader();

let model;

const aspect = window.innerWidth / window.innerHeight*2;
const camera = new THREE.OrthographicCamera(
    -4.5 * aspect, 4.5 * aspect, 5, -5, 1, 1000
);
camera.position.set(100, 0, 7);
camera.lookAt(0, 0, 0);


function adaptive() {
    if (media4.matches) { 
    //телефон
    renderer.setSize(window.innerWidth, window.innerHeight);
    const canvas = renderer.domElement;
    document.getElementById('webgl-container').appendChild(canvas);
    canvas.style.width = "100%";
    canvas.style.height = "100%";
   

     loader.load(
        'assets/dna_hueo3.glb',
        (gltf) => {
            model = gltf.scene;
            
            model.traverse((child) => {
               
                if (child.isMesh) {
                    const material = child.material;
                    if (material.color) {
                        material.color.multiplyScalar(2.9); 
                    }
                    material.roughness = 0; 
                    material.metalness = 0.09; 
                    child.castShadow = true;
    child.receiveShadow = true;
                    
                }
        });
            scene.add(model);
            model.scale.set(2.3, 2.3, 2.3); 
            
            updateModelPosition();
            document.getElementById('preloader').style.display = 'none'; 
            document.getElementById('webgl-container').style.display = 'block';  
            
        },
        (xhr) => {
            console.log(`Загрузка модели: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        },
        (error) => {
            console.error('Ошибка загрузки модели:', error);
        }
    );
    


    // Анимация
    function animate() {
        requestAnimationFrame(animate);

        if (model) {
            model.rotation.y += rotationSpeed; 

            if (rotationAcceleration !== 0) {
                model.rotation.y += rotationAcceleration; 
                rotationAcceleration *= 0.95; 
                if (Math.abs(rotationAcceleration) < 0.0001) {
                    rotationAcceleration = 0; 
                }
            }
        }

        renderer.render(scene, camera);
    }

    animate();

    
    
  }
  else if (media3.matches) { 
    //планшет
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    const canvas = renderer.domElement;
    document.getElementById('webgl-container').appendChild(canvas);
    canvas.style.width = "100%";
    canvas.style.height = "100%";

     loader.load(
        'assets/dna_hueo3.glb',
        (gltf) => {
            model = gltf.scene;
            
            model.traverse((child) => {
               
                if (child.isMesh) {
                    const material = child.material;
                    if (material.color) {
                        material.color.multiplyScalar(2.9); 
                    }
                    material.roughness = 0; 
                    material.metalness = 0.09; 
                    child.castShadow = true;
    child.receiveShadow = true;
                    
                }
        });
            scene.add(model);
            model.scale.set(2.6, 3, 2.6); 
            
            updateModelPosition();
            model.rotation.set(0.8, -40, 0.09);
            document.getElementById('preloader').style.display = 'none'; 
            document.getElementById('webgl-container').style.display = 'block';  
            
        },
        (xhr) => {
            console.log(`Загрузка модели: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        },
        (error) => {
            console.error('Ошибка загрузки модели:', error);
        }
    );
    


    // Анимация
    function animate() {
        requestAnimationFrame(animate);

        if (model) {
            model.rotation.y += rotationSpeed; 

            if (rotationAcceleration !== 0) {
                model.rotation.y += rotationAcceleration; 
                rotationAcceleration *= 0.95; 
                if (Math.abs(rotationAcceleration) < 0.0001) {
                    rotationAcceleration = 0; 
                }
            }
        }

        renderer.render(scene, camera);
    }

    animate();

    
    
  }
  else if (media2.matches) {

    const aspect = window.innerWidth/2 / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
        -3.2 * aspect, 4.5 * aspect, 5, -5, 0.1, 1000
    );
    camera.position.set(1000, 0, 7);
    camera.lookAt(0, 0, 0);

    
    renderer.setSize(window.innerWidth/2, window.innerHeight);
    document.getElementById('webgl-container').appendChild(renderer.domElement);


    loader.load(
        'assets/dna_hueo3.glb',
        (gltf) => {
            model = gltf.scene;
            
            model.traverse((child) => {
               
                if (child.isMesh) {
                    const material = child.material;
                    if (material.color) {
                        material.color.multiplyScalar(2.9); 
                    }
                    material.roughness = 0; 
                    material.metalness = 0.09; 
                }
        });
            scene.add(model);
            model.scale.set(1.3, 1.3, 1.3); 
            updateModelPosition();
            
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('webgl-container').style.display = 'block';
        },
        (xhr) => {
            console.log(`Загрузка модели: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        },
        (error) => {
            console.error('Ошибка загрузки модели:', error);
        }
    );


    // Анимация
    function animate() {
        requestAnimationFrame(animate);

        if (model) {
            model.rotation.y += rotationSpeed; 

            if (rotationAcceleration !== 0) {
                model.rotation.y += rotationAcceleration; 
                rotationAcceleration *= 0.95; 
                if (Math.abs(rotationAcceleration) < 0.0001) {
                    rotationAcceleration = 0;
                }
            }
        }

        renderer.render(scene, camera);
    }

    animate();





  }
   else if (media1.matches) {
    //десктоп
    

    const aspect = window.innerWidth/2 / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
        -3 * aspect, 4.5 * aspect, 5, -5, 0.1, 1000
    );
    camera.position.set(1009, 20, 20);
    camera.lookAt(0, 0, 0);


    renderer.setSize(window.innerWidth/2, window.innerHeight);
    
    document.getElementById('webgl-container').appendChild(renderer.domElement);

    

    loader.load(
        'assets/dna_hueo3.glb',
        (gltf) => {
            model = gltf.scene;
            
            model.traverse((child) => {
               
                if (child.isMesh) {
                    const material = child.material;
                    if (material.color) {
                        material.color.multiplyScalar(2.9); 
                    }
                    material.roughness = 0; 
                    material.metalness = 0.09; 
                }
        });
            scene.add(model);
            model.scale.set(1.4, 1.4, 1.4); 
            updateModelPosition();
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('webgl-container').style.display = 'block';
        },
        (xhr) => {
            console.log(`Загрузка модели: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        },
        (error) => {
            console.error('Ошибка загрузки модели:', error);
        }
    );

    // Анимация
    function animate() {
        requestAnimationFrame(animate);

        if (model) {
            model.rotation.y += rotationSpeed; 

            if (rotationAcceleration !== 0) {
                model.rotation.y += rotationAcceleration;
                rotationAcceleration *= 0.95; 
                if (Math.abs(rotationAcceleration) < 0.0001) {
                    rotationAcceleration = 0; 
                }
            }
        }

        renderer.render(scene, camera);
    }
    animate();

    
  }
}



function updateModelPosition() {
    if (!model) return;

    const rightBoundary = camera.right; 
    const offset = (rightBoundary - camera.left) * 0.2; 
    model.position.set(rightBoundary - offset, 0, 0); 
}

let isMouseDown = false;
let lastMouseX = 0;
let rotationSpeed = 0.01; 
let rotationAcceleration = 0; 

// Ограничения скорости вращения
const maxRotationSpeed = 0.05;
const accelerationFactor = 0.0003; 

window.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    lastMouseX = event.clientX;
});

window.addEventListener('mouseup', () => {
    isMouseDown = false;
});

window.addEventListener('mousemove', (event) => {
    if (isMouseDown && model) {
        // разница в движении мыши
        let deltaX = event.clientX - lastMouseX;
        rotationAcceleration += deltaX * accelerationFactor; // Увеличиваем ускорение в зависимости от движения мыши
        rotationAcceleration = Math.max(
            Math.min(rotationAcceleration, maxRotationSpeed),
            -maxRotationSpeed
        ); // Ограничиваем максимальную скорость
        lastMouseX = event.clientX;
    }
});


//адаптив для анимации
var media4 = window.matchMedia("(max-width: 500px)");

var media3 = window.matchMedia("(min-width: 501px) and (max-width: 900px)");
var media2 = window.matchMedia("(min-width: 901px) and (max-width: 1500px)");
var media1 = window.matchMedia("(min-width: 1501px)");


function handleMediaChange() {
  if (media4.matches) {
    adaptive("mobile");
} else if (media3.matches) {
    adaptive("tablet");
  } else if (media2.matches) {
    adaptive("loptop");
  } else if (media1.matches) {
    adaptive("desktop");
  }
}

handleMediaChange();

media4.addEventListener("change", handleMediaChange);
media3.addEventListener("change", handleMediaChange);
media2.addEventListener("change", handleMediaChange);
media1.addEventListener("change", handleMediaChange);
