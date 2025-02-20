import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Spinner'
import Layout from '../components/shared/layout/Layout'
import Modal from '../components/shared/modal/Modal'
import Api from '../services/Api'

const Home = () => {
    const { loading, error } = useSelector(state => state.auth)
    const [data, setData] = useState([])

    const getBloodRecords = async () => {
        try {

            const { data } = await Api.get('/inventory/get-inventory')
            if (data?.success) {
                setData(data?.inventory)
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBloodRecords();

    }, [])
    return (

        <Layout>
            {error && <span>{alert(error)}</span>}
            {loading ? <Spinner /> : (
                <>
                    <h4
                        className='ms-4'
                        data-bs-toggle="modal"
                        data-bs-target='#staticBackrop'
                        style={{ cursor: "pointer" }}
                    >
                        <i className='fa-solid fa-plus text-success py-4'></i>
                        Add Inventory
                    </h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>

                    <Modal />
                </>
            )}

        </Layout>
    )
}

export default Home