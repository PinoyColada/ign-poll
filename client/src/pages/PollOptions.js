import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Client from '../services/api'

const PollOptions = () => {
    let navigate = useNavigate()
    const location = useLocation();
    const { poll_id, title } = location.state;
    const [options, setOptions] = useState([])

    useEffect(() => {
        const handleChoices = async () => {
            const list = await Client.get(`/poll/pollInfo/${poll_id}`)
            setOptions(list.data)
            console.log(options)
        }
        handleChoices()
    }, [])

    return (
        <div>
            <h1> ${title} </h1>
            <h1> This is where all the options are for the poll </h1>
            <div>
                {options.map((option) => (
                    <div key={option.id}>
                        <h3 >{option.choice}</h3>
                        <h3>{option.voteCount}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PollOptions