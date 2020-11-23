import React from "react";
import ColorPicker from "./components/ColorPicker";
import PaintArea from "./components/PaintArea";
import SizePicker from "./components/SizePicker";
import { APP } from "./const";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /**
             * @property {number} 線幅
             * @default 4
             */
            lineWidth: APP.LINE_WIDTH,

            /**
             * @property {string} 枠色
             * @default "#0040FF"
             */
            lineColor: APP.LINE_COLOR
        }
    }

    render() {
        // 描画内容
        return (
            <div>
                <h1>タイトル</h1>
                <SizePicker
                    lineWidth={this.state.lineWidth}
                    setWidth={(lineWidth) => this.setState({
                        lineWidth
                    })}
                />
                <ColorPicker
                    color={this.state.lineColor}
                    setColor={(lineColor) => {
                        this.setState({
                            lineColor
                        })
                    }}
                />
                <PaintArea
                    lineColor={this.state.lineColor}
                    lineWidth={this.state.lineWidth}
                />
            </div>
        );
    }
}
export default App;