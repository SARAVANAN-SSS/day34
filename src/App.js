import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import Input from './components/Input';
import Table from './components/Table'
import Header from './Header';

function App() {
  return (
    <div>
        <Header />
        <div className='mainbody'>
        <Routes>
            <Route path='/' element={<Table />} />
            <Route path='/addinput' element={<Input />} />
            <Route path='/edit/:id' element={<Edit />} />
        </Routes>
        </div>
    </div>
  )
}

export default App;