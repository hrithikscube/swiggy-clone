import Link from 'next/link'
import React, { Fragment } from 'react'

const CtaButton = (props) => {
    return (
        <Fragment>
            <Link href="/">
                <button
                    onClick={props.onClick}
                    className='bg-orangeLight uppercase font-poppins font-medium px-7 tracking-wide p-3 text-white w-full '>
                    {props.children}
                </button>
            </Link>
        </Fragment>
    )
}

export default CtaButton