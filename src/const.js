
// 各種既定値
const defaultValues = {
    /**
     * @property {number} LINE_WIDTH 線幅
     * @default 4
     */
    LINE_WIDTH: 4,

    /**
     * @property {string} LINE_COLOR 枠色
     * @default "#0040FF"
     */
    LINE_COLOR: "#0040FF"
}

// 念の為、値が変更されないようにする
const APP = Object.freeze(defaultValues);

export {
    APP
}