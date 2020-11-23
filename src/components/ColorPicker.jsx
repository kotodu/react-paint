const ColorPicker = (props) => {
    const color = props.color;
    return (
        <div>
            <label
                htmlFor="exampleColorInput"
                className="form-label"
            >
                Color picker
                </label>
            <input
                type="color"
                className="form-control form-control-color"
                id="exampleColorInput"
                value={color}
                title="Choose your color"
                onChange={(e) => {
                    props.setColor(e.target.value);
                }}
            />
        </div>
    );
}
export default ColorPicker;