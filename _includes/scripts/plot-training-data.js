(function () {
    function initCanvas() {
        const container = document.getElementById('graphTrainingData');
        const width = 800;
        container.style.setProperty('width', `${width}px`);
        container.style.setProperty('height', '300px');
        container.style.setProperty('border', '1px solid black');
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = 300;
        canvas.style.setProperty('width', `${width}px`);
        canvas.style.setProperty('height', '300px');
        container.appendChild(canvas);

        // canvas.getContext('2d').scale(2, 2);
        return canvas.getContext('2d');
    }

    const trainingData = [[100, 100000, '#1'], [100, 80000, '#2'], [150, 150000, '#3'], [200, 250000, '#4']];
    /*
    x: 0-300
    width=500
    scale_x = width/300 (?)
     */

    const ctx = initCanvas();
    const plot = new Plot(ctx, 5, 10000, 300, 300000, 'qm^2', 'EUR');
    trainingData.forEach((data, index) => {
        plot.drawPoint(data);
    });
    /*
    plot.drawFunction((x) => {
        return 1000*x + 200;
    });
     */
})();
