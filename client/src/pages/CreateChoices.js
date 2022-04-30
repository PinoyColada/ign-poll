import React from 'react'
import Client from '../services/api'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const CreateChoices = () => {

    const [formValues, setFormValues] = useState({
        question: '',
        img: '',
        voteCount: '0'
      })

    function addAnswer() {
        this.setFormValues({ options: [...this.state.options, ''] });
    }

    return (
        <div>
            <h1>This is the create choices page</h1>
        </div>
    )
}

export default CreateChoices