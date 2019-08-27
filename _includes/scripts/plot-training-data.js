(function () {
    const plot = new Plot('graphTrainingData', 5, 10000, 300, 300000,
        'qm^2', 'EUR');
    trainingData.forEach((data) => {
        plot.drawPoint(data);
    });
})();
