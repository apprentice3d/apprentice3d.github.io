/**
 * Created by grigord on 2016-11-08.
 */
var three_js_103 = function(){
    var scene;
    var camera;
    var renderer;
    var sphere;
    var vertex_shader;
    var fragment_shader;
    setup();
    fillScene();
    animate();

    function setup(){
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer({alpha:true});
        var intro_place = document.getElementById("three_js_103");
        intro_place.appendChild( renderer.domElement );
        intro_place.style.marginLeft = "auto";
        intro_place.style.marginRight = "auto";
        renderer.setSize(400,200);

        vertex_shader = "varying vec2 vUv; void main(){vUv = uv;gl_Position = projectionMatrix*modelViewMatrix*vec4(position, 1.0);}";
        fragment_shader = "varying vec2 vUv; void main(){gl_FragColor = vec4( vec3( vUv, 0. ), 1. );}";

    }

    function fillScene() {
        var material = new THREE.ShaderMaterial( {
            vertexShader: vertex_shader,
            fragmentShader: fragment_shader,
            wireframe: true
        } );

        var geometry = new THREE.IcosahedronGeometry(20, 4);

        sphere = new THREE.Mesh(geometry, material);

        scene.add(sphere);

        camera.position.z = 60;
        camera.lookAt(new THREE.Vector3(0,0,0));
    }


    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        if( sphere) { sphere.rotation.y += 0.001; }

    }


};