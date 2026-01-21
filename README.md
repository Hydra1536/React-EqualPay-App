# EqualPay

EqualPay is a React-based application for calculating fair settlements when multiple people spend money together, such as trips, hangouts, or shared bills.  
It helps users quickly see who needs to pay whom so that everyone ends up paying an equal amount.

---

## ✨ Key Features

- Add any number of people and their individual expenses
- Automatically calculates fair settlements
- Clear and easy-to-understand results
- **Works as a mobile app and can be used offline**
- No login, no backend, no data tracking

---

## 📱 Use as a Mobile App (Offline Supported)

EqualPay is built as a **Progressive Web App (PWA)**.

👉 **How to install on mobile:**
1. Open the app in your mobile browser  
2. Tap **“Add to Home Screen”**  
3. Install the app  

Once installed, the app:
- Works like a normal mobile app
- Opens from your home screen
- **Does not require an internet connection**
- Runs completely offline after installation

---

## 🗂️ Project Structure

equalpay/
├── public/ # Static assets & PWA icons
│ └── favicon.ico
├── src/ # Application source code
│ ├── assets/
│ │ └── react.ico
│ ├── components/ # UI Components
│ │ ├── PersonInput.jsx
│ │ └── SettlementResult.jsx
│ ├── utils/ # Business logic
│ │ └── calculateSettlement.js
│ ├── App.css # App styles
│ ├── App.jsx # Main App component
│ ├── index.css # Global styles
│ └── main.jsx # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js


---

## 🚀 Installation (Local Development)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd equalpay
Install dependencies:

npm install
Start the development server:

npm run dev
Open your browser at:

http://localhost:5173
🧮 How to Use
Enter the number of people

Provide each person’s name and the amount they paid

Click “Calculate Settlement”

The app shows who needs to pay whom and how much

Scroll automatically moves to the result section

🛠️ Technologies Used
React

Vite

JavaScript

Progressive Web App (PWA)

🌐 Live App
You can use the app here:

👉 https://equalpay.vercel.app/

Open the link on your mobile device and add it to your home screen to use it as an offline mobile app.