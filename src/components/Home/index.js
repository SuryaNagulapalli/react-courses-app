import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Headers from '../Headers'
import Courses from '../Courses'
import './index.css'

const apiStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {coursesList: [], apiStatus: apiStatusConstants.loading}

  componentDidMount() {
    this.getAllCoursesData()
  }

  onClickRetry = () => {
    this.getAllCoursesData()
  }

  getAllCoursesData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const updatedData = data.courses.map(eachItem => ({
          id: eachItem.id,
          name: eachItem.name,
          logoUrl: eachItem.logo_url,
        }))

        this.setState({
          coursesList: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {coursesList} = this.state
    return (
      <>
        <h1 className="courses-heading">Courses</h1>
        <ul className="courses-list-container">
          {coursesList.map(eachCourse => (
            <Courses key={eachCourse.id} courses={eachCourse} />
          ))}
        </ul>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="courses-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
      <p className="failure-view-content">
        We cannot seem to find the page you are looking for
      </p>
      <button
        className="retry-button"
        type="submit"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    return (
      <>
        <Headers />
        <div className="home-bg-container">
          <div>
            {apiStatus === apiStatusConstants.loading &&
              this.renderLoadingView()}
            {apiStatus === apiStatusConstants.success &&
              this.renderSuccessView()}
            {apiStatus === apiStatusConstants.failure &&
              this.renderFailureView()}
          </div>
        </div>
      </>
    )
  }
}

export default Home
