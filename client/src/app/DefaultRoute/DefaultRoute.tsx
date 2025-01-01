"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

const DefaultRoute = (props: Props) => {
    const router = useRouter()
    useEffect(() => {

        if (typeof window !== 'undefined') {
            router.push('/projects/1');
          }
      
    },[router])
    return (
        <div>Redirecting to projects page...</div>
    )
}

export default DefaultRoute