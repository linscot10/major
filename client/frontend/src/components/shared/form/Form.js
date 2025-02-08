import React, { useState } from 'react'
import InputType from './InputType'



const Form = ({ submitBtn, formTitle }) => {

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
                    labelText={"Hopspital Name"}
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
                    labelText={"address "}
                    labelFor={'forAddress'}
                    inputType={'text'}
                    name={'address'}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <InputType
                    labelText={"phone "}
                    labelFor={'forPhone'}
                    inputType={'number'}
                    name={'phone'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div class="d-flex">

                    <button type="submit" className="btn btn-primary">{submitBtn}</button>
                </div>
            </form>
        </div>
    )
}

export default Form