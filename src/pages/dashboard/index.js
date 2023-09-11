import React from 'react'
import Stats from '@/components/common/Stats'
import Dashboard from '@/components/common/Dashboard'


const index = () => {
    return (
        <Dashboard module={<Stats />} />
    )
}

export default index