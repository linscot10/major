import React from 'react'
import { userMenu } from './menus/userMenu'
import { Link, useLocation } from 'react-router-dom'
import '../../../styles/layout.css'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const { user } = useSelector(state => state.auth)
    const location = useLocation()
    return (
        <div>
            <div className='sidebar' >
                <div className='menu'>
                    {user?.role === 'organisation' && (
                        <>
                            <div className={`menu-item ${location.pathname === '/' && 'active'}`}>
                                <i className="fa-solid fa-warehouse"></i>
                                <Link to="/">Inventory</Link>
                            </div>
                            <div className={`menu-item ${location.pathname === '/donor' && 'active'}`}>
                                <i className="fa-solid fa-hand-holding-medical"></i>
                                <Link to="/donor">Donor</Link>
                            </div>
                            <div className={`menu-item ${location.pathname === '/hospital' && 'active'}`}>
                                <i className="fa-solid fa-hospital"></i>
                                <Link to="/hospital">Hospital</Link>
                            </div>

                        </>
                    )}

                    {(user?.role === 'donor' || user?.role === 'hospital') && (
                        <div className={`menu-item ${location.pathname === '/organisation' && 'active'}`}>
                            <i className="fa-sharp  fa-solid fa-building-ngo"></i>
                            <Link to="/organisation">Organisation</Link>
                        </div>
                    )}



                    {/* {userMenu.map((menu) => {
                        const isActive = location.pathname === menu.path
                        return (
                            <div className={`menu-item ${isActive && 'active'}`} key={menu.name}>
                                <i className={menu.icon}></i>
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                        )
                    })} */}
                </div>
            </div>

        </div>
    )
}

export default Sidebar