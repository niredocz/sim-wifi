import React from "react"
import {
  CardLogin,
  FormLogin,
  LeftSection,
  LoginTitle,
  LoginWrapper,
  RightSection,
  FormLabel,
  FormWrapper,
  InputText,
  InputTextarea,
  TosWrapper,
  TosCheckbox,
  SubmitButton,
  ImgLogin,
  Link,
  CopyrightText,
} from "./LoginStyled"
// import { Link } from "react-router-dom"

function Login() {
  const thisYear = new Date().getFullYear()

  return (
    <LoginWrapper>
      <CardLogin>
        <LeftSection>
          <LoginTitle>SIM WiFi Ngawi</LoginTitle>
          <ImgLogin src="/img-login.png" alt="img-login" />
          <CopyrightText>
            Hak Cipta SIM WiFi Adnan Production © {thisYear}
          </CopyrightText>
        </LeftSection>
        <RightSection>
          <FormLogin method="GET">
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
                <FormLabel htmlFor="repeat-password">
                  Ulangi Kata Sandi
                </FormLabel>
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
                <Link href="/">syarat dan ketentuan</Link> yang berlaku.
              </FormLabel>
            </TosWrapper>

            <h4 style={{ marginBottom: 25, color: "#2e444e" }}>
              Sudah memiliki akun ? <Link href="/">Masuk disini.</Link>
            </h4>

            <SubmitButton type="submit">Daftarkan Akun</SubmitButton>
          </FormLogin>
        </RightSection>
      </CardLogin>
    </LoginWrapper>
  )
}

export default Login
