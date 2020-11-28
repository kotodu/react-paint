import React from "react";
import ColorPicker from "./components/ColorPicker";
import PaintArea from "./components/PaintArea";
import PreviewHome from "./components/Preview";
import SizePicker from "./components/SizePicker";
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

        // ヘッダー部
        const title = (
            <h1>タイトル</h1>
        );

        // サイズピッカー
        const sizePicker = (
            <SizePicker
                lineWidth={lineWidth}
                setWidth={(newWidth) => {
                    this.setState({
                        lineWidth:newWidth
                    });
                }}
            />
        );

        // カラーピッカー
        const colorPicker = (
            <ColorPicker
                color={lineColor}
                setColor={(newColor) => {
                    this.setState({
                        lineColor:newColor
                    });
                }}
            />
        );

        // 描画エリア
        const paintArea = (
            <PaintArea
                lineColor={lineColor}
                lineWidth={lineWidth}
            />
        );

        // サンプルのプレビュー
        const preview = (
            <PreviewHome
                lineColor={lineColor}
                lineWidth={lineWidth}
            />
        );

        // 描画内容
        return (
            <div>
                {topbar}
                {title}
                {sizePicker}
                {colorPicker}
                {preview}
                {paintArea}
            </div>
        );
    }
}
export default App;