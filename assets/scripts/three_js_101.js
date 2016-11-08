var three_js_101 = function(){
    var scene;
    var camera;
    var renderer;
    var box;
    setup();
    fillScene();
    animate();

    function setup(){
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer({alpha:true});
        var intro_place = document.getElementById("three_js_101");
        intro_place.appendChild( renderer.domElement );
        intro_place.style.marginLeft = "auto";
        intro_place.style.marginRight = "auto";
        renderer.setSize(400,200);

    }

    function fillScene() {
        var material = new THREE.MeshBasicMaterial( { color: 0x3166bc, wireframe: true } );

        var geometry = new THREE.BoxGeometry(2,2,2);

        box = new THREE.Mesh(geometry, material);

        scene.add(box);

        camera.position.z = 6;
        camera.lookAt(new THREE.Vector3(0,0,0));
    }


    function animate() {
        box.rotation.y += 0.01;
        box.rotation.x += 0.01;
        box.rotation.z += 0.01;
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

    }


};