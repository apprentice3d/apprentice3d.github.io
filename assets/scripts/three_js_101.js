var three_js_101 = function(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer({alpha:true});
    var intro_place = document.getElementById("three_js_101");
    intro_place.appendChild( renderer.domElement );
    intro_place.style.marginLeft = "auto";
    intro_place.style.marginRight = "auto";
    // renderer.setSize(intro_place.clientWidth, intro_place.clientHeight);
    renderer.setSize(400,200);

    var material = new THREE.MeshBasicMaterial( { color: 0x3166bc, wireframe: true } );

    var geometry = new THREE.SphereGeometry(2,8,8);

    var sphere = new THREE.Mesh(geometry, material);
    // sphere.set.scale(0.5,0.5,0.5);

    scene.add(sphere);

    camera.position.z = 6;
    camera.lookAt(new THREE.Vector3(0,0,0));
    render();

    function render() {
        requestAnimationFrame( render );
        renderer.render( scene, camera );
        if( sphere) { sphere.rotation.y += 0.01; }

    }


};