
import {Link} from 'react-router-dom';

function Nav() {

    //const Link = ReactRouterDOM.Link;

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav-bar">

            <a className="navbar-brand" id = "nav-name" href="/">Windsurfing Co.</a>
    
            <div className="navbar-expand" id="navbarNav">
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
