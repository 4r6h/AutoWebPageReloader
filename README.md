# 🔁 Auto Web Page Reloader (Chrome Extension)

A simple and powerful Chrome extension that reloads any webpage at your desired interval — continuously and reliably — even after the page refreshes!

---

## 🚀 Features

- ✅ Reload any webpage at a user-defined interval (in seconds)
- ✅ Works continuously — does **not stop after first reload**
- ✅ One-click **Start/Stop** toggle
- ✅ Clean popup UI with inbuilt interval input (no prompts)
- ✅ Remembers interval and status per tab
- ✅ Automatically resumes reloading after each refresh
- ✅ Built with Manifest V3 and modern Chrome APIs

---

## 📦 Installation

1. Clone or [Download this repository as ZIP](https://github.com/4R6H/AutoWebPageReloader/archive/refs/heads/main.zip)
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the extracted folder

Done! The extension icon will now appear in your Chrome toolbar.

---

## 🧪 Usage

1. Click the extension icon
2. Enter your desired interval (in seconds)
3. Click **Start**
4. The page will begin reloading at that interval
5. Click **Stop** to cancel auto-reloading

---

## 🧠 How It Works

- The extension injects a content script (`content.js`) that starts a reload timer
- On every page reload, a **background service worker** (`background.js`) re-injects the content script
- The reload status and interval are stored using `chrome.storage.local`

This ensures **continuous and persistent reloading**, even if the popup is closed or the tab refreshes.

---

## 📁 Folder Structure

```
AutoWebPageReloader/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── background.js
└── README.md
```

---

## 📜 License

MIT License. Use freely, modify, and contribute!

---

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues or suggest improvements.

---

## ✨ Author

Built by [4R6H](https://github.com/4R6H)