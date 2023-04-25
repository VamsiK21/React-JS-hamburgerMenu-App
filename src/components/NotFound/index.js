/* eslint-disable react/no-unescaped-entities */
// Write your code here
import './index.css'

const NotFound = () => (
  <div className="not-container">
    <img
      className="notFound-img"
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
    />
    <h1 className="error-text-1">Lost Your Way?</h1>
    <p className="error-text-2">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
