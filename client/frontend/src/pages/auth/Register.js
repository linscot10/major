import React from 'react'
import Form from '../../components/shared/form/Form'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="row g-0">
                <div className="col-md-8 form-banner">
                    <img src="./assets/images/banner2.jpg" alt="register image" />
                </div>
                <div className="col-md-4 form-container">
                    <Form
                        formTitle={"Register "}
                        submitBtn={'Register'}
                        formType={'register'}
                    ggg>
                </div>
                <Link></Link>
            </div>

        </>
    )
}

export default Register