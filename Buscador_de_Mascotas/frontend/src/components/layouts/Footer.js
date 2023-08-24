import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = (props) => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container ml-4">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 color-footer">&copy; 2023 - Buscador de Mascotas - Diseñado por Laura Vallejos</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="color-footer" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li className="ms-3"><a className="color-footer" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li className="ms-3"><a className="color-footer" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
    </ul>
  </footer>
    
  )
}

export default Footer;