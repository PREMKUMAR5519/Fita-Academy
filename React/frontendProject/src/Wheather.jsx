import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Wheather() {
    const [data, setData] = useState()
    const [inputValue, setInputValue] = useState('')
 


    async function handleClick() {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=543892824a091a3efd2e39b4136b024c`)
            console.log(response.data)
            setData(response.data)

        } catch (error) {
        }
    }
    return (
        <div>
            <h2> Wheather APP</h2>
            <input type="text" name="" id="" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            <ul>
                <li>city name:{data?.name}</li>
                <li>wind speed:{data?.wind?.speed}</li>
                <li>city temperature:{data?.main?.temp - 273} C</li>
            </ul>
            <button onClick={handleClick}>Find</button>

        </div>
    )
}

export default Wheather