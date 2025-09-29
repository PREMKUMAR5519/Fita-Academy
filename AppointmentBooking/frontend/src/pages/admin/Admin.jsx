import React, { useState } from 'react'
import '../../styles/Admin.css'
import Navbar from './Navbar'
import Doctors from './Doctors'
import Patients from './Patients'
import Appointments from './Appointments'
import Users from './Users'
function Admin() {
    const [show, setshow] = useState('doctors')
    return (
        <div>
            <Navbar setshow={setshow} />
            <div className='wrapper-container'>
                {show == 'doctors' && (<Doctors />)}
                {show == 'patients' && (<Patients />)}
                {show == 'appointments' && (<Appointments />)}
                {show == 'users' && (<Users />)}
            </div>
        </div>
    )
}

export default Admin