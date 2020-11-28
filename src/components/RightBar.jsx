import React from "react";
import PreviewHome from "./Preview";
import SizePicker from "./SizePicker";
import ColorPicker from "./ColorPicker";

/**
 * @summary 右サイドバー
 * @param {*} param0 線色,線幅
 */
const RightBar = ({
    lineColor,
    lineWidth,
    setLineWidth,
    setLineColor
}) => {

    // ヘッダー部
    const title = (
        <h2>描画設定</h2>
    );

    // サイズピッカー
    const sizePicker = (
        <SizePicker
            lineWidth={lineWidth}
            setWidth={(newWidth) => {
                setLineWidth(newWidth);
            }}
        />
    );

    // カラーピッカー
    const colorPicker = (
        <ColorPicker
            color={lineColor}
            setColor={(newColor) => {
                setLineColor(newColor);
            }}
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
        <aside
            className="col-4 bg-light py-5"
        >
            {title}
            <hr></hr>
            {sizePicker}
            <hr></hr>
            {colorPicker}
            <hr></hr>
            {preview}
        </aside>
    )
}
export default RightBar;