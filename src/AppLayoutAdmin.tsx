
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import  Layout  from './components/admin/layout/layout';


export default function Adminhome() {
  return (
    <Layout>
        <Outlet /> 
    </Layout>
  );
}