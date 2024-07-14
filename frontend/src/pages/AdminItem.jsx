import React, { useEffect, useState } from 'react'
import AdminNavigationBar from '../components/AdminNavigationBar'
import axios from 'axios'

function AdminItem() {

    const [name,setName] = useState("")
    const [photo,setPhoto] = useState("")
    const [price,setPrice] = useState("")
    const [data,setData] = useState([])

    useEffect(() => {
        const getCatData = async () => {
            const catData = await axios.get("http://localhost:3000/category/getAll")
            setData(catData.data)
        }
        getCatData()

    }, [])

  return (
    <div className='container'>
        <div className="row pt-5">
            <div className="col-2 flex-column">
                <AdminNavigationBar />
            </div>
            <div className="col mx-3">
                <h2 className="text-dark">Item Mangement</h2>
                <form action="" className='border border-dark border-2 p-4 rounded'>
                    <div className="form-group mb-2">
                        <label htmlFor="ItemName" className='text-dark'><strong>Item Name</strong></label>
                        <input type="email" name="itemName" id="itemName" className="form-control" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="ItemPhoto"><strong>Item Photo</strong></label><br />
                        <input type="file" name="ItemPhoto" id="itemPhoto" className="form-control-file" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="ItemPrice"><strong>Item Price</strong></label>
                        <input type="text" name="ItemPrice" id="itemPrice" className='form-control' />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="ItemCategory"><strong>Item Category</strong></label>
                        {data.map((item)=>
                            <div className="form-check" key={item._id}>
                                <input type="radio" name="catcheck" id={item._id} className='form-check-input'/>
                                <label htmlFor="" className='form-check-label'>{item.name}</label>
                            </div>
                        )}
                    <button type="button" className="btn btn-danger px-4 mt-2">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminItem