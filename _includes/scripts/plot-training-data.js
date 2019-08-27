(function () {
    const plot = new Plot('graphTrainingData', 5, 10000, 300, 300000,
        'qm^2', 'EUR');
    trainingData.forEach((data, index) => {
        plot.drawPoint(data);
    });
    /*
    plot.drawFunction((x) => {
        return 1000*x + 200;
    });
     */
})();
