import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import './Filter.css'

const Filter = () => {
    const [formState, setFormState] = useState({
        maxPrice: '',
        includes: '',
        limit: ''
    })
    const navigate = useNavigate()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const queryParams = new URLSearchParams(formState).toString();
        navigate(`/products?${queryParams}`)
    };

    return (
        <form className='filter' onSubmit={handleSubmit}>
            <label>
                Max Price: 
                <input
                    type='text'
                    name='maxPrice'
                    value={formState.maxPrice}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Includes: 
                <input
                    type='text'
                    name='includes'
                    value={formState.includes}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Limit: 
                <input
                    type='text'
                    name='limit'
                    value={formState.limit}
                    onChange={handleInputChange}
                />
            </label>
            <button type='submit'>Apply</button>
        </form>
    )
}

export default Filter
