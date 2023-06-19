import { Link } from 'react-router-dom';
import './NavBar.scss'

const NavBar: React.FC<any> = () => {
    return (
        <ul className='navbar'>
            <li className='navbarLink'><a href="/#aboutMeSection">About Me</a></li>
            <li className='navbarLink'><a href="/#skillsSection">Skills</a></li>
            <li className='navbarLink'><a href="/#formationSection">Education</a></li>
            <li className='navbarLink'><a href="/#experienceSection">Experiences Pro</a></li>
            <li className='navbarLink'><a href="/#otherSection">Passion & Loisirs</a></li>
            <li className='navbarLink'><a href="/#futureSection">Atouts & Futur</a></li>
            <li className='navbarLink'><Link to="/visites">Visites d'Entreprises</Link></li>
            <li className='navbarLink'><a href={require('./cv.pdf')} target='_blank' rel='noopener noreferrer'>CV</a></li>
            <li className='navbarLink'><a href={require('./../../tfe.pdf')} target='_blank' rel='noopener noreferrer'>TFE</a></li>
        </ul>
    )
}

export default NavBar;