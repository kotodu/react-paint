import React from "react";

import RightBar from "./components/RightBar";
import PaintArea from "./components/PaintArea";

import TopBar from "./components/TopBar";
import { APP } from "./const";

/**
 * Appの中心的コンポーネント
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        // stateの初期化
        this.state = {
            /**
             * @property {number} 線幅
             * @default 4
             * @description 既定値を参照する
             */
            lineWidth: APP.LINE_WIDTH,

            /**
             * @property {string} 枠色
             * @default "#0040FF"
             * @description 既定値を参照する
             */
            lineColor: APP.LINE_COLOR,

            /**
             * @property {string} 塗り色
             * @default "#FF0000"
             * @description 既定値を参照する
             */
            fillColor: APP.FILL_COLOR,

            strokeLine: true,
            strokeRect: false
        }
    }

    render() {
        const lineWidth = this.state.lineWidth;
        const lineColor = this.state.lineColor;
        const fillColor = this.state.fillColor;
        const strokeLine = this.state.strokeLine;
        const strokeRect = this.state.strokeRect;

        // 上部バー
        const topbar = (
            <TopBar
            />
        );

        // 描画エリア
        const paintArea = (
            <PaintArea
                lineColor={lineColor}
                fillColor={fillColor}
                lineWidth={lineWidth}
            />
        );

        // 右バー
        const rightBar = (
            <RightBar
                lineColor={lineColor}
                lineWidth={lineWidth}
                fillColor={fillColor}
                isStrokeLine={strokeLine}
                isStrokeRect={strokeRect}
                setLineWidth={(newWidth) => {
                    this.setState({
                        lineWidth: newWidth
                    });
                }}
                setLineColor={(newColor) => {
                    this.setState({
                        lineColor: newColor
                    });
                }}
                setFillColor={(newColor) => {
                    this.setState({
                        fillColor: newColor
                    });
                }}
                changeCheckStrokeLine={() => {
                    this.setState({
                        strokeLine: !this.state.strokeLine
                    });
                }}
                changeCheckStrokeRect={() => {
                    this.setState({
                        strokeRect: !this.state.strokeRect
                    })
                }}
            />
        );

        // 描画内容
        return (
            <div>
                {topbar}
                <div
                    className="container row p-0 m-0"
                >
                    {paintArea}
                    {rightBar}
                </div>
            </div>
        );
    }
}
export default App;