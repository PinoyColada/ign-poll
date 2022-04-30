import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Client from '../services/api'

const PollOptions = () => {
    const location = useLocation();
    const { poll_id, question } = location.state;
    const [options, setOptions] = useState([])
    const [option_id, setOptionId] = useState('')

    useEffect(() => {
        const handleChoices = async () => {
            const list = await Client.get(`/poll/pollInfo/${poll_id}`)
            setOptions(list.data)
        }
        handleChoices()
    }, [])

    const upVote = async () => {
        await Client.put(`poll/pollInfo/vote/${option_id}`, {
            id: option_id
        });
    }

    if (option_id != '') {
        upVote();
        window.location.reload()
    }




    return (
        <div>
            <h1> {question} </h1>
            <div>
                {options.map((option) => (
                    <div key={option.id}>
                        <h3>{option.choice}</h3>
                        <p> Total Votes: {option.vote_count}</p>
                        <button onClick={() =>  setOptionId(option.id)}>Vote</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PollOptions