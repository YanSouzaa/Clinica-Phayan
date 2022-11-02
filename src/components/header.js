import logout from '../img/logout.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>


            <nav className="navbar navbar-light bg-primary" style={{ justifyContent: 'space-between' }}>
                <button>
                    <Link to='/'>Agendamentos</Link>
                </button>
                <button>
                    <Link to='/patientscreen'>Pacientes</Link>
                </button>
                <button>
                    <Link to='/doctorsscreen'>Doutores</Link>
                </button>

                <a className="navbar-brand" href="/">
                    <img className="rounded float-start" style={{ height: 35, width: 35, marginRigth: '20%' }} src={logout} />
                </a>
            </nav>
        </header>
    );
}

export default Header;