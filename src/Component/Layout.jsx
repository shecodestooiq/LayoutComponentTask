import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import '../index.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className='content'>
                <SideBar />

                {children}

            </div>
            <Footer />
        </div>
    );
}

export default Layout;
