import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Spinner'
import Layout from '../components/shared/layout/Layout'

const Home = () => {
    const { loading, error } = useSelector(state => state.auth)
    return (

        <Layout>
            {error && <span>{alert(error)}</span>}
            {loading ? <Spinner /> : (
                <>
                    <h1>Main page</h1>
                </>
            )}

        </Layout>
    )
}

export default Home