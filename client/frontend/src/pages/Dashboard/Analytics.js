import React, { useEffect, useState } from 'react'
import Header from '../../components/shared/layout/Header'
import Api from '../../services/Api'
const Analytics = () => {
    const [data, setData] = useState([])

    const getBloodGroupData = async () => {
        try {
            const { data } = await Api.get('/analytics/bloodGroup-data')
            if (data?.success) {
                setData(data?.bloodGroupData)
                console.log(data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBloodGroupData();
    }, [])
    return (
        <>
            <Header />
            <div class="d-flex flex-row flex-wrap">
                {
                    data?.map(record => (
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>

                            </div>
                        </div>
                    ))
                }
            </div >
        </>
    )
}

export default Analytics