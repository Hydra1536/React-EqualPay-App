# EqualPay

A React application for calculating settlements, such as bill splitting or equal pay distributions among multiple people.

## ✨ Key Features

- Add any number of people and their individual expenses
- Automatically calculates fair settlements
- Clear and easy-to-understand results
- Works as a mobile app
- Fully usable **offline** after installation
- No login, no backend, no data tracking

---

## 📱 Use as a Mobile App (Offline Supported)

EqualPay is built as a **Progressive Web App (PWA)**.

### How to install on mobile:
1. Open the app in your mobile browser
2. Tap **“Add to Home Screen”**
3. Install the app

After installation:
- The app opens from your home screen like a normal mobile app
- It works **without an internet connection**
- All calculations run fully offline

---
<div class="section">
<h2>Project Structure</h2>
<pre>
equalpay/
├── public/                      # Static assets
│   └── favicon.ico
├── src/                         # Application source code
│   ├── assets/
│   │   └── react.ico
│   ├── components/              # UI Components
│   │   ├── PersonInput.jsx
│   │   └── SettlementResult.jsx
│   ├── utils/                   # Logic and helper functions
│   │   └── calculateSettlement.js
│   ├── App.css
│   ├── App.jsx                  # Main App component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── .gitignore                   # Files to ignore in Git
├── eslint.config.js             # Linting configuration
├── index.html                   # Entry HTML file
├── package-lock.json            # Locked versions of dependencies
├── package.json                 # Project dependencies and scripts
├── README.md                    # Project documentation
└── vite.config.js               # Vite configuration file
</pre>   
</div>   

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd equalpay
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## How to use

1. Enter the number of people involved in the settlement.
2. Input each person's name and their amount (positive for owed, negative for owing).
3. Click "Calculate Settlement" to see the results.
4. The app will show who owes what to whom to balance the amounts.

## Technologies Used

- React
- Vite
- JavaScript
- Progressive Web App (PWA)

## 🌐 Live App

You can use the app here:

👉 https://equalpay.vercel.app/

Open the link on your mobile device and add it to your home screen to use it as an offline mobile app.

