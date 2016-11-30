
var ascii_logo = function(){
    var container;

    var camera, controls, scene, renderer;

    var sphere, plane;

    init();
    animate();

    function init() {

        var width = window.innerWidth || 2;
        var height = window.innerHeight || 2;

        container = document.getElementById('ascii_logo');
        document.body.appendChild( container );


        camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
        camera.position.y = 150;
        camera.position.z = 500;

        controls = new THREE.TrackballControls( camera );

        scene = new THREE.Scene();

        var light = new THREE.PointLight( 0xffffff );
        light.position.set( 500, 500, 500 );
        scene.add( light );

        light = new THREE.PointLight( 0xffffff, 0.25 );
        light.position.set( - 500, - 500, - 500 );
        scene.add( light );

        sphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 10 ), new THREE.MeshLambertMaterial() );
        scene.add( sphere );

        renderer = new THREE.CanvasRenderer();
        renderer.setClearColor( 0xf0f0f0 );
        renderer.setSize( width, height );

        effect = new THREE.AsciiEffect( renderer );
        effect.setSize( width, height );
        container.appendChild( effect.domElement );



        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
        effect.setSize( window.innerWidth, window.innerHeight );

    }


    function animate() {
        requestAnimationFrame( animate );
        render();

    }

    function render() {
        controls.update();
        effect.render( scene, camera );
    }

    return effect;

};