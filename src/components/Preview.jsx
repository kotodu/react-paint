import React from "react";

/**
 * 既定値
 */
const canvasDefault = {
    WIDTH: 100,
    HEIGHT: 100
}

/**
 * @constant CANVAS canvasについての定数
 */
const CANVAS = Object.freeze(canvasDefault);


/**
 * @summary 現在の設定でサンプルをプレビューする
 * @param {*} param0 
 * @description 家を描画する
 */
class PreviewHome extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }
    componentDidMount() {
        this.drawHome();
    }
    componentDidUpdate() {

        this.drawHome();
    }

    /**
     * @method drawHome Canvasに家を描く
     * @description px,co
     */
    drawHome() {

        // 線幅
        const px = this.props.lineWidth;

        // 線色
        const lineColor = this.props.lineColor;

        // 塗り色
        const fillColor = this.props.fillColor;

        // キャンバスの状態
        const ctx = this.canvas.current.getContext("2d");

        // https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D

        // 引数のpxをlinewidthに
        ctx.lineWidth = px;
        ctx.strokeStyle = lineColor;
        ctx.fillStyle = fillColor;
        // 1度消す
        ctx.clearRect(0, 0, CANVAS.WIDTH, CANVAS.HEIGHT)

        // 以下で壁を作成
        ctx.strokeRect(30, 50, 40,30);

        // 以下でドアを作成
        ctx.fillRect(45, 60, 10, 20);

        // 以下で屋根を作成
        ctx.moveTo(20, 50);
        ctx.lineTo(50, 20);
        ctx.lineTo(80, 50);
        ctx.closePath();

        // この設定で描画
        ctx.stroke();
    }
    render() {

        // 描画内容
        return (
            <canvas
                id="previewCanvas"
                ref={this.canvas}
                width={CANVAS.WIDTH}
                height={CANVAS.HEIGHT}
                style={{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: 1,
                }}
            />
        );
    }
}
export default PreviewHome;