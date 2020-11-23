import React from "react";
// 参考
// https://qiita.com/kotodu/items/b563dfe8b08bb3338eb5

class PaintArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawing: false
        }
        /**
         * @property {number} px 線幅
         * @default 4
         * @description class記法なので毎回更新する必要あり
         */
        this.px = props.lineWidth;
        this.color = props.lineColor;
        // Refの詳細
        // https://ja.reactjs.org/docs/refs-and-the-dom.html
        this.canvas = React.createRef();
        this.paintArea = React.createRef();
    }
    draw(px, color) {
        // https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D
        const canvas = this.canvas.current;
        const context = canvas.getContext("2d");
        let ctx = context.canvas.getContext("2d");
        // 引数のpxをlinewidthに
        ctx.lineWidth = px;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
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
        this.ctx.lineWidth = this.px;
        this.ctx.strokeStyle = this.color;
        this.draw(this.px);
    }
    componentDidUpdate() {
        // thispxを更新
        this.px = this.props.lineWidth;
        this.color = this.props.lineColor;

        // 家を描画
        this.draw(this.px, this.color);

        // canvasの線幅を更新
        this.ctx.lineWidth = this.px;
        this.ctx.strokeStyle = this.color;
    }
    render() {
        return (
            <div
            >
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

                        // 描画開始
                        this.setState({
                            drawing: true
                        });

                        // 線を開始する
                        const ctx = this.ctx;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.stroke();
                    }}
                    onMouseMove={e => {
                        const y = e.pageY - e.currentTarget.offsetTop;
                        const x = e.pageX - e.currentTarget.offsetLeft;

                        // 描画中なら点を追加する
                        // また、描画もおこなう
                        if (this.state.drawing) {
                            const ctx = this.ctx;
                            ctx.lineTo(x, y);
                            ctx.stroke();
                        }
                    }}
                    onMouseUp={e => {
                        const y = e.pageY - e.currentTarget.offsetTop;
                        const x = e.pageX - e.currentTarget.offsetLeft;

                        // 描画終了処理
                        this.setState({
                            drawing: false
                        });

                        // 線も閉じる
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