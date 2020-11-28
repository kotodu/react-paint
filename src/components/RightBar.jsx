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
    fillColor,
    isStrokeLine,
    isStrokeRect,
    setLineWidth,
    setLineColor,
    setFillColor,
    changeCheckStrokeLine,
    changeCheckStrokeRect
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

    // 枠線カラーピッカー
    const lineColorPicker = (
        <ColorPicker
            id="color-picker-lineColor"
            color={lineColor}
            setColor={(newColor) => {
                setLineColor(newColor);
            }}
            label="枠線色"
            isStroke={isStrokeLine}
            changeCheckStroke={changeCheckStrokeLine}
        />
    );

    // 塗り色カラーピッカー
    const fillColorPicker = (
        <ColorPicker
            id="color-picker-fillColor"
            color={fillColor}
            setColor={(newColor) => {
                setFillColor(newColor)
            }}
            label="塗り色"
            isStroke={isStrokeRect}
            changeCheckStroke={changeCheckStrokeRect}
        />
    );

    // サンプルのプレビュー
    const preview = (
        <PreviewHome
            lineColor={lineColor}
            lineWidth={lineWidth}
            fillColor={fillColor}
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
            {lineColorPicker}
            <hr></hr>
            {fillColorPicker}
            <hr></hr>
            {preview}
        </aside>
    )
}
export default RightBar;