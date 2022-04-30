import React from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const DeleteAPoll = (props) => {
    let navigate = useNavigate()

    const DeletePost = async () => {
        await Client.delete(`poll/${props.poll_id}`);
    }

    const handleDelete = () => {
        DeletePost();
        navigate('/');
        window.location.reload(false)
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    )
}

export default DeleteAPoll