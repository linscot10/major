import React from 'react'
import { BiDonateBlood, BiUserCircle } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'






const Header = () => {
// getting the wrong data
    const { user } = useSelector((state) => state.auth);
    console.log(user)
    const navigate = useNavigate()
    const handleLogout = () => {

        localStorage.clear()
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');



        alert("Logout Successfully")
        navigate('/login')
    }
    return (

        <>
            <nav className="navbar ">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <BiDonateBlood color="red" /> Blood Bank App
                    </div>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item mx-3">
                            <p className="nav-link">
                                <BiUserCircle />  Welcome {" "}
                                {user?.name || user?.hospitalName || user?.organisationName} &nbsp;
                                <span className="badge bg-secondary">{user?.role}</span>
                            </p>
                        </li>
                        <li className="nav-item mx-3">
                            <button className="btn btn-danger" onClick={handleLogout}>LogOut</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header