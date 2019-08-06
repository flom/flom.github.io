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

        this.ctx.font = '8px sans-serif';
        for (let i = 0; i < this.max_x; i += 50) {
            this.ctx.fillText(i.toString(10), this.translateX(i), this.translateY(0));
        }

        for (let i = 0; i < this.max_y; i += 50000) {
            if (i > 0) {
                console.log(this.translateY(i));
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
}

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

    const trainingData = [[100, 10000], [100, 80000], [150, 150000], [200, 250000]];
    /*
    x: 0-300
    width=500
    scale_x = width/300 (?)
     */

    const ctx = initCanvas();
    // ctx.translate(0.5, 0.5);
    const plot = new Plot(ctx, 10, 10000, 300, 300000);
})();
