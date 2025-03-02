import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-50 p-4">
                    {/* Sidebar content here */}
                    <Link to='/' className='font-bold pr-2'>Dashboard</Link>
                    <Link to='/blogs' className='font-bold pr-2'>Blogs</Link>
                    <Link to='/bookmarks' className='font-bold pr-2'>Bookmarks</Link>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;