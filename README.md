# Switch_Basic ![Preview](./assets/switch_basic.png)

**Switch_Basic** is a lightweight and customizable **Custom Web Control** designed for use in [WinCC Unified](https://support.industry.siemens.com/cs/document/109784439/). It provides a visual toggle switch that can trigger events and adapt its appearance via properties.

---

## 🚀 Features

- Configurable width, height, background colors (on/off), and knob color.
- Emits a `switchChanged` event when toggled.
- Offline fallback support – works in a browser even without WinCC Unified.
- Clean modular structure: `updateGraphics.js`, `webcc-init.js`, and `style.css` separated for maintainability.

---

## 📁 Project Structure

```
project-root/
│
├── css/
│   └── style.css
├── js/
│   ├── updateGraphics.js
│   ├── webcc.min.js
│   └── webcc-init.js
├── assets/
│   └── switch_basic_preview.png
├── {046C253D-4BE8-45BD-BFBE-E636B95AD694}.zip
└── index.html
```

---

## 📦 How to Use in WinCC Unified

To integrate the control into your **TIA Portal WinCC Unified project**, follow these steps:

1. Locate the folder:
   ```
   <ProjectFolder>/UserFiles/CustomControls/
   ```

2. Copy the following file into it:
   ```
   {046C253D-4BE8-45BD-BFBE-E636B95AD694}.zip
   ```

3. Open the TIA Portal and the control will be available under **Custom Controls** in the toolbox after refresh.

---

## ⚙️ Handling the `switchChanged` Event

Example event handler in WinCC Unified JavaScript:

```javascript
export function Switch_Basic_1_OnswitchChanged(item, value) {
  try {
    HMIRuntime.Trace("value : " + value.value);
    HMIRuntime.Tags("Switch").Write(value.value);
  } catch (e) {
    HMIRuntime.Trace("Error!");
    HMIRuntime.Trace(String(e));
  }
}
```

---

## 🧪 Testing Outside WinCC

You can test the control by simply opening `index.html` in a browser. Thanks to safe fallbacks in `updateGraphics.js`, it runs even without WebCC.

---

## 🆓 License

This project is provided **free of charge** with **no license restrictions**. You are free to use, modify, and distribute it without limitations.
