import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", phone: "", dob: "" });

  const handleInput = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const validateForm = () => {
    const { email, phone, dob } = formData;
    if (!email.includes("@") || !email.includes(".")) return alert("Invalid email");
    if (phone.length !== 10 || isNaN(phone)) return alert("Invalid phone number");
    if (new Date(dob) > new Date()) return alert("Invalid date of birth");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ username: "", email: "", phone: "", dob: "" });
      setIsOpen(false);
    }
  };

  return (
    <div className="app" style={isOpen ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}}>
      <div>
        <h1>User Details Modal</h1>
        <button onClick={() => setIsOpen(true)}>Open Form</button>
        {isOpen && (
          <div className="modal" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Fill Details</h2>
              <form onSubmit={handleSubmit}>
                <label>Username:<br /><input type="text" id="username" value={formData.username} onChange={handleInput} required /></label><br />
                <label>Email Address:<br /><input type="email" id="email" value={formData.email} onChange={handleInput} required /></label><br />
                <label>Phone Number:<br /><input type="text" id="phone" value={formData.phone} onChange={handleInput} required /></label><br />
                <label>Date of Birth:<br /><input type="date" id="dob" value={formData.dob} onChange={handleInput} required /></label><br />
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
