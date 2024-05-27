
import * as React from 'react';

import Home from '../../components/admin/home';
import  Layout  from '../../components/admin/layout/layout';


export default function Adminhome(): React.JSX.Element {
  return (
    <Layout>
        <Home />
    </Layout>
  );
}