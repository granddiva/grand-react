const customers = Array.from({ length: 30 }, (_, i) => ({
  id: `CUS-${1000 + i}`,
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@gmail.com`,
  phone: `08123456${i + 10}`,
  loyalty: ["Bronze", "Silver", "Gold"][i % 3],
}));

export default customers;