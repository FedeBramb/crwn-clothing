import React from 'react'

import Directory from '../../components/Directory/Directory.component.jsx';
import { Outlet } from 'react-router-dom';


function Home() {
 
  return (
    <>
      <Directory/>
      <Outlet />
    </>
  )
}

export default Home;