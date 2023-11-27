import React from 'react';
import ReservaForm from './componentes/reservaForm';
import UserHeader from './componentes/userHeader';
import UserFotos from './componentes/userFotos';
import './App.css'  

function App() {
  
  return (
    <div className='App'>
    <UserHeader /> 
    <UserFotos />
    <ReservaForm />
    </div>
  )
;}

export default App; 