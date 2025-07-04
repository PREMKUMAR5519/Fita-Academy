import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

  const [data, setData] = useState()

  useEffect(() => {
    async function getuserData() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(response.data)

    }
    getuserData()
  }, [])
  console.log(data)
  return (
    <div>
      <div>
        {data?.map((element, index) => (
          <ul>
            <li>{element?.name}</li>
            <li>{element?.email}</li>
            <li>{element?.username}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default App