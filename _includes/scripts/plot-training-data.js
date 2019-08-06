class Plot {
    constructor(ctx, offset_x, offset_y, max_x, max_y) {
        this.ctx = ctx;
        this.max_x = max_x;
        this.max_y = max_y;
        this.scale_x = ctx.canvas.width / max_x;
        this.scale_y = ctx.canvas.height / max_y;
        this.offset_x = offset_x * this.scale_x; // todo: multiply by scale
        this.offset_y = offset_y * this.scale_y; // todo: multiply by scale

        this.drawGridLines();
    }

    drawGridLines() {
        this.ctx.beginPath();
        // this.ctx.moveTo(0, this.ctx.canvas.height - this.offset_y);
        this.ctx.moveTo(0, this.translateY(0));
        this.ctx.lineTo(this.ctx.canvas.width, this.translateY(0));
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(this.translateX(0), 0);
        this.ctx.lineTo(this.translateX(0), this.ctx.canvas.height);
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.font = '10px sans-serif';
        for (let i = 0; i < this.max_x; i += 50) {
            this.ctx.fillText(i.toString(10), this.translateX(i), this.translateY(0));
        }

        for (let i = 0; i < this.max_y; i += 50000) {
            if (i > 0) {
                this.ctx.fillText(i.toString(10), this.translateX(0), this.translateY(i));
            }
        }
    }

    translateX(x_coord) {
        return (x_coord * this.scale_x) + this.offset_x;
    }

    translateY(y_coord) {
        return this.ctx.canvas.height - ((y_coord * this.scale_y) + this.offset_y);
    }

    drawPoint(coords) {
        this.ctx.beginPath();
        const x = this.translateX(coords[0]);
        const y = this.translateY(coords[1]);
        const radius = 5;
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.closePath();

        if (coords[2]) {
            this.ctx.fillText(coords[2], x + radius, y + radius);
        }
    }

    drawFunction(fn) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.translateX(0), this.translateY(fn(0)));
        for (let i = 1; i < this.max_x; i++) {
            this.ctx.lineTo(this.translateX(i), this.translateY(fn(i)));
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

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
    // ctx.translate(0.5, 0.5);
    const plot = new Plot(ctx, 10, 10000, 300, 300000);
    trainingData.forEach((data, index) => {
        plot.drawPoint(data);
    });
})();
