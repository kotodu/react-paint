import React from "react";
// 参考
// https://qiita.com/kotodu/items/b563dfe8b08bb3338eb5



/**
 * @class PaintArea
 * @summary 実際に描画可能な領域
 */
class PaintArea extends React.Component {
    constructor(props) {
        super(props);
        /**
         * stateの初期設定
         */
        this.state = {
            /**
             * @var {boolean} drawing 線を描画中かどうか
             * @default false
             */
            drawing: false
        }
        /**
         * @property {number} px 線幅
         * @default 4
         * @description class記法なので毎回更新する必要あり
         */
        this.px = props.lineWidth;

        /**
         * @property {string} lineColor 線色
         * @description class記法なので毎回更新する必要あり
         * また、有効化かどうかで実際に描画されるか異なる
         */
        this.lineColor = props.lineColor;

        /**
         * @property {string} fillColor 塗り色
         */
        this.fillColor = props.fillColor;

        // Refの詳細
        // https://ja.reactjs.org/docs/refs-and-the-dom.html
        this.paintArea = React.createRef();
    }

    /**
     * @summary DOM描画完了時、contextを取得し、線幅と線色を設定する
     */
    componentDidMount() {
        // 現在のcontextを取得する
        this.ctx = this.paintArea.current.getContext("2d");
        this.ctx.lineWidth = this.px;
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.fillStyle = this.fillColor;
    }

    /**
     * @summary 更新があった場合、線幅、線色を更新する
     */
    componentDidUpdate() {
        // thispxを更新
        this.px = this.props.lineWidth;
        this.lineColor = this.props.lineColor;
        this.fillColor = this.props.fillColor;

        // canvasの線幅を更新
        this.ctx.lineWidth = this.px;
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.fillStyle = this.fillColor;
    }

    /**
     * @method drawLineStart 線の描画を開始する
     * @param {number} x X座標
     * @param {number} y Y座標
     */
    drawLineStart(x, y) {

        // 描画開始
        this.setState({
            drawing: true
        });

        // 線を開始する
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.stroke();
    }

    /**
     * @method drawingLine 線に点を追加する
     * @param {number} x X座標
     * @param {number} y Y座標
     */
    drawingLine(x, y) {
        const ctx = this.ctx;
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    /**
     * @method drawLineEnd 線の描画を終了する
     * @param {number} x X座標
     * @param {number} y Y座標
     */
    drawLineEnd(x, y) {

        // 描画終了処理
        this.setState({
            drawing: false
        });

        // 線も閉じる
        const ctx = this.ctx;
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    render() {
        // canvas
        const canvas = (
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
                    // 描画を開始する
                    const x = e.pageX - e.currentTarget.offsetLeft;
                    const y = e.pageY - e.currentTarget.offsetTop;
                    this.drawLineStart(x, y);
                }}
                onMouseMove={e => {
                    const x = e.pageX - e.currentTarget.offsetLeft;
                    const y = e.pageY - e.currentTarget.offsetTop;

                    // 描画中なら点を追加する
                    // また、描画もおこなう
                    if (this.state.drawing) {
                        this.drawingLine(x, y);
                    }
                }}
                onMouseUp={e => {
                    const x = e.pageX - e.currentTarget.offsetLeft;
                    const y = e.pageY - e.currentTarget.offsetTop;
                    this.drawLineEnd(x, y);
                }}
            />
        );

        // 描画内容
        return (
            <main
                className="col-8 text-center"
            >
                {canvas}
            </main>
        );

    }
}
export default PaintArea;