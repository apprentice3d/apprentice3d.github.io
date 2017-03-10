/**
 * Created by grigord on 2016-11-07.
 */
var WebGLObject = function () {
    var canvasElement = document.getElementById("webgl_101");
    var context = canvasElement.getContext("webgl");
    context.clearColor(0, 0.4, 0.8, 1);
    context.clear(context.COLOR_BUFFER_BIT);
    return context;
};