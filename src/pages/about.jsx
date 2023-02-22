import "./about.css";
import { useState } from "react";
function About() {
  const [visible, setVisible] = useState(false);
  const [phoneVis, setPhoneVis] = useState(false);
  function getEmail() {
    return visible ? "My email: johnbitcoingarcia1@gmail.com" : " ";
  }
  function showEmail() {
    setVisible(!visible);
  }
  function getPhone() {
    return phoneVis ? "My phone number: 123-456-7890" : " ";
  }
  function validateCode(event) {
    let code = event.target.value;
    if (code.toLowerCase() === "1234abc") {
      setPhoneVis(true);
    } else {
      setPhoneVis(false);
    }
  }
  return (
    <div className="about container">
      <h1>About</h1>
      <br />
      <h3>My name: John Garcia</h3>
      <h3>{getEmail()}</h3>
      <button className="btn btn-dark" onClick={showEmail}>
        Show Email
      </button>

      <hr />

      <p>Password for number:</p>
      <input
        type="password"
        placeholder="pass = 1234abc"
        onChange={validateCode}
      />

      <h2>{getPhone()}</h2>
    </div>
  );
}

export default About;
