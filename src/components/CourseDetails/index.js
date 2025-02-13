import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Headers from '../Headers'
import './index.css'

const apiStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseDetails extends Component {
  state = {courseDetailsList: {}, apiStatus: apiStatusConstants.loading}

  componentDidMount() {
    this.getCourseDetailData()
  }

  getCourseDetailData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.loading})

    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          courseDetailsList: data.course_details,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getCourseDetailData()
  }

  renderLoadingView = () => (
    <div className="courses-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {courseDetailsList} = this.state
    return (
      <div className="course-details-card-container">
        <div className="image-section">
          <img
            src={courseDetailsList.image_url}
            alt={courseDetailsList.name}
            className="course-details-image"
          />
        </div>
        <div className="content-section">
          <h1 className="heading">{courseDetailsList.name}</h1>
          <p className="content">{courseDetailsList.description}</p>
        </div>
      </div>
    )
  }

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
        type="button"
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
        <div className="course-detail-bg-container">
          {apiStatus === apiStatusConstants.loading && this.renderLoadingView()}
          {apiStatus === apiStatusConstants.success && this.renderSuccessView()}
          {apiStatus === apiStatusConstants.failure && this.renderFailureView()}
        </div>
      </>
    )
  }
}

export default CourseDetails
