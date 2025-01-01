import React from 'react';
import FileUpload from "@/components/FileUpload";

const TableComponent: React.FC = () => {
  return (
    <div>
      {/* Your table component code here */}
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <TableComponent />
      <FileUpload onFileUpload={(data: any) => console.log("Uploaded Data:", data)} />
    </div>
  );
}
