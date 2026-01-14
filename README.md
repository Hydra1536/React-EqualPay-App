# EqualPay

A React application for calculating settlements, such as bill splitting or equal pay distributions among multiple people.

## Features

- Input multiple people and their contributions
- Calculate fair settlements automatically
- Display results in an easy-to-understand format

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

## Usage

1. Enter the number of people involved in the settlement.
2. Input each person's name and their amount (positive for owed, negative for owing).
3. Click "Calculate Settlement" to see the results.
4. The app will show who owes what to whom to balance the amounts.

## Technologies Used

- React
- Vite
- JavaScript

## You can visit from here ⬇️
https://equalpay.vercel.app/


