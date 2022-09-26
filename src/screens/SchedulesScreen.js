import React, { useState } from 'react';
import Schedule from "../components/Schedule";
import clinicaImg from '../img/clinica.png'
import logout from '../img/logout.png'
import menu from '../img/menu.png'
import Modal from 'react-modal';
import transactionalDbService from '../services/transactionalDbService.js';

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '49%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
  },
};

function SchedulesScreen() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();

    const schedule = {
      doctor_id:event.target.elements.doutor.value,
      patient_id:event.target.elements.paciente.value,
      date:event.target.elements.data.value,
      hour:event.target.elements.horario.value,
    }
    await transactionalDbService.addSchedule(schedule)
  }


  return (
    <div>
      <nav class="navbar navbar-light bg-primary" style={{ justifyContent: 'space-between' }}>
        <a class="navbar-brand" onClick={openModal}>
          <img class="rounded float-start" style={{ height: 45, width: 45, marginLeft:10 }} src={menu} />
        </a>
        <a class="navbar-brand" href="/">
          <img class="rounded float-start" style={{ height: 45, width: 45, marginRigth: '20%' }} src={logout} />
        </a>
      </nav>
      <div style={{ textAlign: 'center' }}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Novo agendamento:</h2>
          <hr/>
        
          <form method="POST">
            <h4>Paciente</h4>
            <input  class="form-control" name="paciente"></input><br />
            <h4>Doutor(a)</h4>
            <input type={'text'} class="form-control" name="doutor"></input><br />
            <h4>Data</h4>
            <input type={'date'}  class="form-control" name="data"></input><br />
            <h4>Horario</h4>
            <input type={'time'}  class="form-control" name="horario"></input><br />

            <button type="submit" onSubmit={handleSubmit} class="btn btn-primary">Agendar</button>
          </form>
        </Modal>
        <h1>Agendamentos</h1>
        <br />

        <div class="card">
          <table>
            <Schedule id='1' paciente='Yan' medico='Dr Ramon' data='19/09/2022' horario='18:00' />
            <Schedule id='2' paciente='Cuca' medico='Dr Dionéses' data='20/09/2022' horario='16:00' />
            <Schedule id='3' paciente='Simas' medico='Dra Natasha' data='22/09/2022' horario='13:00' />
          </table>
        </div>
      </div>

    </div>


  );
}

export default SchedulesScreen;
