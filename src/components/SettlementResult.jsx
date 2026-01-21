export default function SettlementResult({ avg, settlements }) {
  return (
    <div className="card">
      <h3>Average Payment: {avg} taka</h3>

      {settlements.length === 0 && (
        <p>Everyone already paid equally 🎉</p>
      )}

      {settlements.map((s, i) => (
        <p key={i}>
          <strong>{s.from}</strong> will pay <strong>{s.amount}</strong> taka to{" "}
          <strong>{s.to}</strong>
        </p>
      ))}
    </div>
  );
}
