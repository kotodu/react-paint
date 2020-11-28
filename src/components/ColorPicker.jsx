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
const ColorPicker = ({
    color,
    setColor,
    id,
    label,
    isStroke,
    changeCheckStroke
}) => {

    // label
    const pickerLabel = (
        <h3
            className="form-label col"
        >
            <label
                htmlFor={id}
            >
                {label}
            </label>
        </h3>
    );

    // 有効化チェックボックス
    const strokeCheck = (
        <div
            className="form-check col align-self-center"
        >
            <input
                className="form-check-input"
                type="checkbox"
                checked={isStroke}
                id={"check-" + id}
                onChange={() => {
                    changeCheckStroke();
                }}
            />
            <label
                className="form-check-label"
                htmlFor={"check-"+id}
            >
                有効化
            </label>
        </div>
    )

    // picker本体
    const pickerInput = (
        <input
            type="color"
            className="form-control form-control-color col"
            id={id}
            value={color}
            title="Choose your color"
            onChange={(e) => {
                // 新たな色を上位コンポーネントへ渡す
                const newColor = e.target.value;
                setColor(newColor);
            }}
        />
    );


    // 描画内容
    return (
        <div
            className="container row"
        >
            {pickerLabel}
            {strokeCheck}
            {pickerInput}
        </div>
    );
}

// デフォルトエクスポート
export default ColorPicker;