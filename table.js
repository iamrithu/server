
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';//foe edit purpose



const Table = () => {

    const [empList, process] = useState([]);
    const [message, msgprocess] = useState("")

    const getAll = () => {
        axios.get("http://localhost:5000/ninjas")

            .then(res => {
                process(res.data)

            })

    }

    const del = data => {
        var option = window.confirm(`Are You sure To Delete ${data.firstname} ${data.lastname}`)

        if(option){
            axios.delete(`http://localhost:5000/ninjas/${data._id}`).then(res => {
                msgprocess(`${data.firstname} ${data.lastname} deleted succeffuly`)
               
            })
            getAll();
        }
    }
    useEffect(() => {
        getAll();
    }, true)

    return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-4">
                    <h3>Inter-Details</h3>
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className="text-danger"> {message}</p>
                </div>
            </div>
            <div className="row">
                <table className="table  table-resposive table-bordered text-center text-light bg-dark ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile.No</th>
                            <th>Email</th>
                            <th>Age</th>

                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empList.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {e.firstname} {e.lastname}
                                        </td>
                                        <td>{e.number}</td>
                                        <td>{e.email}</td>
                                        <td>{e.age}</td>
                                        <td>{e.city}</td>
                                        <td><Link to={`/edit/${e._id}`}><button className="btn btn-warning">Edit</button></Link></td>
                                        <td><button className="btn btn-danger" onClick={del.bind(this, e)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table