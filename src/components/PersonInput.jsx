export default function PersonInput({ index, person, onChange }) {
  const handleAmountChange = (e) => {
    // Allow only digits
    const value = e.target.value.replace(/\D/g, "");
    onChange(index, "amount", value);
  };

  return (
    <div className="card">
      <label>Name</label>
      <input
        type="text"
        placeholder="e.g. Batman"
        value={person.name}
        onChange={e => onChange(index, "name", e.target.value)}
      />

      <label>Paid Amount (Taka)</label>
      <input
        type="text"
        inputMode="numeric"
        placeholder="e.g. 600"
        value={person.amount}
        onChange={handleAmountChange}
      />
    </div>
  );
}
