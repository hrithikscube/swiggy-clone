import React, { useState } from 'react'
import InputBox from '../common/Inputbox'
import CtaButton from '../common/CtaButton'
import Logo from '../common/Logo'

const Login = () => {

    const [params, setParams] = useState({
        email: '',
        password: ''
    })

    console.log(params, 'params')

    const handleChange = (e) => {
        let { name, value } = e.target

        if (name === "email") {
            setParams({ ...params, email: value })
        }

        else {
            setParams({ ...params, password: value })
        }
    }

    const [show, setShow] = useState(false)

    return (
        <div className='h-screen flex flex-row items-center'>

            <div className='lg:w-7/12 lg:block hidden'>
                <img src="https://source.unsplash.com/random/1440*800?food" alt="" className='lg:block hidden h-screen w-full object-cover' />
            </div>

            <div className='lg:w-5/12 bg-white lg:p-10 p-5 flex flex-col w-full gap-4 justify-center items-center'>

                <Logo />

                <p className='text-footerDark text-center text-sm font-poppins font-semibold my-2'>Log in as store owner</p>

                <InputBox
                    name={"email"}
                    label={"Enter Email"}
                    onChange={handleChange}
                    value={params.email}
                    styles={'w-full'}
                />

                <div className='relative w-full'>
                    <InputBox
                        name={"password"}
                        label={"Enter Password"}
                        onChange={handleChange}
                        value={params.password}
                        styles={'w-full'}
                        type={!show ? 'password' : 'text'}
                    />

                    <div onClick={() => setShow(!show)} className='absolute top-5 right-5 cursor-pointer'>
                        {
                            !show ?
                                <img src="/icons/eyeOpen.svg" alt="eyeOpen" className='w-5 h-5' /> :
                                <img src="/icons/eyeClose.svg" alt="eyeClose" className='w-5 h-5' />
                        }
                    </div>

                </div>

                <CtaButton>
                    Login
                </CtaButton>

            </div>

        </div>

    )
}

export default Login