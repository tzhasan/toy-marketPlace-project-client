import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponent/Footer';

const HomeLayout = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh-168px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;