
import {Link} from 'react-router-dom';

function Nav() {

    //const Link = ReactRouterDOM.Link;

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="/">Windsurfing</a>
    
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reservations">Reservations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/directions-hours">Directions & Hours</Link>
                    </li>
                </ul>
            </div>

        </nav>

    );

}

export default Nav;
