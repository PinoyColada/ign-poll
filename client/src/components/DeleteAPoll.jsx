import React from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const DeleteAPoll = (props) => {
    let navigate = useNavigate()

    const DeletePoll = async () => {
        await Client.delete(`poll/${props.poll_id}`);
    }

    const handleDelete = () => {
        DeletePoll();
        navigate('/');
        window.location.reload(false)
    }

    return (
        <div>
            <button id = 'deleteBtn' className='pollBtn' onClick={handleDelete}>Delete Poll</button>
        </div>
    )
}

export default DeleteAPoll