import React from 'react';
import ProtoNav from './sharedComps/ProtoNav';
import { Outlet } from 'react-router-dom';
import ProtoFooter from './sharedComps/ProtoFooter';

const ProtoMainRoutes = () => {
    return (
        <>
            <ProtoNav />
            <Outlet />
            <ProtoFooter />
        </>
    );
};

export default ProtoMainRoutes;