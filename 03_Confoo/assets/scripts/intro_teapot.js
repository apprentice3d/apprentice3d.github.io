var intro_teapot = function(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer({alpha:true});
    var intro_place = document.getElementById("intro");
    intro_place.appendChild( renderer.domElement );
    intro_place.style.marginLeft = "auto";
    intro_place.style.marginRight = "auto";
    // renderer.setSize(intro_place.clientWidth, intro_place.clientHeight);
    renderer.setSize(400,200);

    var material = new THREE.MeshBasicMaterial( { color: 0x3166bc, wireframe: true } );
    var loader = new THREE.OBJLoader();
    var teapot;
    loader.load('assets/3d/teapot.obj', function(geom){
        geom.scale.set(0.13,0.13,0.13);
        geom.position.y = -0.5;

        geom.traverse(function(child){
            if(child instanceof THREE.Mesh) {
                child.material = material;
            }
        });
        teapot = geom;
        scene.add(teapot);
    });

    camera.position.z = 5;
    camera.position.y = 3;
    camera.lookAt(new THREE.Vector3(0,0,0));
    render();

    function render() {
        requestAnimationFrame( render );
        renderer.render( scene, camera );
        if( teapot) { teapot.rotation.y += 0.01; }

    }


};