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
    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }
    if (new Date(dob).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({ username: "", email: "", phone: "", dob: "" });
    }
  };
  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <div
      className="app"
      onClick={closeHandler}
      style={isOpen ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}}
    >
      <div>
        <h1>User Details Modal</h1>
        <button onClick={() => setIsOpen(true)}>Open Form</button>
        {isOpen && (
          <div className="modal">
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
