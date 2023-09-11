import React from 'react'
import SideMenu from './SideMenu'
import RenderModule from './RenderModule'

const Dashboard = ({ module }) => {

    return (
        <div className='flex flex-row items-start w-full'>

            {/* Sidebar menu */}
            
            <SideMenu />

            {/* Render Component based on folder based route */}

            <RenderModule>
                {module}
            </RenderModule>

        </div>
    )
}

export default Dashboard