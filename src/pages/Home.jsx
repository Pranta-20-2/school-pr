import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Blogs from './Blogs';
import Bookmarks from './Bookmarks';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='h-16'>
                <NavBar />
            </div>
            <div className='flex'>
                <div>
                    <SideBar />
                </div>
                <div className='p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;