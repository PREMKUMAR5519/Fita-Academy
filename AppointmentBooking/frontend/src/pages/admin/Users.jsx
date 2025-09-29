import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setusers] = useState()
    const [popup, setPopup] = useState(false)
    const [selectedUser, setSelectedUsers] = useState()
    async function getAllusers() {
        try {
            const res = await axios.get('http://localhost:3000/allusers')
            setusers(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllusers()
    }, [])



    async function updateUsers(value) {

        if(selectedUser?.role == value){
            return alert('seleted same role')
        }
        try {
           const res=  await axios.put(`http://localhost:3000/updateuser/${selectedUser?._id}`,{
                role:value
            });
            console.log(res.data)
            setPopup(false)
            getAllusers()

        } catch (error) {
            console.log(error)
        }
    }
    console.log(selectedUser)
    return (
        <div>
            {users?.map((app, index) => (
                <div className='admin-user-card'>
                    <h4>{app.name}</h4>
                    <h4>{app.email}</h4>
                    <h4>{app.role}</h4>
                    <h4>{app._id}</h4>

                    <button onClick={() =>{ setPopup(true);setSelectedUsers(app)}}>Update</button>


                </div>
            ))}
            {popup && (
                <div className='pop-up'>
                    <div>
                        <h2>update to</h2>
                        <button onClick={() => updateUsers('admin')}>Admin</button>
                        <button onClick={(e) => updateUsers('doctor')}>doctor</button>
                        <button onClick={(e) => updateUsers('patient')}>patient</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users