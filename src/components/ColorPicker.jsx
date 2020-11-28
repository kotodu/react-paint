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
        <label
            htmlFor="color-picker"
            className="form-label"
        >
            Color Picker
        </label>
    );

    // picker本体
    const pickerInput = (
        <input
            type="color"
            className="form-control form-control-color"
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
        <div>
            {pickerLabel}
            {pickerInput}
        </div>
    );
}

// デフォルトエクスポート
export default ColorPicker;