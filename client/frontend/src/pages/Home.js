import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Spinner'

const Home = () => {
    const { loading, error } = useSelector(state => state.auth)
    return (
        <>
            {error && <span>{alert(error)}</span>}
            {loading ? <Spinner /> : (
                <>
                    <h1>Main page</h1>
                </>
            )}

        </>
    )
}

export default Home