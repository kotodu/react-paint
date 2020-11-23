import React from "react";
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
            lineWidth: APP.LINE_WIDTH
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
                <PaintArea
                    lineWidth={this.state.lineWidth}
                />
            </div>
        );
    }
}
export default App;