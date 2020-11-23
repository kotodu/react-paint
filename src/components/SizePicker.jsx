
const SizePicker = (props) => {
    /**
     * @var {number} lineWidth 線幅
     * @description sizepickerで線幅が更新された場合、
     * 上位へ更新した値を渡す
     */
    const lineWidth = props.lineWidth;

    // 描画内容
    return (
        <div>
            <h2>
                {lineWidth}px
            </h2>
            <p>
                <input
                    value={lineWidth}
                    type={"number"}
                    onChange={(e) => {
                        props.setWidth(Number(e.target.value));
                    }}
                />
            </p>
        </div>
    );
}
export default SizePicker;