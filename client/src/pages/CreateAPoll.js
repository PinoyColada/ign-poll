import React from 'react'
import Client from '../services/api'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const CreateAPoll = ({ user }) => {
  let navigate = useNavigate()
  const user_id = user.id

  const [formValues, setFormValues] = useState({
    question: '',
    img: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const CreatePoll = async () => {
    await Client({
      url: `poll/${user_id}`,
      method: 'post',
      data: formValues
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    CreatePoll()
    setFormValues({
      question: '',
      img: ''
    })
    navigate('/')
    window.location.reload(false)
  }

  return (
    <div>
      <h1>Create a Poll</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="question">Question</label>
            <input
              onChange={handleChange}
              name="question"
              type="text"
              placeholder="Messi scores an impossible shot"
              value={formValues.question}
              required
            />
          </div>
          <div>
            <label htmlFor="img">Image</label>
            <input
              onChange={handleChange}
              name="img"
              type="text"
              placeholder="This goal was insane!"
              value={formValues.img}
              required
            />
          </div>
          <button
            disabled={
              !formValues.question ||
              !formValues.img
            }
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAPoll