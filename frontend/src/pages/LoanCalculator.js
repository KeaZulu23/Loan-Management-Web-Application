// src/pages/LoanCalculator.js
import React, { useState } from "react";
import './LoanCalculator.css'; // Assuming you have a separate CSS file for styling

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoan = (e) => {
    e.preventDefault();

    if (!loanAmount || !interestRate || !loanTerm) {
      alert("Please fill in all fields.");
      return;
    }

    // Convert interest rate percentage to decimal and term to years
    const interestRateDecimal = parseFloat(interestRate) / 100;
    const monthlyInterestRate = interestRateDecimal / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    // Calculate monthly payment using the formula for an amortizing loan
    const payment = (
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    ).toFixed(2);

    setMonthlyPayment(payment);
  };

  return (
    <div className="loan-calculator-container">
      <h1>Loan Calculator</h1>
      <p>Calculate your monthly loan repayment based on the loan amount, interest rate, and term.</p>
      
      <form className="loan-calculator-form" onSubmit={calculateLoan}>
        <div className="form-group">
          <label>Loan Amount (R):</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
            required
          />
        </div>

        <div className="form-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
            required
          />
        </div>

        <div className="form-group">
          <label>Loan Term (Years):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="Enter loan term in years"
            required
          />
        </div>

        <button type="submit" className="btn-primary">Calculate</button>
      </form>

      {monthlyPayment && (
        <div className="result">
          <h2>Monthly Payment: R {monthlyPayment}</h2>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
