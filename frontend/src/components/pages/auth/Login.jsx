import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import {
  FormLogin,
  FormLabel,
  FormWrapper,
  InputText,
  SubmitButton,
} from "./AuthStyled"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [countDownRedirect, setCountDownRedirect] = useState(3)

  useEffect(() => {
    let countDown = setInterval(() => {
      if (
        username !== "" &&
        password === repeatPassword &&
        countDownRedirect <= 3
      ) {
        console.log("first")
        setCountDownRedirect((countDownRedirect -= 1))
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
        .post("http://localhost:3001/login", {
          username,
          password,
        })
        .then((response) => {
          const authToken = response.data.accessToken
          console.log(authToken)
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      alert("password salah, mohon login kembali")
    }
  }

  return (
    <FormLogin method="POST" onSubmit={handleSubmit}>
      <h1 style={{ marginBottom: 20 }}>Masukkan Akun</h1>

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
