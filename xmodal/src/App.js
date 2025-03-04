import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { username, email, phone, dob } = formData;
    
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email. Please enter a valid email address.");
      return false;
    }

    // Phone validation
    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }

    // Date of Birth validation
    if (new Date(dob).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }

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

  const closeHandler = (e) => {
    // Close modal only if clicked on the overlay (background)
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="app">
      <div>
        <h1>User Details Modal</h1>
        <button onClick={() => setIsOpen(true)}>Open Form</button>

        {isOpen && (
          <div className="modal" onClick={closeHandler}>
            <div className="modal-content">
              <h2>Fill Details</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Username:
                  <br />
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInput}
                    required
                  />
                </label>
                <br />
                <label>
                  Email Address:
                  <br />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInput}
                    required
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <br />
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInput}
                    required
                  />
                </label>
                <br />
                <label>
                  Date of Birth:
                  <br />
                  <input
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={handleInput}
                    required
                  />
                </label>
                <br />
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
