import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import transactionalDbService from '../services/transactionalDbService.js';
import Header from '../components/header'
import Doctor from '../components/Doctor';


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

function DoctorsScreen() {


  const [modalIsOpen, setIsOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [values, setValues] = useState();
  const [selectValue, setSelectValue] = useState([])

  useEffect(() => {
    const retrieveDoctor = async () => {
      const retrievedDoctor = await transactionalDbService.getDoctors()
      setDoctors(retrievedDoctor.data.Items)
    }
    retrieveDoctor()
  }, [])
  doctors.sort(function (x, y) {
    return x.id - y.id
  })

  const openModal = async () => {
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

    const doctor = {
        label: values.doutor,
        name: values.doutor,
        value: values.doutor,
    }
    await transactionalDbService.addDoctor(doctor)
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
          <h2>Novo(a) doutor(a):</h2>
          <hr />

          <form>
            <h4>Doutor(a)</h4>
            <input className='form-control' onChange={handleChangeValues} type='text' name="doutor"></input><br />
            
            <button onClick={handleSubmit} className="btn btn-primary">Salvar</button>
          </form>
        </Modal>
        <br />
        <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', height: 50, alignItems: 'center' }}>
          <h1></h1>
          <h1 style={{ marginLeft: '5%' }}>Doutores</h1>

          <button onClick={openModal} style={{ marginRight: '2%' }} className="btn btn-primary">Novo doutor(a)</button>
        </div>
        <br />

        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <table className="table table-striped" style={{ justifyContent: 'center', width: '80%', border: 'solid 3px #000', borderRadius: 10, }}>
            <thead>
              <tr style={{ backgroundColor: '#B0C4DE' }}>
                <th>Doutores</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => <Doctor key={doctor.id} id={doctor.id} medico={doctor.name} />)}
            </tbody>

          </table>
        </div>
      </div>

    </div>


  );
}

export default DoctorsScreen;
