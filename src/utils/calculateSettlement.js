export function calculateSettlement(people) {
  const total = people.reduce((sum, p) => sum + p.amount, 0);
  const avg = total / people.length;

  let pos = [];
  let neg = [];

  people.forEach(p => {
    const diff = +(p.amount - avg).toFixed(2);
    if (diff > 0) pos.push({ name: p.name, amt: diff });
    if (diff < 0) neg.push({ name: p.name, amt: -diff });
  });

  pos.sort((a, b) => b.amt - a.amt);
  neg.sort((a, b) => b.amt - a.amt);

  let i = 0, j = 0;
  let settlements = [];

  while (i < pos.length && j < neg.length) {
    const settle = Math.min(pos[i].amt, neg[j].amt);

    settlements.push({
      from: neg[j].name,
      to: pos[i].name,
      amount: settle.toFixed(2)
    });

    pos[i].amt -= settle;
    neg[j].amt -= settle;

    if (pos[i].amt === 0) i++;
    if (neg[j].amt === 0) j++;
  }

  return { avg: avg.toFixed(2), settlements };
}
