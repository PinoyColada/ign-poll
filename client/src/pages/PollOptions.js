import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Client from '../services/api'

const PollOptions = () => {
    let navigate = useNavigate()
    const location = useLocation();
    const { poll_id, question } = location.state;
    const [options, setOptions] = useState([])

    useEffect(() => {
        const handleChoices = async () => {
            const list = await Client.get(`/poll/pollInfo/${poll_id}`)
            setOptions(list.data)
        }
        handleChoices()
    }, [])

    // useEffect(() => {
    //     const incrementVote = async () => {
    //         const list = await Client.get(`/poll/pollInfo/${poll_id}`)
    //         setOptions(list.data)
    //     }
    //     incrementVote()
    // }, [])

    async function voteIncrementer (e, option) {
        console.log(option)
        // const upVote = await Client.put(`/poll/pollInfo/vote/${option_id}`)
    }

   

    return (
        <div>
            <h1> {question} </h1>
            <div>
                {options.map((option) => (
                    <div key={option.id}>
                        <h3 >{option.choice}</h3>
                        {/* <button value = {option.id} onClick={this.voteIncrementer.bind(this, option.id)}>Vote</button> */}
                        <button value = {option.id} onClick={(e)=> this.voteIncrementer(e, option.id)}>Vote</button>
                        <h3>{option.voteCount}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PollOptions