import React from 'react'

const RenderModule = (props) => {
    return (
        <div className='w-10/12 p-5 bg-[#909090] h-screen'>
            {props.children}
        </div>
    )
}

export default RenderModule