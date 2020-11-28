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
            lineColor: APP.LINE_COLOR
        }
    }

    render() {
        const lineWidth = this.state.lineWidth;
        const lineColor = this.state.lineColor;

        // 上部バー
        const topbar = (
            <TopBar
            />
        );

        // 描画エリア
        const paintArea = (
            <PaintArea
                lineColor={lineColor}
                lineWidth={lineWidth}
            />
        );

        // 右バー
        const rightBar = (
            <RightBar
                lineColor={lineColor}
                lineWidth={lineWidth}
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