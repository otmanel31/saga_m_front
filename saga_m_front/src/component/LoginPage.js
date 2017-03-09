import React from 'react'

class LoginPage extends React.Component{
    render(){
        return(
            <div className='loginpage'>
                <input type='text' placeholder='username' />
                <input type='password' placeholder='password' />
                <input type='submit' value='sign in' />
            </div>
        )
    }
}

export default LoginPage