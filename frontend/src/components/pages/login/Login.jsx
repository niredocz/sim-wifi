import React from "react"
import { CardLogin, FormLogin, LeftSection, LoginWrapper } from "./LoginStyled"

function Login() {
  return (
    <LoginWrapper>
      <LeftSection>
        <h2>Login SIM WiFi Ngawi</h2>
      </LeftSection>
      <CardLogin>
        <FormLogin method="GET">
          <div>
            <input type="text" />
          </div>
        </FormLogin>
      </CardLogin>
    </LoginWrapper>
  )
}

export default Login
