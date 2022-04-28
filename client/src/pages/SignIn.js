import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'


const SignIn = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ userName: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ userName: '', password: '' })
        localStorage.setItem('user', payload.id)
        props.setUser(payload)
        props.toggleAuthenticated(true)
        navigate('/')
    }

    return (
        <div>
            <div className="user-form-wrapper">
                <h1> Log in </h1>
                <form onSubmit={handleSubmit}>
                    <div className='user-form-layout-group'>
                        <label className="user-form-layout-label" htmlFor="userName">Username</label>
                        <input
                            className="user-form-layout-input"
                            onChange={handleChange}
                            name="userName"
                            type="userName"
                            value={formValues.userName}
                            required
                        />
                    </div>
                    <div className='user-form-layout-group'>
                        <label className="user-form-layout-label" htmlFor="password">Password</label>
                        <input
                            className="user-form-layout-input"
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formValues.password}
                            required
                        />
                    </div>
                    <button disabled={!formValues.userName || !formValues.password}>
                        Sign In
                    </button>
                    <button onClick={() => navigate('/signup')}>
                        Don't have an account? Sign up here!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignIn