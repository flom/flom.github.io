(function () {
    function initCanvas() {
        const container = document.getElementById('graphTrainingData');
        container.style.setProperty('width', '100%');
        container.style.setProperty('height', '250px');
        container.style.setProperty('border', '1px solid black');
        const canvas = document.createElement('canvas');
        canvas.style.setProperty('width', '100%');
        canvas.style.setProperty('height', '100%');
        container.appendChild(canvas);

        return canvas.getContext('2d');
    }

    function initGraph(ctx, offset_x, offset_y, max_x, max_y) {
        const canvasHeight = ctx.canvas.height;
        const scale_x = ctx.canvas.width / max_x;

        ctx.beginPath();
        ctx.moveTo(0, ctx.canvas.height - offset_y);
        ctx.lineTo(ctx.canvas.width, ctx.canvas.height - offset_y);
        ctx.stroke();
    }

    const trainingData = [[100, 10000], [100, 80000], [150, 150000], [200, 250000]];
    /*
    x: 0-300
    width=500
    scale_x = width/300 (?)
     */

    const ctx = initCanvas();
    initGraph(ctx, 10, 10, 300, 300000);
})();
