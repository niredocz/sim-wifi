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
} from "./LoginStyled"

function Login() {
  return (
    <LoginWrapper>
      <CardLogin>
        <LeftSection>
          <LoginTitle>Login SIM WiFi Ngawi</LoginTitle>
          <img src="/img-login.png" alt="img-login" />
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
              <FormLabel htmlFor="alamat">Alamat Rumah</FormLabel>
              <InputTextarea name="" id="alamat" rows="10"></InputTextarea>
            </FormWrapper>
            <FormWrapper>
              <FormLabel htmlFor="phone">No. HP</FormLabel>
              <InputText id="phone" type="text" />
            </FormWrapper>

            <TosWrapper>
              <TosCheckbox type="checkbox" name="" id="tos" />

              <FormLabel htmlFor="tos" style={{ marginBottom: 0 }}>
                saya bersedia untuk menyetujui{" "}
                <a href="#">syarat dan ketentuan</a> yang berlaku.
              </FormLabel>
            </TosWrapper>

            <p style={{ marginBottom: 10 }}>
              Sudah memiliki akun ? <a href="#">Masuk disini.</a>
            </p>

            <SubmitButton type="submit">Daftarkan Akun</SubmitButton>
          </FormLogin>
        </RightSection>
      </CardLogin>
    </LoginWrapper>
  )
}

export default Login
