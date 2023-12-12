import { useState } from "react";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [cname, setCName] = useState("");
  const [age, setAge] = useState("");
  const [disability, setDisability] = useState("no");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8333/api/child/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentName: name,
          parentEmail: email,
          parentPassword: pass,
          childName: cname, // Or use the actual child name input value
          childAge: age,
          childLearning: disability,
        }),
      });

      const data = await response.json();
      console.log(data);

      // Optionally, you can redirect the user to a different page after successful signup
      // You can use React Router for this purpose
      // Example: props.onFormSwitch('login');
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleRadioChange = (e) => {
    setDisability(e.target.value);
  };

  return (
    <div
      className="auth-form-container"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20px;",
        justifyContent: "center",
      }}
    >
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Parent name</label>
        <input
          value={name}
          id="name"
          name="name"
          placeholder="Parent name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="your-email@gmail.com"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          type="password"
          placeholder="***********"
          id="password"
          name="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <label htmlFor="childName">Child name</label>
        <input
          value={cname} // or use a separate state for child name if it's different
          type="text"
          placeholder="Child name"
          id="childName"
          name="childName"
          onChange={(e) => setCName(e.target.value)}
        />
        <label htmlFor="age">Child age</label>
        <input
          value={age}
          placeholder="Age"
          id="age"
          name="age"
          onChange={(e) => setAge(e.target.value)}
          type="number"
        />

        <label>Does your child have any learning difficulties?</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label style={{ marginRight: "20px", marginLeft: "5px" }}>
            Yes{" "}
            <input
              value="Yes"
              checked={disability === "yes"}
              onChange={handleRadioChange}
              type="radio"
            />
          </label>
          <label>
            No
            <input
              style={{ marginLeft: "5px" }}
              value="No"
              checked={disability === "no"}
              onChange={handleRadioChange}
              type="radio"
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        {" "}
        Already have an account? Login here
      </button>
    </div>
  );
}

export default Signup;
