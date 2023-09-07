import ViewRestaurant from '@/components/ViewRestaurant'
import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
    const { query } = useRouter()

    console.log(query.slug, 'slug')

    return (
        <ViewRestaurant name={query.slug} />
    )
}

export default index