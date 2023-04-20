import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import {
  FormLogin,
  FormLabel,
  FormWrapper,
  InputText,
  SubmitButton,
  AlertPopup,
  FormSuccess,
} from "./AuthStyled"

function Login() {
  const [userId, setUserId] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [countDownRedirect, setCountDownRedirect] = useState(3)
  const [responseLogin, setResponseLogin] = useState("")
  const [passwordChecker, setPasswordChecker] = useState(false)

  useEffect(() => {
    let countDown = setInterval(() => {
      if (
        responseLogin.status == 200 &&
        countDownRedirect > 0 &&
        countDownRedirect <= 3
      ) {
        setCountDownRedirect(countDownRedirect - 1)
      }

      if (countDownRedirect === 0) {
        window.location.reload()
      }
    }, 1000)

    return () => clearInterval(countDown)
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password === repeatPassword) {
      await axios
        .post("http://localhost:3001/login", { username, password })
        .then((response) => {
          const authToken = response.data.accessToken
          console.log(authToken)
          console.log(response)
          setResponseLogin(response)
          setPasswordChecker(false)
        })
        .catch((err) => {
          console.log(err)
          setResponseLogin(err.response)
        })
    } else {
      setPasswordChecker(true)
    }
  }

  const UserLoginState = () => {
    return (
      <FormSuccess>
        <svg
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"></path>
        </svg>
        <span>
          Login Berhasil! <br /> halaman akan diarahkan ke dashboard dalam{" "}
          {countDownRedirect} detik
        </span>
      </FormSuccess>
    )
  }

  if (responseLogin.status == 200) return UserLoginState()

  return (
    <FormLogin method="POST" onSubmit={handleSubmit}>
      <h1 style={{ marginBottom: 20 }}>Masukkan Akun</h1>

      {passwordChecker == true || responseLogin.status == 400 ? (
        <AlertPopup>
          <svg
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"></path>
          </svg>
          <span>Password Salah, mohon periksa kembali formulir anda</span>
        </AlertPopup>
      ) : (
        <></>
      )}
      <FormWrapper>
        <FormLabel htmlFor="username">Username</FormLabel>
        <InputText
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormWrapper>
      <div>
        <FormWrapper>
          <FormLabel htmlFor="password">Kata Sandi</FormLabel>
          <InputText
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormWrapper>
        <FormWrapper>
          <FormLabel htmlFor="repeat-password">Ulangi Kata Sandi</FormLabel>
          <InputText
            id="repeat-password"
            type="password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </FormWrapper>
      </div>

      <h4 style={{ marginBottom: 25, color: "#2e444e" }}>
        Belum memiliki akun ?{" "}
        <Link className="direct-link" to="/register">
          Daftar disini.
        </Link>
      </h4>

      <SubmitButton type="submit">Masuk</SubmitButton>
    </FormLogin>
  )
}

export default Login
