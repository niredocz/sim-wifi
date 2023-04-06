import React from "react"
import {
  FormLogin,
  FormLabel,
  FormWrapper,
  InputText,
  SubmitButton,
  Link,
} from "./AuthStyled"

function Login() {
  return (
    <FormLogin method="POST">
      <h1 style={{ marginBottom: 20 }}>Masukkan Akun</h1>

      <FormWrapper>
        <FormLabel htmlFor="email">Alamat Email</FormLabel>
        <InputText id="email" type="email" />
      </FormWrapper>
      <div>
        <FormWrapper>
          <FormLabel htmlFor="password">Kata Sandi</FormLabel>
          <InputText id="password" type="password" />
        </FormWrapper>
        <FormWrapper>
          <FormLabel htmlFor="repeat-password">Ulangi Kata Sandi</FormLabel>
          <InputText id="repeat-password" type="password" />
        </FormWrapper>
      </div>

      <h4 style={{ marginBottom: 25, color: "#2e444e" }}>
        Belum memiliki akun ? <Link href="/register">Daftar disini.</Link>
      </h4>

      <SubmitButton type="submit">Masuk</SubmitButton>
    </FormLogin>
  )
}

export default Login
