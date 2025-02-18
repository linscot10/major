import React from 'react'
import { BiDonateBlood, BiUserCircle } from 'react-icons/bi'
import { useSelector } from 'react-redux'


const Header = () => {
    const { user } = useSelector(state => state.auth)
    return (

        <>
            <nav class="navbar ">
                <div class="container-fluid">
                    <div class="navbar-brand">
                        <BiDonateBlood color='red' /> Blood Bank App
                    </div>
                    <ul class="navbar-nav flex-row">
                        <li class="nav-item mx-3">
                            <p class="nav-link">
                                <BiUserCircle />  Welcome {user.name}!
                            </p>
                        </li>
                        <li class="nav-item mx-3">
                            <button class="btn btn-danger">LogOut</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header