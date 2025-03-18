import React, { useEffect, useState } from 'react'
import Header from '../../components/shared/layout/Header'
import Api from '../../services/Api'
const Analytics = () => {
    const [data, setData] = useState([])
    const colors = ["#884A39", "#C38154", "#FFC26F", "#4F709C", "#4942E4", "#0079FF", "#FF0600", "#22A699"]

    const getBloodGroupData = async () => {
        try {
            const { data } = await Api.get('/analytics/bloodGroup-data')
            if (data?.success) {
                setData(data?.bloodGroupData)
                // console.log(data)
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
                    data?.map((record, i) => (
                        <div className="card m-2 p-1"
                            key={i}
                            style={{ width: '18rem', backgroundColor: `${colors[i]}` }}>
                            <div className="card-body">
                                <h1 className="card-title bg-light text-dark text-center mb-3">{record.bloodGroup}</h1>
                                <p className="card-text">
                                    Total In: <b>{record.totalIn}</b> (Ml)
                                </p>
                                <p className="card-text">
                                    Total Out: <b>{record.totalOut}</b> (Ml)
                                </p>

                            </div>
                            <div class="card-footer text-light bg-dark text-center">
                                Total Available: <b>{record.availableBlood}</b> (Ml)
                            </div>
                        </div>
                    ))
                }
            </div >
        </>
    )
}

export default Analytics