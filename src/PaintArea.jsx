import React from "react";
// 参考
// https://qiita.com/kotodu/items/b563dfe8b08bb3338eb5

class PaintArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /**
             * @property
             * @type {number}
             */
            px: 4,
            drawing: false
        }
        // Refの詳細
        // https://ja.reactjs.org/docs/refs-and-the-dom.html
        this.canvas = React.createRef();
        this.paintArea = React.createRef();
    }
    draw(px) {
        // https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D
        const canvas = this.canvas.current;
        const context = canvas.getContext("2d");
        let ctx = context.canvas.getContext("2d");
        // 引数のpxをlinewidthに
        ctx.lineWidth = px;
        // 1度消す
        ctx.clearRect(0, 0, 400, 400)
        // 以下で壁を作成
        ctx.strokeRect(75, 140, 150, 110);
        // 以下でドアを作成
        ctx.fillRect(130, 190, 40, 60);
        // 以下で屋根を作成
        ctx.moveTo(50, 140);
        ctx.lineTo(150, 60);
        ctx.lineTo(250, 140);
        ctx.closePath();
        // この設定で描画
        ctx.stroke();
    }
    componentDidMount() {
        this.ctx = this.paintArea.current.getContext("2d");
        this.ctx.lineWidth = this.state.px;
        this.draw(this.state.px);
    }
    componentDidUpdate() {
        this.draw(this.state.px);
        this.ctx.lineWidth = this.state.px;
    }
    render() {
        return (
            <div
                id="a01"
            >
                <h2>
                    {this.state.px}px
                </h2>
                <p>
                    <input
                        value={this.state.px}
                        onChange={(e) => {
                            this.setState({
                                px: e.target.value,
                            });
                        }}
                    />
                </p>
                <canvas
                    id="canvas"
                    ref={this.canvas}
                    width="400"
                    height="400"
                    style={{
                        borderStyle: "solid",
                        borderColor: "black",
                        borderWidth: 2,
                    }}
                />
                <canvas
                    id="paintArea"
                    ref={this.paintArea}
                    width={600}
                    height={600}
                    style={{
                        borderStyle: "solid",
                        borderColor: "black",
                        borderWidth: 2,
                    }}
                    onMouseDown={e => {
                        const x = e.pageX - e.currentTarget.offsetLeft;
                        const y = e.pageY - e.currentTarget.offsetTop;
                        this.setState({
                            drawing: true
                        })
                        const ctx = this.ctx;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.stroke();
                    }}
                    onMouseMove={e => {
                        const y = e.pageY - e.currentTarget.offsetTop;
                        const x = e.pageX - e.currentTarget.offsetLeft;
                        if (this.state.drawing) {
                            const ctx = this.ctx;
                            ctx.lineTo(x, y);
                            ctx.stroke();
                        }
                    }}
                    onMouseUp={e => {
                        const y = e.pageY - e.currentTarget.offsetTop;
                        const x = e.pageX - e.currentTarget.offsetLeft;
                        this.setState({
                            drawing: false
                        })
                        const ctx = this.ctx;
                        ctx.lineTo(x, y);
                        ctx.stroke();
                    }}
                />
            </div>
        );

    }
}
export default PaintArea;