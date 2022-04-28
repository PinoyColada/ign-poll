import React from 'react'
import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      userName: formValues.userName,
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')

  }

  return (
    <div>
      <div className="user-form-wrapper">
        <h1> Create an account </h1>
        <form onSubmit={handleSubmit}>
          <div className='user-form-layout-group'>
            <label className="user-form-layout-label" htmlFor="userName">User Name</label>
            <input
              className="user-form-layout-input"
              onChange={handleChange}
              name="userName"
              type="text"
              value={formValues.userName}
              required
            />
          </div>
          <div className='user-form-layout-group'>
            <label className="user-form-layout-label" htmlFor="email">Email</label>
            <input
              className="user-form-layout-input"
              onChange={handleChange}
              name="email"
              type="email"
              value={formValues.email}
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
          <div className='user-form-layout-group'>
            <label className="user-form-layout-label" htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="user-form-layout-input"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.userName ||
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp