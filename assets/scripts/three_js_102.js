/**
 * Created by grigord on 2016-11-08.
 */
var three_js_102 = function(){
    var scene;
    var camera;
    var renderer;
    var sphere;
    var plane;
    setup();
    fillScene();
    animate();

    function setup(){
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setSize(400,200);

        var intro_place = document.getElementById("three_js_102");
        var controls = THREE.OrbitControls(camera, renderer.domElement);
        intro_place.appendChild( renderer.domElement );
        intro_place.style.marginLeft = "auto";
        intro_place.style.marginRight = "auto";



    }

    function fillScene() {
        var material = new THREE.MeshBasicMaterial( { color: 0x3166bc, wireframe: true } );

        var geometry = new THREE.IcosahedronGeometry(20, 4);

        sphere = new THREE.Mesh(geometry, material);

        scene.add(sphere);


        plane = new THREE.Mesh(new THREE.PlaneGeometry(1000,1000,100,100), new THREE.MeshBasicMaterial( { color: 0xbbbbbb, wireframe: true } ));
        plane.rotateX(90);
        plane.position.y = -20;
        scene.add(plane);


        camera.position.z = 60;
        camera.lookAt(new THREE.Vector3(0,0,0));

    }


    function animate() {
        sphere.rotation.y += 0.001;
        plane.rotation.z += 0.001;
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

    }


};
