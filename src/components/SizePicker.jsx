/**
 * 
 * @param {*} props 
 */
const SizePicker = (props) => {
    /**
     * @var {number} lineWidth 線幅
     * @description sizepickerで線幅が更新された場合、
     * 上位へ更新した値を渡す
     */
    const lineWidth = props.lineWidth;

    const widthInput = (
        <input
            value={lineWidth}
            type="range"
            min={1}
            max={40}
            step={0.5}
            className="form-lange"
            onChange={(e) => {
                // 新たな線幅を上位コンポーネントへ
                const newWidth = Number(e.target.value);
                props.setWidth(newWidth);
            }}
        />
    );
    // 描画内容
    return (
        <div>
            <h2>
                {lineWidth}px
            </h2>
            {widthInput}
        </div>
    );
}
export default SizePicker;