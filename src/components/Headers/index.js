import {Link} from 'react-router-dom'
import './index.css'

const Headers = () => (
  <nav className="nav-bg-container">
    <Link to="/" className="link-item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="logo-image"
      />
    </Link>
  </nav>
)

export default Headers
