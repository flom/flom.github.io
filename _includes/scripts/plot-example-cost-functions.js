(function () {
    const plot = new Plot('exampleCostFunctions', 5, 10000, 300, 300000, 'qm^2', 'EUR');
    trainingData.forEach((data, index) => {
        plot.drawPoint(data);
    });

    // hypothesis 1
    const hypothesis1 = (x) => {
        return 100 + (500 * x);
    };
    const hypothesis2 = (x) => {
        return 200 + (1000 * x);
    };

    plot.drawFunction(hypothesis1, {
        label: 'h1',
        color: '#FF0000'
    });
    plot.drawFunction(hypothesis2, {
        label: 'h2',
        color: '#0000FF'
    });
})();
