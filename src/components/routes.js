import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SchedulesScreen from "../screens/SchedulesScreen";
import DoctorsScreen from "../screens/DoctorsScreen";
import PatientScreen from "../screens/PatientScreen";


const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/'   element={<SchedulesScreen/>}/>
      <Route path='/doctorsscreen'   element={<DoctorsScreen/>}/>
      <Route path='/patientscreen'   element={<PatientScreen/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;

