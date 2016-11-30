/**
 * Created by grigord on 2016-11-07.
 */
var WebGLTriangle = function () {
var canvas = document.getElementById('webgl_102');

var gl = canvas.getContext('webgl'); // vs 2D

// background color
gl.clearColor(0, 0.4, 0.8, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.viewport(0, 0, canvas.width, canvas.height);

// vertex shader
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, [
    'attribute vec2 position;', // pass in attribute
    'void main() {', // every shader needs a main func
    'gl_Position = vec4(position, 0.1, 1.0);', // set a position
    '}'
].join('\n'));
gl.compileShader(vertexShader);

// fragment shader
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, [
    'precision highp float;',
    'uniform vec4 color;',
    'void main() {',
    'gl_FragColor = color;',
    '}'
].join('\n'));
gl.compileShader(fragmentShader);

var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

var vertices = new Float32Array([
    0, 0.9,
    0.9, -0.6,
    -0.9, -0.6
]);

var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

gl.useProgram(program);
program.color = gl.getUniformLocation(program, 'color');
gl.uniform4fv(program.color, [0, 0, 0, 1.0]);

program.position = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(program.position);
gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2);
};