import React from 'react'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'

const PollPage = () => {
  let navigate = useNavigate()
  const [polls, setPolls] = useState([])

  useEffect(() => {
    const handlePolls = async () => {
      const list = await Client.get(`poll`)
      setPolls(list.data)
    }
    handlePolls()
  }, [])


  return (
    <div>
      <h1>This is the poll page</h1>
      <div>
          {polls.map((poll) => (
            <div key={poll.id} className='pollContainer'>
              <h3 className='pollTitle'>{poll.question}</h3>
              <img className='pollImg'src={poll.img} alt="Poll"/>
              <Link to={`/${poll.id}`} state={{ id: poll.id }}><button> View Options </button></Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export default PollPage