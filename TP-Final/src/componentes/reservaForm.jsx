import React, { useState } from 'react';
import "./reservaForm.css";


//formulario para la reserva de paseos

const ReservaForm = () => {
  // Estados para almacenar los valores del formulario
const [dueño, setDueño] = useState('');
const [perroName, setPerroName] = useState('');
const [raza, setRaza] = useState('');
const [fecha, setFecha] = useState('');
const [hora, setHora] = useState('');
const [tiempo, setTiempo] = useState('');

  // Función para manejar el envío del formulario
const handleSubmit = (e) => {
    e.preventDefault();
    //enviar los datos a servidor o hacer el manejo correspondiente
    console.log('Datos enviados:', { dueño, perroName, raza, fecha, hora, tiempo });
    // lógica para enviar los datos backend
};

return (
    <form className='reservaForm' onSubmit={handleSubmit}>
        <h1>Registra un paseo con nosotros</h1>
    <label htmlFor='label'>
        Nombre del Dueño:
        <input type="text" 
            value={dueño} 
            onChange={(e) => setDueño(e.target.value)} />
    </label>
    <label htmlFor='label'>
        Nombre del Perro:
        <input type="text" 
            value={perroName}
            onChange={(e) => setPerroName(e.target.value)} />
    </label>
    <label htmlFor='label'>
        Raza del Perro:
        <input type="text"
        value={raza} 
        onChange={(e) => setRaza(e.target.value)} />
    </label>    
    <label htmlFor='label'>
        Fecha:
        <input type="date"
        value={fecha} 
        onChange={(e) => setFecha(e.target.value)} />
    </label>
    <label htmlFor='label'>
        Hora:
        <input type="time" 
        value={hora} 
        onChange={(e) => setHora(e.target.value)} />
    </label>
    <label htmlFor='label'>
        Duración (en minutos):
        <input type="number" 
        value={tiempo} 
        onChange={(e) => setTiempo(e.target.value)} />
    </label>

    <button type="submit">Reservar Paseo</button>
    </form>
);
};

export default ReservaForm;


