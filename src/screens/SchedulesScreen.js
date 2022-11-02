import React, { useEffect, useState } from 'react';
import Schedule from "../components/Schedule";
import logout from '../img/logout.png'
import Modal from 'react-modal';
import transactionalDbService from '../services/transactionalDbService.js';
import Select from 'react-select';


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


  const [modalIsOpen, setIsOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [values, setValues] = useState();
  const [selectValue, setSelectValue] = useState([])

  useEffect(() => {
    const retrieveSchedules = async () => {
      const retrievedSchedules = await transactionalDbService.getSchedules()
      setSchedules(retrievedSchedules.data.Items)

    }
    retrieveSchedules()
  }, [])
  schedules.sort(function (x, y) {
    return x.id - y.id
  })

  const openModal = async () => {
    const retrievedDoctors = await transactionalDbService.getDoctors();
    setDoctors(retrievedDoctors.data.Items);
    setIsOpen(true);
  }
  const handleChangeValues = value => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleChangeValuesSelect = (event) => {
    setSelectValue(event.value)
  }
  const selectedOptionDoctor = doctors.find(e => e.value === selectValue
    )


  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (event) => {

    event.preventDefault();

    const schedule = {
      doctor_id: selectValue,
      patient_id: values.paciente,
      date: values.data,
      hour: values.horario,
    }
    await transactionalDbService.addSchedule(schedule)
    document.location.reload()
  }


  return (
    <div>
      <nav className="navbar navbar-light bg-primary" style={{ justifyContent: 'right' }}>

        <a className="navbar-brand" href="/">
          <img className="rounded float-start" style={{ height: 35, width: 35, marginRigth: '20%' }} src={logout} />
        </a>
      </nav>
      <div style={{ textAlign: 'center' }}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>Novo agendamento:</h2>
          <hr />

          <form>
            <h4>Paciente</h4>
            <input className='form-control' onChange={handleChangeValues} type='text' name="paciente"></input><br />
            <h4>Doutor(a)</h4>
            <Select
              name='doutor'
              placeholder='Selecione'
              options={doctors}
              onChange={handleChangeValuesSelect}
              value={selectedOptionDoctor}
            /><br />
            <h4>Data</h4>
            <input type={'date'} onChange={handleChangeValues} className="form-control" name="data"></input><br />
            <h4>Horario</h4>
            <input type={'time'} onChange={handleChangeValues} className="form-control" name="horario"></input><br />

            <button onClick={handleSubmit} className="btn btn-primary">Agendar</button>
          </form>
        </Modal>
        <br />
        <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', height: 50, alignItems: 'center' }}>
          <h1></h1>
          <h1 style={{ marginLeft: '5%' }}>Agendamentos</h1>

          <button onClick={openModal} style={{ marginRight: '2%' }} className="btn btn-primary">Novo agendamento</button>
        </div>
        <br />

        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <table className="table table-striped" style={{ justifyContent: 'center', width: '80%', border: 'solid 3px #000', borderRadius: 10, }}>
            <thead>
              <tr style={{ backgroundColor: '#B0C4DE' }}>
                <th>Paciente</th>
                <th>Doutor</th>
                <th>Data</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => <Schedule key={schedule.id} id={schedule.id} paciente={schedule.patient_id} medico={schedule.doctor_id} data={schedule.date} horario={schedule.hour} />)}
            </tbody>

          </table>
        </div>
      </div>

    </div>


  );
}

export default SchedulesScreen;
