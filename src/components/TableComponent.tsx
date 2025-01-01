import { useState } from "react";

export default function TableComponent() {
  const [rows, setRows] = useState([{ name: "Example", value: 100 }]);

  const addRow = () => {
    setRows([...rows, { name: "", value: 0 }]);
  };

  const removeRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const updateRow = (index: number, field: string, value: string | number) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div>
      <table style={{ width: "100%", border: "1px solid #000", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) =>
                    updateRow(index, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.value}
                  onChange={(e) =>
                    updateRow(index, "value", parseFloat(e.target.value) || 0)
                  }
                />
              </td>
              <td>
                <button onClick={() => removeRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow} style={{ marginTop: "1rem" }}>
        Add Row
      </button>
    </div>
  );
}
