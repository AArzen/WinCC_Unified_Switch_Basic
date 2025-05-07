WebCC.start(
    function (ok) {
        if (ok) {
            console.log("✅ WebCC connected");
            update();
            WebCC.onPropertyChanged.subscribe(update);
        } else {
            console.error("❌ WebCC connection failed");
        }
    },
    {
        methods: {},
        events: ["switchChanged"],
        properties: {
            Width: 60,
            Height: 30,
            ColorOff: 1616284043,
            ColorOn: 4280468723,
            KnobColor: 4294967295,
            StartValue: 0
        }
    }
);

// Local test
document.addEventListener("DOMContentLoaded", () => {
    update();
});
