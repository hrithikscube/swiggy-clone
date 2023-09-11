import React, { useState } from 'react'
import InputBox from '../common/Inputbox'
import CtaButton from '../common/CtaButton'
import Logo from '../common/Logo'

const Login = () => {

    const [params, setParams] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        let { name, value } = e.target

        if (name === "email") {
            setParams({ ...params, email: value })
        }

        else {
            setParams({ ...params, password: value })
        }
    }


    return (
        <div className='h-screen flex flex-row items-start'>

            <div className='lg:w-7/12 lg:block hidden'>
                <img src="https://picsum.photos/1440/800?grayscale" alt="" className='h-screen w-full object-cover' />
            </div>

            <div className='lg:w-5/12 bg-white lg:p-10 p-5 flex flex-col w-full gap-4 justify-center items-center'>

                <Logo />

                <p className='text-footerDark text-center text-sm font-poppins font-semibold my-2'>Log in with store owner credentials</p>

                <InputBox
                    name={"email"}
                    label={"Enter Email"}
                    onChange={handleChange}
                    value={params.email}
                    styles={'w-full'}
                />

                <InputBox
                    name={"password"}
                    label={"Enter Password"}
                    onChange={handleChange}
                    value={params.password}
                    styles={'w-full'}
                    type="password"
                />

                <CtaButton>
                    Login
                </CtaButton>

            </div>

        </div>

    )
}

export default Login