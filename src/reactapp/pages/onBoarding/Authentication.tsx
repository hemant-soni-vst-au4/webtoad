import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import MediaButtons from '../../components/MediaButtons'
import PasswordInput from '../../components/PasswordInput'
import LanguageSelectorMobile from '../../components/LanguageSelectorMobile'
// Utility modules
import * as Validator from 'validatorjs'
import {useSnackbar} from 'notistack'

// Material Ui components
import Checkbox from '@material-ui/core/Checkbox'

// Global Store
import {authenticationStore} from '../../store/globalStore'

// Style library
import styled, {keyframes, css} from 'styled-components'
import {fadeIn} from 'react-animations'

// Multilanguage page content object
import {useTranslation} from 'react-i18next'

// Styles
const Wrapper = styled.div`
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
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 100vh;
    align-self: center;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 100%;
    height: 100vh;
    align-self: center;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 100%;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 40%;
    height: 90%;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 30%;
    height: 90%;
  }
`
const Header = styled.div<{login?: boolean}>`
  position: relative;
  padding-top: 5%;
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.login &&
    css`
      height: 10%;
    `}
`
const Body = styled.div<{login?: boolean}>`
  position: relative;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.login &&
    css`
      height: 70%;
    `}
`
const Footer = styled.div<{login?: boolean}>`
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${(props) =>
    props.login &&
    css`
      height: 10%;
    `}
`

const Row = styled.div`
  padding-top: 2%;
  line-height: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const Content = styled.div`
  height: 20%;
  display: flex;
  padding: 3%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Form = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Logo = styled.div`
  padding: 2%;
  position: fixed;
  top: 0px !important;
  left: 0px !important;
  @media only screen and (max-width: 1200px) {
    opacity: 0;
  }
`
const LanguageSelector = styled.div`
  margin: 2%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const LogoSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    align-self: flex-end;
  }
  @media only screen and (min-width: 1200px) {
    opacity: 0;
  }
`

const LogoLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    align-self: flex-end;
  }
`
const Image = styled.img`
  animation: 1s ${keyframes`${fadeIn}`};
  padding: 2%;
`
const Title = styled.h1`
  padding-left: 5%;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: bold;
  text-align: start;
  letter-spacing: -0.0853333px;
  color: #212121;
`
const SubTitle = styled.p`
  margin: 1%;
  padding-left: 5%;

  font-style: normal;
  font-weight: normal;
  text-align: start;
  letter-spacing: -0.0853333px;
  color: #000000;
`
const Text = styled.p<{noMargin?: boolean}>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -0.0853333px;
  color: #000000;
  ${(props) =>
    props.noMargin &&
    css`
      margin: 0%;
    `}
`
const Highlite = styled.span`
  font-weight: 600;
  color: #4870b8;

  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: -0.288px;
`
const Link = styled.div`
  display: flex;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 2% 5%;
`
const Line = styled.p`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #747474;
  line-height: 0.1em;
  margin: 10px 0 20px;
`
const Tag = styled.span`
  padding-left: 5%;
  padding-right: 5%;
  color: #747474;
  background: #fff;
  font-weight: 600;
  font-size: 10px;
`

const NavButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
`

export const AuthenticationPage = () => {
  const history = useHistory()

  // local state
  const {authComponentState} = authenticationStore()
  const {enqueueSnackbar} = useSnackbar()
  const [inputs, setInputs] = useState({
    Name: '',
    Email: '',
    Confirmation: '',
    Password: '',
    Terms: null,
    Privacy: null,
  })

  const [errors, setErrors] = useState({
    Name: false,
    Email: false,
    Confirmation: false,
    Password: false,
    Terms: false,
    Privacy: false,
  })

  useEffect(() => {
    console.log(authComponentState, 'on render')
  }, [authComponentState])

  useEffect(() => {
    i18n.changeLanguage('en')
  }, [errors])

  // Page content based on injected Language
  const {t, i18n} = useTranslation()

  //Events
  const logIn = () => {
    let data = {...inputs}
    let rules = {
      Email: 'required|email',
      Password: 'required',
    }
    // validates fields based on rules
    let validation = new Validator(data, rules)

    if (validation.fails()) {
      let errorMessages = [...Object.values(validation.errors.errors)]
      let errorFields = [...Object.keys(validation.errors.errors)]

      displayErrors(errorFields)
      enqueueSnackbar(errorMessages[0], {preventDuplicate: true})
    } else {
      history.push('/home')
    }
  }

  const signUp = () => {
    let data = {...inputs}
    let rules = {
      Name: 'required',
      Email: 'required|email',
      Confirmation: 'required|same:Email',
      Password: 'required',
      Terms: 'accepted',
      Privacy: 'accepted',
    }
    // validates fields based on rules
    let validation = new Validator(data, rules)

    if (validation.fails()) {
      console.log('fails')
      let errorMessages = [...Object.values(validation.errors.errors)]
      let errorFields = [...Object.keys(validation.errors.errors)]

      displayErrors(errorFields)

      let errorNotification

      if (errorMessages[0][0].includes('Privacy')) {
        errorNotification = ' You must accept Privacy Policy'
      } else if (errorMessages[0][0].includes('Terms')) {
        errorNotification = ' You must accept Terms of Service'
      } else {
        errorNotification = errorMessages[0][0]
      }

      enqueueSnackbar(errorNotification, {preventDuplicate: true})
    } else {
      history.push('/home')
    }
  }

  const forgotPassword = () => {
    history.push('/forgotPassword')
  }

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language)
  }

  // checks which fieal has error and updates state
  const displayErrors = (errorFields) => {
    const state = {
      Name: errors.Name,
      Email: errors.Email,
      Confirmation: errors.Confirmation,
      Password: errors.Password,
      Terms: errors.Terms,
      Privacy: errors.Privacy,
    }
    for (const field in state) {
      if (errorFields.includes(field)) {
        state[field] = true
      } else {
        state[field] = false
      }
    }
    setErrors(state)
  }

  // Handle Input change of Privacy and Terms of service
  const handleBoxChange = (event) => {
    setInputs({...inputs, [event.target.name]: event.target.checked})
    console.log(inputs)
  }

  const handleInputChange = (event) => {
    setInputs({...inputs, [event.target.name]: event.target.value})
    console.log(inputs)
  }

  // resets input state when you switch between signin and login.

  const resetInputState = () => {
    setInputs({
      Name: '',
      Email: '',
      Confirmation: '',
      Password: '',
      Terms: null,
      Privacy: null,
    })
    setErrors({
      Name: false,
      Email: false,
      Confirmation: false,
      Password: false,
      Terms: false,
      Privacy: false,
    })
  }

  if (authComponentState === 'auth') {
    return (
      <Wrapper>
        <Container>
          <LanguageSelector style={{}}>
            <LanguageSelectorMobile applyLanguage={handleLanguageChange} />
          </LanguageSelector>
          <Image
            key={1}
            src={'/assets/react/authentication/logo.min.svg'}
            alt="Logo"
          ></Image>
          <Content>
            <Image src={'/assets/react/authentication/title.svg'} alt="img"></Image>
          </Content>
          <Content style={{alignItems: 'start'}}>
            <Image src={'/assets/react/authentication/cloud.min.svg'} alt="img"></Image>
          </Content>
          <NavButtons>
            <Button
              style={{margin: '3%'}}
              label={t('authentication.button1')}
              size="medium"
              onClick={() => {
                history.push('/postBoarding')
              }}
            ></Button>
            <Button
              style={{margin: '3%'}}
              variant="outlined"
              size="medium"
              label={t('authentication.button3')}
              onClick={() => authenticationStore.setState({authComponentState: 'login'})}
            ></Button>
          </NavButtons>
        </Container>
      </Wrapper>
    )
  } else if (authComponentState === 'login') {
    return (
      <Wrapper>
        <Container>
          <Header login>
            <LogoLogin>
              <Image
                key={1}
                src={'/assets/react/authentication/logo3.min.svg'}
                alt="Logo"
              ></Image>
            </LogoLogin>
          </Header>
          <Body login>
            <Title>{t('authentication.login')}</Title>
            <br></br>
            <Form key={'login'}>
              <Input
                key={'Email'}
                name="Email"
                type="Email"
                label="Email"
                placeholder="Email"
                error={errors.Email}
                value={inputs.Email}
                onChange={(e) => {
                  handleInputChange(e)
                  setErrors({...errors, Email: false})
                }}
              />

              <PasswordInput
                name="Password"
                type="Password"
                label="Password"
                placeholder="Password"
                error={errors.Password}
                value={inputs.Password}
                onChange={(e) => {
                  handleInputChange(e)
                  setErrors({...errors, Password: false})
                }}
              />
              <Link style={{justifyContent: 'flex-end'}}>
                <span onClick={() => forgotPassword()}>
                  <Text>
                    <Highlite>{t('authentication.forgot')}</Highlite>
                  </Text>
                </span>
              </Link>
            </Form>
            <NavButtons>
              <Button
                style={{margin: '3%'}}
                size="medium"
                label={t('authentication.button2')}
                onClick={() => logIn()}
              ></Button>
            </NavButtons>
            <Box>
              <Line>
                <Tag>{t('authentication.media')}</Tag>
              </Line>
            </Box>
            <MediaButtons></MediaButtons>
          </Body>
          <Footer login>
            <Text>
              {t('authentication.noAccount')}
              <Highlite
                onClick={() => {
                  resetInputState()
                  authenticationStore.setState({authComponentState: 'signUp'})
                }}
              >
                {' '}
                {t('authentication.noAccount2')}{' '}
              </Highlite>
              {t('authentication.noAccount3')}
            </Text>
          </Footer>
        </Container>
      </Wrapper>
    )
  } else if (authComponentState === 'signUp') {
    return (
      <Wrapper>
        <Container>
          <Logo>
            <Image
              key={1}
              src={'/assets/react/authentication/logo3.min.svg'}
              alt="Logo"
            ></Image>
          </Logo>
          <Header>
            <LogoSignUp>
              <Image
                key={2}
                src={'/assets/react/authentication/logo3.min.svg'}
                alt="Logo"
              ></Image>
            </LogoSignUp>
          </Header>
          <Body>
            <Title>{t('authentication.signUp')}</Title>
            <SubTitle>
              {t('authentication.subtitle1')}
              <Highlite> {t('authentication.subtitle2')} </Highlite>
              {t('authentication.subtitle3')}
            </SubTitle>
            <br></br>
            <Form key={'signUp'}>
              <Input
                key={'Name'}
                name="Name"
                type="Text"
                label="Name"
                error={errors.Name}
                placeholder="Name"
                value={inputs.Name}
                onChange={(e) => {
                  handleInputChange(e)
                  setErrors({...errors, Name: false})
                }}
              />
              <Input
                key={'Email'}
                name="Email"
                type="Email"
                placeholder="Email"
                error={errors.Email}
                value={inputs.Email}
                onChange={(e) => {
                  handleInputChange(e)
                  setErrors({...errors, Email: false})
                }}
              />
              <Input
                key={'Confirmation'}
                name="Confirmation"
                type="Email"
                label="Email"
                error={errors.Confirmation}
                placeholder="Confirm Email"
                value={inputs.Confirmation}
                onChange={(e) => {
                  handleInputChange(e)
                  setErrors({...errors, Confirmation: false})
                }}
              />
              <PasswordInput
                name="Password"
                type="Password"
                label="Password"
                placeholder="Password"
                error={errors.Password}
                value={inputs.Password}
                onChange={(e) => {
                  handleInputChange(e)
                  setErrors({...errors, Password: false})
                }}
              />
              <Row style={{marginTop: '2%'}}>
                <Checkbox
                  style={{padding: '2px'}}
                  checked={inputs.Terms}
                  onChange={handleBoxChange}
                  name="Terms"
                  color="primary"
                />
                <Text noMargin>
                  {t('authentication.terms1')}
                  <Highlite>
                    {' '}
                    <a
                      style={{textDecoration: 'none'}}
                      href="https://www.speakypeaky.com/terms-and-conditions"
                    >
                      {t('authentication.terms2')}
                    </a>
                  </Highlite>
                </Text>
              </Row>
              <Row>
                <Checkbox
                  style={{padding: '2px'}}
                  checked={inputs.Privacy}
                  onChange={handleBoxChange}
                  name="Privacy"
                  color="primary"
                />
                <Text noMargin>
                  {t('authentication.terms1')}
                  <Highlite>
                    {' '}
                    <a
                      style={{textDecoration: 'none'}}
                      href="https://www.speakypeaky.com/privacypolicy"
                    >
                      {t('authentication.terms3')}
                    </a>{' '}
                  </Highlite>
                </Text>
              </Row>
            </Form>
            <NavButtons>
              <Button
                style={{margin: '3%'}}
                size="medium"
                label={t('authentication.button1')}
                onClick={() => signUp()}
              ></Button>
            </NavButtons>
          </Body>
          <Footer>
            <Text>
              {t('authentication.existAccount')}
              <Highlite
                onClick={() => {
                  resetInputState()
                  authenticationStore.setState({authComponentState: 'login'})
                }}
              >
                {' '}
                {t('authentication.existAccount2')}{' '}
              </Highlite>
              {t('authentication.noAccount3')}
            </Text>
          </Footer>
        </Container>
      </Wrapper>
    )
  }
}

export default AuthenticationPage
