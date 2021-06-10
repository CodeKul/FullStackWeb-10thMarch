import React from 'react'

function Login(props) {
    console.log(props) 
    return (
        <div>
            <button onClick={props.displayLogin}>Login</button>;
        </div>
    )
}


export default Login
