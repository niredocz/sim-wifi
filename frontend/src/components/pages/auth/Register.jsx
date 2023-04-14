import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import "./auth.css"
import {
  FormLogin,
  FormLabel,
  FormWrapper,
  InputText,
  InputTextarea,
  TosWrapper,
  TosCheckbox,
  SubmitButton,
} from "./AuthStyled"

function Register() {
  // const [userId, setUserId] = useState("")
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [repeatPassword, setRepeatPassword] = useState("")
  // const [countDownRedirect, setCountDownRedirect] = useState(3)

  // useEffect(() => {
  //   let countDown = setInterval(() => {
  //     if (
  //       username !== "" &&
  //       password === repeatPassword &&
  //       countDownRedirect <= 3
  //     ) {
  //       setCountDownRedirect((countDownRedirect -= 1))
  //     }

  //     if (countDownRedirect == 0) {
  //       location.reload()
  //     }
  //   }, 1000)

  //   return () => clearInterval(countDown)
  // })

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (password === repeatPassword) {
  //     axios
  //       .post("http://localhost:3001/login", {
  //         username,
  //         password,
  //       })
  //       .then((response) => {
  //         const authToken = response.data.accessToken
  //         console.log(authToken)
  //         console.log(response)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }

  return (
    <FormLogin method="POST">
      <h1 style={{ marginBottom: 20 }}>Daftar Akun</h1>

      <div style={{ display: "flex", gap: 15, width: "100%" }}>
        <FormWrapper>
          <FormLabel htmlFor="first-name">Nama Depan</FormLabel>
          <InputText id="first-name" type="text" />
        </FormWrapper>
        <FormWrapper>
          <FormLabel htmlFor="last-name">Nama Belakang</FormLabel>
          <InputText id="last-name" type="text" />
        </FormWrapper>
      </div>
      <FormWrapper>
        <FormLabel htmlFor="email">Alamat Email</FormLabel>
        <InputText id="email" type="email" />
      </FormWrapper>
      <div style={{ display: "flex", gap: 15, width: "100%" }}>
        <FormWrapper>
          <FormLabel htmlFor="password">Kata Sandi</FormLabel>
          <InputText id="password" type="password" />
        </FormWrapper>
        <FormWrapper>
          <FormLabel htmlFor="repeat-password">Ulangi Kata Sandi</FormLabel>
          <InputText id="repeat-password" type="password" />
        </FormWrapper>
      </div>
      <FormWrapper>
        <FormLabel htmlFor="phone">No. HP</FormLabel>
        <InputText id="phone" type="text" />
      </FormWrapper>
      <FormWrapper>
        <FormLabel htmlFor="alamat">Alamat Rumah</FormLabel>
        <InputTextarea name="" id="alamat" rows="5"></InputTextarea>
      </FormWrapper>

      <TosWrapper>
        <TosCheckbox type="checkbox" name="" id="tos" />

        <FormLabel htmlFor="tos" variant="term-of-service">
          saya bersedia untuk menyetujui{" "}
          <Link to="/">syarat dan ketentuan</Link> yang berlaku.
        </FormLabel>
      </TosWrapper>

      <h4 style={{ marginBottom: 25, color: "#2e444e" }}>
        Sudah memiliki akun ?{" "}
        <Link className="direct-link" to="/login">
          Masuk disini.
        </Link>
      </h4>

      <SubmitButton type="submit">Daftarkan Akun</SubmitButton>
    </FormLogin>
  )
}

export default Register
