import React, { useContext, useEffect } from "react";
import { RowsContext } from "./RowsContext";

interface RowsContextType {
  rows: any[];
  setRows: (rows: any[]) => void;
}

export default function FileUpload({ onFileUpload }: { onFileUpload: (data: any[]) => void }) {
  const context = useContext<RowsContextType>(RowsContext);
  if (!context) {
    throw new Error("RowsContext must be used within a RowsProvider");
  }
  const { rows, setRows } = context;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result as string;
        const rows = content.split("\n").map((row) => row.split(","));
        setRows(rows);
        onFileUpload(rows);
      };
      reader.readAsText(file);
    }
  };

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  return (
    <div>
      <label htmlFor="file-upload">Upload CSV, Excel, or Text File:</label>
      <input id="file-upload" type="file" accept=".csv,.txt" onChange={handleFileUpload} />
    </div>
  );
}
  