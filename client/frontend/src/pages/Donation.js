import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Api from '../services/Api'
import Layout from '../components/shared/layout/Layout'
import moment from 'moment'

const Donation = () => {
    const { user } = useSelector(state => state.auth)
    const [data, setData] = useState([])
    const getConsumer = async () => {
        try {
            const { data } = await Api.post('/inventory/get-inventory-hospital', {
                filters: {
                    inventoryType: 'in',
                    donor: user?._id
                }
            })
            // console.log(data)
            if (data?.success) {
                setData(data?.inventory)
            }
            // setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getConsumer()
    }, [])

    return (
        <Layout>
            <div className='container mt-4' >


                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Inventory Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.length > 0 ? (data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.bloodGroup}</td>
                                <td>{record.inventoryType}</td>
                                <td>{record.quantity}</td>
                                <td>{record.email}</td>
                                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>

                            </tr>
                        ))) : (
                            <tr>
                                <td colSpan="5">No records available</td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Donation