import styled from "styled-components"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`

export const CardLogin = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px;
  width: 100%;

  @media screen and ${device.tablet} {
    flex-direction: column;
  }
`

export const LeftSection = styled.div`
  min-width: 30%;
  padding: 30px;
  color: #fff;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #4153ef;

  @media screen and ${device.tablet} {
    position: relative;
    gap: 10px;
  }

  @media screen and ${device.mobileL} {
    gap: 20px;
    padding-right: 75px;
  }
`

export const RightSection = styled.div`
  width: 70%;
  margin: auto;
  max-width: 800px;
  background-color: #fff;

  @media screen and ${device.tablet} {
    margin: 0 auto;
  }

  @media screen and ${device.mobileL} {
    width: 100%;
  }
`

export const LoginTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  letter-spacing: 1px;

  @media screen and ${device.mobileL} {
    margin-top: 0;
  }
`

export const ImgLogin = styled.img`
  width: 100%;
  margin: 0 auto;
  max-width: 350px;

  @media screen and ${device.tablet} {
    position: absolute;
    max-width: 115px;
    bottom: 15px;
    right: 15px;
  }

  @media screen and ${device.mobileL} {
    max-width: 55px;
  }
`

export const CopyrightText = styled.span`
  font-size: 16px;
  font-weight: 600;

  @media screen and ${device.tablet} {
    font-size: 14px;
    line-height: 1.5rem;
  }
`

export const FormLogin = styled.form`
  display: block;
`
export const FormControl = styled.div`
  display: grid;
`

export const Link = styled.a`
  color: #2e444e;

  &:hover,
  &:focus {
    color: #4153ef;
  }
`

export const FormLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #2e444e;
  margin-bottom: 10px;

  ${(props) => {
    if (props.variant === "term-of-service") {
      return `
      cursor: pointer;
      position: relative;
      margin-bottom: 0;
      vertical-align: top;

        &::before {
          content: "";
          position: absolute;
          top: 0.15rem;
          left: -1.5rem;
          cursor: pointer;
          width: 1rem;
          height: 1rem;
          display: block;
          pointer-events: none;
          border-radius: .25rem;
          background-color: #fff;
          border: 1px solid #adb5bd;
          transition: all .15s ease-in-out;
        }

        &::after {
          content: "";
          width: 1rem;
          height: 1rem;
          left: -1.45rem;
          top: 0.2rem;
          display: block;
          position: absolute;
          background: no-repeat 50% / 50% 50%;
        }
      `
    }
  }}
`

export const FormWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
`

export const InputText = styled.input`
  padding: 10px 15px;
  outline: none;
  border none;
  box-shadow: 0px 0px 0px 2px #dbdbde inset;
  border-radius: 8px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 2px #4153ef inset;
  }
`

export const InputTextarea = styled.textarea`
  padding: 10px 15px;
  outline: none;
  border none;
  box-shadow: 0px 0px 0px 2px #dbdbde inset;
  border-radius: 8px;
  width: 100%;
  resize: vertical;

  &:focus {
    box-shadow: 0 0 0 2px #4153ef inset;
  }
`

export const TosWrapper = styled.div`
  z-index: 1;
  margin-top: 25px;
  margin-bottom: 15px;
  position: relative;
  padding-left: 1.5rem;
  min-height: 1.21875rem;
`

export const TosCheckbox = styled.input`
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.10938rem;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${FormLabel}::before {
    color: #fff;
    border-color: #4153ef;
    background-color: #4153ef;
  }

  &:checked ~ ${FormLabel}::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
`

export const SubmitButton = styled.button`
  color: #fff;
  width: 100%;
  border: none;
  outline: none;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  font-size: 18px;
  max-width: 300px;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #4153ef;

  &:hover,
  &:focus {
    background-color: #2233cb;
  }
`
