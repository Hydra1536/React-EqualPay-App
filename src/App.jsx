import { useState, useRef } from "react";
import PersonInput from "./components/PersonInput";
import SettlementResult from "./components/SettlementResult";
import { calculateSettlement } from "./utils/calculateSettlement";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(1);
  const [people, setPeople] = useState([]);
  const [result, setResult] = useState(null);

  // 👇 REF FOR RESULT SECTION
  const resultRef = useRef(null);

  const initPeople = () => {
    setPeople(
      Array.from({ length: count }, () => ({
        name: "",
        amount: ""
      }))
    );
    setResult(null);
  };

  const updatePerson = (index, field, value) => {
    const updated = [...people];
    updated[index][field] = value;
    setPeople(updated);
  };

  const calculate = () => {
    const cleanedPeople = people.map(p => ({
      name: p.name.trim(),
      amount: Number(p.amount)
    }));

    // ❗ INVALID SUBMIT CHECK
    if (cleanedPeople.some(p => !p.name || isNaN(p.amount))) {
      alert("Please fill all fields correctly");
      return;
    }

    setResult(calculateSettlement(cleanedPeople));

    // 👇 AUTO SCROLL AFTER RESULT RENDERS
    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 0);
  };

  return (
    <div className="container">
      <h1>EqualPay</h1>
      <p>একসাথে ঘোরাঘুরি বা খাওয়া-দাওয়ার খরচ সমানভাবে ভাগ করা নিয়ে চিন্তিত? কে কত টাকা ফেরত পাবে বা কাকে কত দিতে হবে, তার একটি পরিষ্কার তালিকা পেতে সবার নাম এবং কে কত খরচ করেছে তা যোগ করুন।
<br></br>
<br></br>
আড্ডা হবে প্রাণখুলে, আর হিসাব হবে EqualPay-তে!✨<br></br>
</p><br></br>

      <div className="card">
        <label>Number of People</label>
        <input
          type="text"
          inputMode="numeric"
          value={count}
          onChange={e => {
            const v = e.target.value.replace(/\D/g, "");
            setCount(v ? Number(v) : 0);
          }}
        />
        <button onClick={initPeople}>Confirm</button>
      </div>

      {people.map((p, i) => (
        <PersonInput
          key={i}
          index={i}
          person={p}
          onChange={updatePerson}
        />
      ))}

      {people.length > 0 && (
        <button onClick={calculate}>Calculate Settlement</button>
      )}

      {/* 👇 RESULT SECTION WITH REF */}
      {result && (
        <div ref={resultRef}>
          <SettlementResult
            avg={result.avg}
            settlements={result.settlements}
          />
        </div>
      )}
      <p align="center">©️ 2026 MD Rezaul Karim.</p>
    </div>
  );
}
