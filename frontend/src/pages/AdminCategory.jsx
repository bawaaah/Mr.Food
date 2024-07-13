import React, { useState } from 'react'
import AdminNavigationBar from '../components/AdminNavigationBar'
import axios from 'axios'

function AdminCategory() {
    const [name, setName] =  useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState("")

    const addCat = (event) => {
        event.preventDefault()
        const formData = new FormData()

        formData.append('name',name)
        formData.append('description',description)
        formData.append('photo',photo)

        try {
            axios.post("http://localhost:3000/category/add", formData, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            alert("Category Added")
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className="row pt-5">
            <div className="col-2 flex-column">
                <AdminNavigationBar />
            </div>
            <div className="col mx-3">
                <h2 className="text-dark">Category Mangement</h2>
                <form action="" className='border border-dark border-2 p-4 rounded'>
                    <div className="form-group mb-2">
                        <label htmlFor="CategoryName" className='text-dark'><strong>Category Name</strong></label>
                        <input type="email" name="catName" id="catName" className="form-control" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="CategoryDescription" className='text-dark'><strong>Category Description</strong></label>
                        <textarea name="catDescription" id="catDes" cols="30" rows="10" className="form-control" onChange={(event) => setDescription(event.target.value)}></textarea>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="CategoryPhoto" className='text-dark'><strong>Category Photo</strong></label><br />
                        <input type="file" name="CategoryPhoto" id="catPhoto" className="form-control-file" onChange={(event) => setPhoto(event.target.files[0])}/>
                    </div>
                    <button type="button" className="btn btn-danger px-4 my-2" onClick={addCat}>Add</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminCategory