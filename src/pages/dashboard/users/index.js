import React from 'react'
import Users from '@/components/modules/Users'
import Dashboard from '@/components/common/Dashboard'


const index = () => {
    return (
        <Dashboard module={<Users />} />
    )
}

export default index