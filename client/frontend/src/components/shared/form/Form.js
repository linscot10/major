import React, { useState } from 'react'
import InputType from './InputType'



const Form = ({ formType, submitBtn, formTitle }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('donor')
    const [name, setName] = useState('')
    const [organisationName, setOrganisationName] = useState('')
    const [hospitalName, setHospitalName] = useState('')
    const [website, setWebsite] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    return (
        <div>
            <form >
                <h1 className='text-center'>{formTitle}</h1>
                <hr />
                <div className='d-flex mb-3'>
                    <div className='form-check'>
                        <input
                            type='radio'
                            className='form-check-input'
                            name='role'
                            id='donorRadio'
                            value={'donor'}
                            onchange={(e) => setRole(e.target.value)}
                            defaultChecked
                        />
                        <label htmlFor='donorRadio' className='form-check-label'>Donor</label>
                    </div>
                    <div className='form-check ms-2'>
                        <input
                            type='radio'
                            className='form-check-input'
                            name='role'
                            id='adminRadio'
                            value={"admin"}
                            onchange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor='adminRadio' className='form-check-label'>Admin</label>
                    </div>
                    <div className='form-check ms-2'>
                        <input
                            type='radio'
                            className='form-check-input'
                            name='role'
                            id='hospitalRadio'
                            value={'hospital'}
                            onchange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor='hospitalRadio' className='form-check-label'>Hospital</label>
                    </div>
                    <div className='form-check ms-2'>
                        <input
                            type='radio'
                            className='form-check-input'
                            name='role'
                            id='organisationRadio'
                            value={'organisatio'}
                            onchange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor='organisationRadio' className='form-check-label'>Organisation</label>
                    </div>
                </div>

                {(() => {
                    switch (true) {
                        case formType === 'login': {
                            return (
                                <>
                                    <InputType
                                        labelText={"Email"}
                                        labelFor={'forEmail'}
                                        inputType={'email'}
                                        name={'email'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Password"}
                                        labelFor={'forPassword'}
                                        inputType={'password'}
                                        name={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </>
                            )
                        }

                        case formType === 'register': {
                            return (
                                <>
                                    <InputType
                                        labelText={"Email"}
                                        labelFor={'forEmail'}
                                        inputType={'email'}
                                        name={'email'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Password"}
                                        labelFor={'forPassword'}
                                        inputType={'password'}
                                        name={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <InputType
                                        labelText={"Name"}
                                        labelFor={'forName'}
                                        inputType={'text'}
                                        name={'name'}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Organisation Name"}
                                        labelFor={'forOrganisationName'}
                                        inputType={'text'}
                                        name={'organisationName'}
                                        value={organisationName}
                                        onChange={(e) => setOrganisationName(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Hospital Name"}
                                        labelFor={'forHospitalName'}
                                        inputType={'text'}
                                        name={'hospitalName'}
                                        value={hospitalName}
                                        onChange={(e) => setHospitalName(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Website "}
                                        labelFor={'forWebsite'}
                                        inputType={'text'}
                                        name={'website'}
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Address "}
                                        labelFor={'forAddress'}
                                        inputType={'text'}
                                        name={'address'}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Phone "}
                                        labelFor={'forPhone'}
                                        inputType={'number'}
                                        name={'phone'}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </>
                            )
                        }

                        default: {
                            return (
                                <h1>null</h1>
                            )
                        }

                    }
                })()}


                <div class="d-flex">

                    <button type="submit" className="btn btn-primary">{submitBtn}</button>
                </div>
            </form>
        </div>
    )
}

export default Form