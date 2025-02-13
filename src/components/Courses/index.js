import {Link} from 'react-router-dom'
import './index.css'

const Courses = props => {
  const {courses} = props
  const {id, name, logoUrl} = courses
  return (
    <Link to={`/courses/${id}`} className="course-link-style">
      <li className="course-item">
        <img src={logoUrl} alt={name} className="course-image" />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default Courses
