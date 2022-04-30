import React from 'react'
import Client from '../services/api'
import DeleteAPoll from '../components/DeleteAPoll'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Profile = ({ user }) => {

  const [polls, setPolls] = useState([])
  const user_id = user.id;

  useEffect(() => {
    const handleUserPolls = async () => {
      const list = await Client.get(`poll/${user_id}`)
      setPolls(list.data)
    }
    handleUserPolls()
  }, [user_id])

  return (
    <div>
      <h1>{user.userName}'s Polls</h1>
      <div className='pollContainerWrapper'>
        {polls.map((poll) => (
          <div key={poll.id} className='pollContainer'>
            <h3 className='pollTitle'>{poll.question}</h3>
            <img className='pollImg' src={poll.img} alt="Poll" />
            <Link to={`poll/pollInfo/${poll.id}`} state={{ poll_id: poll.id, question: poll.question }}>
              <button className='pollBtn'> View Choices </button>
            </Link>
            <DeleteAPoll poll_id={poll.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile