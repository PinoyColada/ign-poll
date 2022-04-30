import React from 'react'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PollPage = () => {
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
      <div className='pollContainerWrapper'>
        {polls.map((poll) => (
          <div key={poll.id} className='pollContainer'>
            <h3 className='pollTitle'>{poll.question}</h3>
            <img className='pollImg' src={poll.img} alt="Poll" />
            <Link to={`poll/pollInfo/${poll.id}`} state={{ poll_id: poll.id, question: poll.question }}><button className='pollBtn'> View Choices </button></Link>
          </div>
        ))}
      </div>
      <h3>Don't see a poll you're looking for? Create a poll now by simply signing in!</h3>
    </div>
  )
}

export default PollPage