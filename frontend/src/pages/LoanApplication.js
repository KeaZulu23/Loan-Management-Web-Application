// src/pages/LoanApplication.js
import React, { useState } from "react";
import './LoanApplication.css'; // Assuming you have a separate CSS file for styling

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    loanAmount: "",
    loanTerm: "",
    income: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="application-container">
      <h1>Loan Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (in months)</label>
          <input
            type="number"
            id="loanTerm"
            name="loanTerm"
            value={formData.loanTerm}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="income">Monthly Income</label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-primary">Submit Application</button>
      </form>
    </div>
  );
};

export default LoanApplication;
