import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './login.module.scss'
import { checkValidation } from 'services/user'
import store from 'store'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (store.get('admin')) {
      navigate('/')
    }
  }, [navigate])

  const handleIdInput = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value)
    setErrorMessage(false)
  }

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
    setErrorMessage(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkValidation(id, password)) {
      store.set('admin', id)
      navigate('/')
    } else {
      setErrorMessage(true)
    }
  }

  return (
    <div className={styles.container}>
      <form action='submit' onSubmit={handleSubmit}>
        <label htmlFor='adminId' />
        <input type='text' id='adminId' value={id} onChange={handleIdInput} />
        <label htmlFor='password' />
        <input type='password' id='password' value={password} onChange={handlePasswordInput} />
        <button type='submit'>로그인</button>
        {errorMessage && <div>ID 또는 PW가 다릅니다. </div>}
      </form>
    </div>
  )
}

export default LoginPage
