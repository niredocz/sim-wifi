import styled from "styled-components"

export const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`

export const CardLogin = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px;
  width: 100%;
`

export const LeftSection = styled.div`
  // min-width: 400px;
  min-width: 30%;
  padding: 30px;
  color: #fff;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  background-color: #3432f9;
`

export const RightSection = styled.div`
  width: 70%;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #e3e3e3;
`

export const LoginTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-top: 20px;
`

export const FormLogin = styled.form`
  display: block;
`
export const FormControl = styled.div`
  display: grid;
`

export const FormLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #2e444e;
  margin-bottom: 10px;
`

export const FormWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
`
