import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/layout/Layout'
import moment from 'moment'
import Api from '../../services/Api'


const DonorList = () => {
    const [data, setData] = useState([])
    const getDonors = async () => {
        try {
            const { data } = await Api.get('/admin/donor-list')
            // console.log(data)
            if (data?.success) {
                setData(data?.donorData)
            }
            // setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDonors()
    }, [])


    const handleDelete = async (id) => {
        try {
            let answer = window.prompt('Are you Sure You Want To Delete this Donor?', "Sure")
            if (!answer) return
            const { data } = await Api.delete(`/admin/delete-donor/${id}`)
            alert(data?.message)
            window.location.reload()
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <Layout>
            <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data.length > 0 ? (data?.map((record) => (
                        <tr key={record._id}>
                            <td>{record.name || record.organisationName + "(ORG)"}</td>
                            <td>{record.email}</td>
                            <td>{record.phone}</td>
                            <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                            <td>
                                <div className="btn btn-danger" onClick={() => handleDelete(record._id)}>DELETE</div>

                            </td>

                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan="5">No records available</td>
                        </tr>
                    )}


                </tbody>
            </table>
        </Layout>
    )
}

export default DonorList