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






    // var scene;
    // var camera;
    // var renderer;
    // var sphere;
    // var plane;
    // setup();
    // fillScene();
    // animate();
    //
    // function setup(){
    //     scene = new THREE.Scene();
    //     camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //
    //     renderer = new THREE.WebGLRenderer({alpha:true});
    //     renderer.setSize(600,400);
    //
    //     var intro_place = document.getElementById("three_js_101");
    //     var controls = THREE.OrbitControls(camera, renderer.domElement);
    //     intro_place.appendChild( renderer.domElement );
    //     // intro_place.style.marginLeft = "auto";
    //     // intro_place.style.marginRight = "auto";
    //
    //
    //
    // }
    //
    // function fillScene() {
    //     var material = new THREE.MeshBasicMaterial( { color: 0x3166bc, wireframe: true } );
    //
    //     var geometry = new THREE.IcosahedronGeometry(20, 2);
    //
    //     sphere = new THREE.Mesh(geometry, material);
    //     scene.add(sphere);
    //
    //     var box = new THREE.Mesh(new THREE.BoxGeometry(40,40,40),material);
    //     scene.add(box);
    //     box.position.x = 60;
    //
    //     var cylinder= new THREE.Mesh(new THREE.CylinderGeometry( 20, 20, 40, 32 ),material);
    //     scene.add(cylinder);
    //     cylinder.position.x = -60;
    //
    //     var loader = new THREE.OBJLoader();
    //     loader.load('assets/3d/logo.obj', function(geom){
    //         geom.scale.set(1,-2,1);
    //         geom.position.z = 60;
    //
    //         geom.traverse(function(child){
    //             if(child instanceof THREE.Mesh) {
    //                 child.material = material;
    //             }
    //         });
    //         scene.add(geom);
    //     });
    //
    //
    //     plane = new THREE.Mesh(new THREE.PlaneGeometry(1000,1000,100,100), new THREE.MeshBasicMaterial( { color: 0xdfdfdf, wireframe: true } ));
    //     plane.rotateX(80);
    //     plane.position.y = -20;
    //     scene.add(plane);
    //
    //
    //     camera.position.z = 200;
    //     camera.position.y = 200;
    //     camera.lookAt(new THREE.Vector3(0,0,0));
    //
    // }
    //
    //
    // function animate() {
    //     requestAnimationFrame( animate );
    //     renderer.render( scene, camera );
    //
    // }

};