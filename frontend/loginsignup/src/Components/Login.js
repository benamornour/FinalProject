import React, {useState} from "react";

function Login(props){
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container" style={{display:'flex', alignItems:'center' ,flexDirection:'column', marginTop:"20px;", justifyContent:"center"}}>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder ="your-email@gmail.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input value={pass} type="password" placeholder ="***********" id="password" name="password" onChange={(e) => setPass(e.target.value)}/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here</button>
        </div>
    );
};

export default Login;