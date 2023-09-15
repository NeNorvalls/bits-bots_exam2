import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const storedUser = JSON.parse(localStorage.getItem(formData.username))

    if (storedUser && storedUser.password === formData.password) {
      alert('Successful Login')
      setIsLoggedIn(true)
      localStorage.setItem('currentUser', JSON.stringify(formData.username))
      navigate('/browse')
    } else {
      alert('Login failed. Please check your credentials.')
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-form">
            <h1 className="login-form__title">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username" className="login-form__label">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control login-form__input"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="login-form__label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control login-form__input"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group text-center">
                <button
                  type="submit"
                  className="btn btn-primary login-form__submit-btn"
                >
                  Login
                </button>
              </div>
              <div className="login-form__register-link text-center">
                <p>Don't have an account? Register now!</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
