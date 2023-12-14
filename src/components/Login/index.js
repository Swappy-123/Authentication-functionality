// Write your JS code here
import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onSubmitBtn = async () => {
    const details = {
      username: 'swapna',
      password: 'Damala@2528',
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = props
      history.replace('/')
    }
  }

  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1 className="login-head">Please Login</h1>
      <button type="button" onClick={onSubmitBtn}>
        Login with Sample Creds
      </button>
    </>
  )
}

export default withRouter(Login)
