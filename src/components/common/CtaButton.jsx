import React, { Fragment } from 'react'

const CtaButton = (props) => {
    return (
        <Fragment>
            <button
                onClick={props.onClick}
                className='bg-footerDark p-3 rounded-lg text-white w-full '>
                {props.children}
            </button>
        </Fragment>
    )
}

export default CtaButton