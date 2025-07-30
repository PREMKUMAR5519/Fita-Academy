import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteData } from './counterSlice'
function Users() {
    const users = useSelector((state)=>state)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Users list</h2>
        {users?.map((e,index)=>(
          <div key={index}>
            <p>name:{e?.name}</p>
            <p>name:{e?.email}</p>
            <button onClick={()=>{dispatch(deleteData(e))}}>delete</button>
          </div>
        ))}
    </div>
  )
}

export default Users



