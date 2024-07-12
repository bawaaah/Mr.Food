import React from 'react'

function AdminNavigationBar() {
  return (
    <div className='bg-dark' >
        <div>
            <div className="p-2">
                <h3 className='text-light p-2'>Admin Dashboard</h3>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link active text-light">Category</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light">Item</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light">FeedBack</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AdminNavigationBar