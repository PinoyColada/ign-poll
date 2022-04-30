import React from 'react'
import Client from '../services/api'
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const CreateAChoice = ( {user}) => {
  let navigate = useNavigate()
  const location = useLocation();
  const { poll_id, question } = location.state;
  const user_id = user.id

  const [formValues, setFormValues] = useState({
    choice: '',
    vote_count: 0,
    poll_id: poll_id
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const CreateChoice = async () => {
    await Client({
      url: `poll/${user_id}/${poll_id}`,
      method: 'post',
      data: formValues
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    CreateChoice()
    setFormValues({
      choice: ''
    })
    navigate(`/`)
    window.location.reload(false)
  }

  return (
    <div>
      <h1>Create a Choice for: {question}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="choice">Choice</label>
            <input
              onChange={handleChange}
              name="choice"
              type="text"
              value={formValues.choice}
              required
            />
          </div>
          <button disabled={ !formValues.choice }> Enter </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAChoice