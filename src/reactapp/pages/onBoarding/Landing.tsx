import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import Button from '../../components/Button'
import LanguageSelectorMobile from '../../components/LanguageSelectorMobile'

import styled, {keyframes} from 'styled-components/macro'
import {fadeIn} from 'react-animations'

// Multilanguage page content object
import {useTranslation} from 'react-i18next'

// Styles

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-height: 600px) {
    width: 100%;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

const Header = styled.div`
  height: 5%;
  width: 90%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    display: none;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    display: none;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: none;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: flex;
  }
`
const Content = styled.div`
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    height: 90%;
    justify-content: center;
  }
`

const Box = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const MobileImage = styled.div`
  padding: 2%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: none;
  }
`
const DesktopImage = styled.div`
  padding: 2%;
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`

const Controls = styled.div`
  padding: 2%;
`
const ButtonWrapper = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const Image = styled.img`
  animation: 1.5s ${keyframes`${fadeIn}`};
  padding: 1%;
`
const Text = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.164211px;
  color: #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const LandingPage = () => {
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    i18n.changeLanguage('en')
  }, [])

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language)
  }

  // Page content based on injected Language
  const {t, i18n} = useTranslation()

  // Redirect operation to next view
  const redirect = () => {
    console.log('redirect')
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <LanguageSelectorMobile
            applyLanguage={handleLanguageChange}
          ></LanguageSelectorMobile>
          <Image src={'/assets/react/landing/logo.svg'} alt="logo"></Image>
        </Header>
        <Content>
          <Box>
            <MobileImage>
              <Image
                style={{width: '100%'}}
                src={'/assets/react/landing/mobilelogo.svg'}
                alt="clouds"
              ></Image>
            </MobileImage>
            <DesktopImage>
              <Image src={'/assets/react/landing/cloud1.svg'} alt="clouds"></Image>
            </DesktopImage>
          </Box>
          <Box>
            <DesktopImage>
              <Image src={'/assets/react/landing/cloud2.svg'} alt="clouds"></Image>
            </DesktopImage>
            <Controls>
              <img src={'/assets/react/landing/tagline.svg'} alt={'tagline'}></img>
              <div style={{textAlign: 'start'}}>
                <Image src={'/assets/react/landing/cloud4.svg'} alt="clouds"></Image>
              </div>
              <ButtonWrapper>
                <Button
                  style={{margin: '2%', width: '50'}}
                  label={'Get Started'}
                ></Button>
                <Button
                  style={{margin: '2%'}}
                  variant="outlined"
                  label={'I Already have an account'}
                ></Button>
              </ButtonWrapper>
            </Controls>
          </Box>
          <Box>
            <DesktopImage>
              <Image src={'/assets/react/landing/cloud3.svg'} alt="clouds"></Image>
            </DesktopImage>
          </Box>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default LandingPage
