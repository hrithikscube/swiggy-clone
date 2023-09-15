import React from 'react'

const RenderModule = (props) => {
    return (
        <div className='lg:w-10/12 w-full p-5 lg:h-screen'>
            {props.children}
        </div>
    )
}

export default RenderModule