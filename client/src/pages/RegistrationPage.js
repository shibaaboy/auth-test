import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const RegistrationPage = () => {
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '', password: '', name: '', lastName: ''
  })
  const message = useMessage()

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
      
    } catch (e) { }
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>My app</h1>
        <div className="card light-blue darken-4">
          <div className="card-content white-text">
            <span className="card-title">Регистрация</span>
            <div>

              <div className="input-field">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="blue-input"
                  value={form.name}
                  onChange={changeHandler}
                  tabIndex={1}
                />
                <label htmlFor="name">Имя</label>
              </div>

              <div className="input-field">
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="blue-input"
                  value={form.lastName}
                  onChange={changeHandler}
                  tabIndex={2}
                />
                <label htmlFor="lastName">Фамилия</label>
              </div>

              <div className="input-field">
                <input
                  id="email"
                  type="text"
                  name="email"
                  className="blue-input"
                  value={form.email}
                  onChange={changeHandler}
                  tabIndex={3}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="blue-input"
                  value={form.password}
                  onChange={changeHandler}
                  tabIndex={4}
                />
                <label htmlFor="password">Пароль</label>
              </div>



            </div>
          </div>
          <div className="card-action">
            <button
              className="btn light-blue darken-1"
              style={{ marginRight: 10 }}
              disabled={loading}
              onClick={registerHandler}
            >
              Зарегистрироваться
            </button>
            <NavLink to='/' className='white-text'>Назад</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
