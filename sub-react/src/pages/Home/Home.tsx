import React, { useEffect } from 'react'

const Home: React.FC = () => {
    useEffect(() => {
        console.log('home')
    }, [])
    return <div>home</div>
}

export default Home
