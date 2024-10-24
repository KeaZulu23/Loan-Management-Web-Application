// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Assuming you have a separate CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Easy Loans</h1>
          <p>Apply for a loan, calculate your repayments, and track your loan status, all in one place.</p>
          <Link to="/application" className="btn-primary">Apply for a Loan</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Fast Loan Application</h3>
            <p>Get quick access to funds with a streamlined application process.</p>
          </div>
          <div className="feature-item">
            <h3>Easy Loan Calculator</h3>
            <p>Use our loan calculator to figure out your monthly repayments easily.</p>
            <Link to="/calculator" className="btn-secondary">Try the Calculator</Link>
          </div>
          <div className="feature-item">
            <h3>Track Repayments</h3>
            <p>Keep track of your repayments and stay updated on your loan status.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Apply for a loan in just a few simple steps. Your journey to financial support starts here.</p>
        <Link to="/application" className="btn-primary">Start Loan Application</Link>
      </section>
    </div>
  );
};

export default Home;
