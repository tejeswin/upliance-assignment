import React, { useState, useEffect } from "react";

const UserDataForm = () => {
  const generateUserId = () => {
    return "USER-" + Math.floor(100000 + Math.random() * 900000);
  };

  const savedData = JSON.parse(localStorage.getItem("userData")) || {};

  const [formData, setFormData] = useState({
    userId: savedData.userId || generateUserId(),
    name: savedData.name || "",
    address: savedData.address || "",
    email: savedData.email || "",
    phone: savedData.phone || "",
  });

  const [isFormDirty, setIsFormDirty] = useState(false); // Track unsaved changes

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    // Warn user before leaving if there are unsaved changes
    const handleBeforeUnload = (event) => {
      if (isFormDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Do you really want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormDirty]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormDirty(true); // Mark form as dirty
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Form data saved!");
    setIsFormDirty(false); // Reset unsaved changes flag
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        border: "3px solid #ccc",
        borderRadius: "50px",
        boxShadow: "0 4px 8px rgba(93, 14, 61, 0.73)",
        marginBottom: "20px",
        maxWidth:'700px',
        margin:'20px auto',
        backgroundColor:'white',
        
        
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>User Data Form</h2>

      {/* User ID (Auto-Generated) */}
      <label style={labelStyle}>
        User ID:
        <input
          type="text"
          name="userId"
          value={formData.userId}
          readOnly
          style={{ ...inputStyle, backgroundColor: "#f2f2f2" }}
        />
      </label>

      {/* Name Input */}
      <label style={labelStyle}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>

      {/* Address Input */}
      <label style={labelStyle}>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>

      {/* Email Input */}
      <label style={labelStyle}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>

      {/* Phone Input */}
      <label style={labelStyle}>
        Phone:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>

      {/* Submit Button */}
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

const labelStyle = {
  display: "block",
  marginBottom: "10px",
  fontWeight: "bold",
};

const inputStyle = {
  display: "block",
  marginBottom: "20px",
  padding: "10px",
  width: "95%",
  borderRadius: "5px",
  border: "1px solid black",
  margin:'50px ,auto',
};

const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#28a745",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1rem",
};

export default UserDataForm;
