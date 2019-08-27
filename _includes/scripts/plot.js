class Plot {
    constructor(canvas_id, offset_x, offset_y, max_x, max_y, label_x = 'x', label_y = 'y') {
        this.ctx = document.getElementById(canvas_id).getContext('2d');
        this.max_x = max_x;
        this.max_y = max_y;
        this.scale_x = this.ctx.canvas.width / max_x;
        this.scale_y = this.ctx.canvas.height / max_y;
        this.offset_x = offset_x * this.scale_x;
        this.offset_y = offset_y * this.scale_y;
        this.label_x = label_x;
        this.label_y = label_y;

        this.fontSize = 10; // px
        this.ctx.font = `${this.fontSize}px sans-serif`;

        this.defaultStrokeStyle = '#000000';

        this.drawGridLines();
    }

    drawGridLines() {
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.translateY(0));
        this.ctx.lineTo(this.ctx.canvas.width, this.translateY(0));
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(this.translateX(0), 0);
        this.ctx.lineTo(this.translateX(0), this.ctx.canvas.height);
        this.ctx.stroke();
        this.ctx.closePath();

        // draw x-axis
        for (let i = 0; i <= this.max_x; i += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.translateX(i), this.translateY(0) - 5);
            this.ctx.lineTo(this.translateX(i), this.translateY(0) + 5);
            this.ctx.stroke();
            this.ctx.closePath();

            this.ctx.fillText(i.toString(10), this.translateX(i) + 1,
                this.translateY(0) + this.fontSize);
        }
        const labelXSize = this.ctx.measureText(this.label_x);
        this.ctx.fillText(this.label_x, this.translateX(this.max_x) - this.offset_x - labelXSize.width,
            this.translateY(0) - 3);

        // draw y-axis
        for (let i = 0; i < this.max_y; i += 50000) {
            if (i > 0) {
                this.ctx.beginPath();
                this.ctx.moveTo(this.translateX(0) - 5, this.translateY(i));
                this.ctx.lineTo(this.translateX(0) + 5, this.translateY(i));
                this.ctx.stroke();
                this.ctx.closePath();

                this.ctx.fillText(i.toString(10), this.translateX(0), this.translateY(i));
            }
        }
        this.ctx.fillText(this.label_y, this.translateX(0) + 3,
            this.translateY(this.max_y) + this.offset_y + this.fontSize);
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

    /**
     *
     * @param fn function to plot
     * @param options {{label: string, color: string}}
     */
    drawFunction(fn, options = { label: '', color: '' }) {
        if (options.color) {
            this.ctx.strokeStyle = options.color;
            this.ctx.fillStyle = options.color;
        }
        this.ctx.beginPath();
        this.ctx.moveTo(this.translateX(0), this.translateY(fn(0)));
        for (let i = 1; i < this.max_x; i++) {
            this.ctx.lineTo(this.translateX(i), this.translateY(fn(i)));
        }
        this.ctx.stroke();
        this.ctx.closePath();

        if (options.label) {
            const position = (this.max_x * 3) / 4;
            this.ctx.fillText(options.label,
                this.translateX(position),
                this.translateY(fn(position)));
        }

        this.ctx.strokeStyle = this.defaultStrokeStyle;
        this.ctx.fillStyle = this.defaultStrokeStyle;
    }
}
