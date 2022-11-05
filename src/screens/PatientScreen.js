import React, { useEffect, useState } from 'react';
import Schedule from "../components/Schedule";
import Modal from 'react-modal';
import transactionalDbService from '../services/transactionalDbService.js';
import Select from 'react-select';
import Header from '../components/header'
import Patient from '../components/Patient';


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

function PatientScreen() {


  const [modalIsOpen, setIsOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [values, setValues] = useState();
  const [selectValue, setSelectValue] = useState([])

  useEffect(() => {
    const retrievePatient = async () => {
      const retrievedPatient = await transactionalDbService.getPatients()
      setPatients(retrievedPatient.data.Items)

    }
    retrievePatient()
  }, [])
  patients.sort(function (x, y) {
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

    const patient = {
      patient_id: values.paciente,
      label: values.paciente,
      name: values.paciente,
      value: values.paciente,
    }
    await transactionalDbService.addPatient(patient)
    document.location.reload()
  }


  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>Novo paciente:</h2>
          <hr />

          <form>
            <h4>Paciente</h4>
            <input className='form-control' onChange={handleChangeValues} type='text' name="paciente"></input><br />
            
            <button onClick={handleSubmit} className="btn btn-primary">Salvar</button>
          </form>
        </Modal>
        <br />
        <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', height: 50, alignItems: 'center',marginTop:'2%' }}>
          <h1></h1>
          <h1 style={{ marginLeft: '20%', fontSize:38 }}>Pacientes</h1>

          <button onClick={openModal} style={{ marginRight: '10%', backgroundColor:'#B0C4DE', color:'black',fontWeight:'bold' }} className="btn btn-dark btn-sm">Novo paciente</button>
        </div>
        <br />

        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <table className="table table-striped" style={{ justifyContent: 'center', width: '80%', border: 'solid 3px #000', borderRadius: 10, }}>
            <thead>
              <tr style={{ backgroundColor: '#B0C4DE' }}>
                <th>Pacientes</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => <Patient key={patient.id} id={patient.id} paciente={patient.patient_id} />)}
            </tbody>

          </table>
        </div>
      </div>

    </div>


  );
}

export default PatientScreen;
