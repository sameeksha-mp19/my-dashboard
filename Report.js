// frontend/src/components/Report.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { exportReport } from '../services/reportService';

const Report = () => {
  const handleExport = async (format) => {
    const data = await exportReport(format);
    const blob = new Blob([data], { type: format === 'pdf' ? 'application/pdf' : 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `report.${format}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div>
      <Button variant="primary" onClick={() => handleExport('pdf')}>Export as PDF</Button>
      <Button variant="secondary" onClick={() => handleExport('excel')}>Export as Excel</Button>
    </div>
  );
};

export default Report;

