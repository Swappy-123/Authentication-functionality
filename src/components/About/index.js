// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => (
  <>
  <Header />
  <div className="about-bg">
    <h1 className="about-head">About Route</h1>
    <LogoutButton />
  </div>
  </>
)

export default About
