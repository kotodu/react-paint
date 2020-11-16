import React from "react";
// 参考
// https://qiita.com/kotodu/items/b563dfe8b08bb3338eb5

class PaintArea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            /**
             * @property
             * @type {number}
             */
            px:4
        }
        // Refの詳細
        // https://ja.reactjs.org/docs/refs-and-the-dom.html
        this.canvas = React.createRef();
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
        this.draw(this.state.px);
    }
    componentDidUpdate() {
        this.draw(this.state.px);
    }
    render(){
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
                                px: e.target.value
                            });
                        }}
                    />
                </p>
                <canvas
                    id="canvas"
                    ref={this.canvas}
                    width="400"
                    height="400"
                />
                <br />
            </div>
        );        
    
    }
}
export default PaintArea;