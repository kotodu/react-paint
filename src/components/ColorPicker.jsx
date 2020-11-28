import React from "react";


// type Props = {
//     color: String,
//     setColor:(newColor:string)=>void
// }

//---------------------------------------------

/**
 * 
 * @param {any} props 
 * @returns {JSX.Element}
 */
const ColorPicker = (props) => {
    // 引数からの受け取り
    const color = props.color;

    // label
    const pickerLabel = (
        <h3
            className="form-label col"
        >
            <label
                htmlFor="color-picker"
            >
                枠線色
            </label>
        </h3>
    );

    // picker本体
    const pickerInput = (
        <input
            type="color"
            className="form-control form-control-color col"
            id="color-picker"
            value={color}
            title="Choose your color"
            onChange={(e) => {
                // 新たな色を上位コンポーネントへ渡す
                const newColor = e.target.value;
                props.setColor(newColor);
            }}
        />
    );


    // 描画内容
    return (
        <div
            className="container row"
        >
            {pickerLabel}
            {pickerInput}
        </div>
    );
}

// デフォルトエクスポート
export default ColorPicker;