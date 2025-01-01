import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RowsProvider } from "./RowsContext";

ReactDOM.render(
  <RowsProvider>
    <App />
  </RowsProvider>,
  document.getElementById("root")
);

const tabs = [
  "Projection",
  "Cash Flow",
  "Payroll Calculator",
  "Recurring Spend",
  "Revenues",
  "Discretionary Spend",
  "Money Movement",
  "Owner Compensation",
  "Debt Tracker",
  "Personal Financial Statement",
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Projection");
  const [debtList, setDebtList] = useState(() => {
    return JSON.parse(localStorage.getItem("debtList")) || [];
  });
  const [financialList, setFinancialList] = useState(() => {
    return JSON.parse(localStorage.getItem("financialList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("debtList", JSON.stringify(debtList));
  }, [debtList]);

  useEffect(() => {
    localStorage.setItem("financialList", JSON.stringify(financialList));
  }, [financialList]);

  const addDebt = (debt) => {
    setDebtList([...debtList, debt]);
  };

  const addFinancialItem = (item) => {
    setFinancialList([...financialList, item]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "1rem" }}>
      <header style={{ backgroundColor: "#FF8200", color: "#FFFFFF", padding: "1rem", textAlign: "center" }}>
        <h1>Cash Flow Reporting Tool</h1>
      </header>
      <div style={{ display: "flex", marginTop: "1rem" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: activeTab === tab ? "#FF8200" : "#FFEAD5",
              color: activeTab === tab ? "#FFFFFF" : "#000000",
              border: "none",
              cursor: "pointer",
              marginRight: "0.5rem",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "1rem" }}>
        {activeTab === "Debt Tracker" && (
          <DebtTracker debtList={debtList} addDebt={addDebt} />
        )}
        {activeTab === "Personal Financial Statement" && (
          <FinancialStatement
            financialList={financialList}
            addFinancialItem={addFinancialItem}
          />
        )}
        {tabs.includes(activeTab) && !["Debt Tracker", "Personal Financial Statement"].includes(activeTab) && (
          <p>Placeholder for {activeTab} content.</p>
        )}
      </div>
    </div>
  );
}

function DebtTracker({ debtList, addDebt }) {
  const [form, setForm] = useState({ name: "", original: "", balance: "", terms: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.original && form.balance && form.terms) {
      addDebt(form);
      setForm({ name: "", original: "", balance: "", terms: "" });
    }
  };

  return (
    <div>
      <h2>Debt Tracker</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Debt Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          type="number"
          placeholder="Original Amount"
          value={form.original}
          onChange={(e) => setForm({ ...form, original: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          type="number"
          placeholder="Current Balance"
          value={form.balance}
          onChange={(e) => setForm({ ...form, balance: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="Terms"
          value={form.terms}
          onChange={(e) => setForm({ ...form, terms: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem", backgroundColor: "#FF8200", color: "#FFFFFF", border: "none" }}>
          Add Debt
        </button>
      </form>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Debt Name</th>
            <th>Original Amount</th>
            <th>Current Balance</th>
            <th>Terms</th>
          </tr>
        </thead>
        <tbody>
          {debtList.map((debt, index) => (
            <tr key={index}>
              <td>{debt.name}</td>
              <td>{debt.original}</td>
              <td>{debt.balance}</td>
              <td>{debt.terms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FinancialStatement({ financialList, addFinancialItem }) {
  const [form, setForm] = useState({ name: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.amount) {
      addFinancialItem(form);
      setForm({ name: "", amount: "" });
    }
  };

  return (
    <div>
      <h2>Personal Financial Statement</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Item Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem", backgroundColor: "#FF8200", color: "#FFFFFF", border: "none" }}>
          Add Item
        </button>
      </form>

      <ul>
        {financialList.map((item, index) => (
          <li key={index}>{`${item.name}: $${item.amount}`}</li>
        ))}
      </ul>
    </div>
  );
}
