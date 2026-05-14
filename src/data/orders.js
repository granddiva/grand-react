const orders = Array.from({ length: 30 }, (_, i) => ({
  id: `ORD-${1000 + i}`,
  customer: `Customer ${i + 1}`,
  status: ["Pending", "Completed", "Cancelled"][i % 3],
  total: `$${(Math.random() * 500).toFixed(2)}`,
  date: `2026-05-${(i % 30) + 1}`,
}));

export default orders;