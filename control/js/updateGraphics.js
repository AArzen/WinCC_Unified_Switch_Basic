function update() {
    const sw = document.getElementById("switchControl");
    if (!sw) return;

    const width = WebCC?.Properties?.Width ?? 60;
    const height = WebCC?.Properties?.Height ?? 30;

    const colorOn = WebCC?.Properties?.ColorOn !== undefined
        ? toColor(WebCC.Properties.ColorOn)
        : 'rgba(32, 151, 243, 1)';

    const colorOff = WebCC?.Properties?.ColorOff !== undefined
        ? toColor(WebCC.Properties.ColorOff)
        : 'rgba(100, 116, 139, 0.377)';

    const knobColor = WebCC?.Properties?.KnobColor !== undefined
        ? toColor(WebCC.Properties.KnobColor)
        : 'rgba(255, 255, 255, 1)';

    const startVal = WebCC?.Properties?.StartValue ?? 0;

    sw.style.width = width + "px";
    sw.style.height = height + "px";
    sw.checked = !!startVal;

    // Set css varibales
    document.documentElement.style.setProperty('--color-on', colorOn);
    document.documentElement.style.setProperty('--color-off', colorOff);
    document.documentElement.style.setProperty('--knob-color', knobColor);

    // Event on change
    sw.onchange = () => {
        const value = sw.checked ? 1 : 0;
        console.log("Switch value:", value);
        WebCC?.Events?.fire?.("switchChanged", { value });
    };
}

function toColor(num) {
    num >>>= 0;
    const b = num & 0xff,
        g = (num >>> 8) & 0xff,
        r = (num >>> 16) & 0xff,
        a = ((num >>> 24) & 0xff) / 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

window.update = update;
