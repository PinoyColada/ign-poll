import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Client from '../services/api'

const PollOptions = () => {
    let navigate = useNavigate()
    const location = useLocation();
    const { poll_id, question } = location.state;
    const [options, setOptions] = useState([])
    const [option_id, setOptionId] = useState('')
    const [disable, setDisable] = useState(false);

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

    // async function voteIncrementer () {
    //     console.log(option.id)
    //     const upVote = await Client.put(`/poll/pollInfo/vote/${option_id}`)
    // }

    const upVote = async () => {
        // console.log(option_id)
        await Client.put(`poll/pollInfo/vote/${option_id}`, {
            id: option_id
        });
    }

    if (option_id != '' && disable == true) {
        upVote();
        window.location.reload(false)
    }




    return (
        <div>
            <h1> {question} </h1>
            <div>
                {options.map((option) => (
                    <div key={option.id}>
                        <h3>{option.choice}</h3>
                        <button disabled={disable} onClick={() => { setOptionId(option.id); setDisable(true) }}>Vote</button>
                        {/* <button value= {option.id} onClick={()=> {setOptionId(option.id); handleUpvote()}}>Vote</button> */}
                        {/* <button value= {option.id} onClick={(e) => {this.handleUpvote(e, value)}}>Vote</button> */}
                        {/* <button value={option.id} onClick={e => this.handleUpvote(e, "value")}>Vote</button> */}
                        <h3>{option.vote_count}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PollOptions