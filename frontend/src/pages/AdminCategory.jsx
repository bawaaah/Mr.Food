import React from 'react'
import AdminNavigationBar from '../components/AdminNavigationBar'

function AdminCategory() {
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
                        <input type="email" name="catName" id="catName" className="form-control" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="CategoryName" className='text-dark'><strong>Category Description</strong></label>
                        <textarea name="catDescription" id="" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="CategoryPhoto"><strong>Category Photo</strong></label><br />
                        <input type="file" name="" id="" className="form-control-file" />
                    </div>
                    <button type="submit" className="btn btn-danger px-4 my-2">Add</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminCategory