import logout from '../img/logout.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>


            <nav className="navbar navbar-dark bg-dark" style={{ justifyContent: 'space-between', paddingLeft:'5%',paddingRight:'5%' }}>
                <button className='btn btn-dark btn-sm'>
                    <Link style={{color:'white', textDecoration:'none'}} to='/'>Agendamentos</Link>
                </button>
                <button className='btn btn-dark btn-sm'>
                    <Link style={{color:'white', textDecoration:'none'}} to='/patientscreen'>Pacientes</Link>
                </button>
                <button className='btn btn-dark btn-sm'>
                    <Link style={{color:'white', textDecoration:'none'}} to='/doctorsscreen'>Doutores</Link>
                </button>
                <button className='btn btn-dark btn-sm'>
                    Sair
                </button>

               
            </nav>
        </header>
    );
}

export default Header;