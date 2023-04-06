import React from "react"
import {
  CardLogin,
  LeftSection,
  LoginTitle,
  LoginWrapper,
  RightSection,
  ImgLogin,
  CopyrightText,
} from "./AuthStyled"

import Login from "./Login"
import Register from "./Register"

function Auth({ isLoggedIn }) {
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
          {isLoggedIn === true ? <Login /> : <Register />}
        </RightSection>
      </CardLogin>
    </LoginWrapper>
  )
}

export default Auth
