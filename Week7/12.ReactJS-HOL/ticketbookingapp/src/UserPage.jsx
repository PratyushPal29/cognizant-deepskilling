import React from "react";

function UserPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Welcome User!</h2>
        <p>Flight Details:</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Flight: AI202</li>
          <li>From: Kolkata</li>
          <li>To: Delhi</li>
          <li>Date: 10th Aug 2025</li>
          <li>Time: 10:00 AM</li>
        </ul>
        <button>Book Ticket</button>
      </div>
    </div>
  );
}

export default UserPage;
