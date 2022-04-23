import React, {useEffect, useState} from 'react'
import {Suspense} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
//Modules
import ReactPlayer from 'react-player/youtube'

// Componts
import ActionButton from '../../components/ActionButton'
import styled, {keyframes, css} from 'styled-components/macro'
import {fadeIn} from 'react-animations'
import {Button} from '../../components/Button'

// Global Store
import {authenticationStore} from '../../store/globalStore'

//Material Ui components
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

// Multilanguage page content object
import {useTranslation} from 'react-i18next'

import {withStyles} from '@material-ui/core/styles'

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
    height: 95%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 95%;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    overflow-y: auto;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 80%;
    height: 70%;
    flex-direction: row;
  }
`

const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 992px) {
    height: 50%;
    flex-direction: row;
  }
`
const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    height: 80%;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 80%;
  }
`
const BackButton = styled(IconButton)`
  && {
    padding: 5%;
    display: inline;
    align-self: flex-start;
    color: #979797;
    @media only screen and (min-width: 992px) {
      display: none;
    }
  }
`

const Navigator = styled.div`
  display: none;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: flex;
    padding-top: 7%;
  }
`
const Body = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 8;
  flex-direction: column;
  justify-content: center;
`
const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`
const Desktop = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`

const GroupDesktop = styled.div`
  height: 100%;
  width: 100%;
  display: none;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`

const GroupDesktop2 = styled.div`
  width: 100%;

  display: none;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: flex;
    height: 70%;
  }
`
const Card = styled(Paper)`
  && {
    margin: 2%;
    height: 80%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fdfdfd;
    box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.1);
    border-radius: 17px;
  }
`

const DesktopCard = styled(Paper)<{value: any}>`
  && {
    margin: 2%;
    height: 50%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fdfdfd;
    box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.1);
    border-radius: 17px;
  }
`

const GroupMobile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 992px) {
    display: none;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`
const LightRadio = withStyles({
  root: {
    color: '#979797',
    '&$checked': {
      color: 'primary',
    },
  },
  checked: {},
})((props) => <Radio color="primary" {...props} />)

const Question = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1.2px;
  color: #e22d2d;
  mix-blend-mode: normal;
`

const Internals = styled.div`
  padding: 2%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (min-width: 992px) {
    padding: 0%;
  }
`
const VideoWrapper = styled.div`
  width: 100%;
  border-radius: 10%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`

const Video = styled.div`
  width: 100%;
  padding: 2%;
  border-radius: 10%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`
const ButtonWrapper = styled.div`
  width: 90%;
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`

const Option = styled(Paper)`
  margin: 2%;
  padding: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  && {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`

const Image = styled.img`
  animation: 1.5s ${keyframes`${fadeIn}`};
  margin: 0px;
`
const Text = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
  text-align: center;
  font-family: Open Sans;
`
const Title = styled.h3`
  padding-left: 4%;
  padding-right: 4%;
  margin: 1%;
  animation: 1.5s ${keyframes`${fadeIn}`};
  text-align: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #000000;
  @media only screen and (min-width: 992px) {
    text-align: center;
    font-size: 1.1em;
  }
`
const SubTitle = styled.span`
  padding: 5%;
  text-align: left;
  font-family: Open Sans;
  font-style: normal;
  font-size: 1em;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.432px;
  color: #979797;
  @media only screen and (min-width: 992px) {
    text-align: center;
    font-size: 1.1em;
    padding: 2%;
  }
`
const Box = styled.div<{col?: boolean}>`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.col &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`

export const PostBordingPage = () => {
  let history = useHistory()
  // Global State
  const {authComponentState, setAuthComponentState} = authenticationStore()
  // Local State
  const totatlQuestions = 2
  const [question, setQuestion] = useState(1)
  const [activeCard, setActiveCard] = useState(0)
  const [isDisabled, toggleDisabled] = useState(true)

  // Form input from 3 Questions
  const [formOne, setFormOne] = React.useState(null)
  const [formTwo, setFormTwo] = React.useState(null)

  const handleFormOne = (event) => {
    setFormOne(event.currentTarget.getAttribute('value'))
    toggleDisabled(false)
  }
  const handleFormTwo = (event) => {
    setFormTwo(event.currentTarget.getAttribute('value'))
    toggleDisabled(false)
  }

  // Page content based on injected Language
  const {t, i18n} = useTranslation()

  // back navigation
  const previousPage = () => {
    if (question === 1) {
      history.push('/Login')
    } else if (question > 1) {
      setActiveCard(Math.min(cards.length - 1, activeCard - 1))
      setQuestion(question - 1)
    }
  }

  // Record preferances
  const handleSettings = () => {
    // *** todo connect to API ***
    console.log(formOne, formTwo)

    if (formOne != null && formTwo != null) {
      authenticationStore.setState({authComponentState: 'signUp'})
      history.push('/login')
    }
  }
  // Next Question Card
  const next = () => {
    if (question < 2) {
      handleSettings()
      setActiveCard(Math.min(cards.length - 1, activeCard + 1))
      setQuestion(question + 1)
      toggleDisabled(true)
    } else {
      handleSettings()
    }
  }

  // Available cards
  var cards = [
    {
      id: 1,
      title: t('postbording.title1'),
      subTitle: t('postbording.subTitle1'),
      description: t('description1'),
    },
    {
      id: 2,
      title: t('postbording.title2'),
      title2: t('postbording.title2p2'),
      titleDesktop: t('postbording.titleDesktop'),
      description: t('description2'),
    },
  ]

  return (
    <Wrapper>
      <Container>
        <Navigator>
          <ActionButton
            color="secondary"
            size="medium"
            direction="left"
            onClick={previousPage}
          ></ActionButton>
        </Navigator>
        <Body>
          <Header>
            <BackButton onClick={previousPage}>
              <ArrowBackIosIcon />
            </BackButton>
            <Question>
              {t('postbording.question')} {question} / {totatlQuestions}
            </Question>
          </Header>
          <Content>
            <QuestionCard
              style={{height: '100%'}}
              activeCard={activeCard}
              cards={cards}
              t={t}
              formOne={formOne}
              formTwo={formTwo}
              handleFormOne={handleFormOne}
              handleFormTwo={handleFormTwo}
            />
          </Content>
          <Footer>
            <ButtonWrapper>
              <Button
                size="medium"
                disabled={isDisabled}
                label="Continue"
                color="primary"
                onClick={next}
              ></Button>
            </ButtonWrapper>
          </Footer>
        </Body>
        <Navigator>
          <ActionButton
            style={{opacity: '0%'}}
            color="secondary"
            size="medium"
            direction="left"
            //onClick={prev}
          ></ActionButton>
        </Navigator>
      </Container>
    </Wrapper>
  )
}

function QuestionCard({
  activeCard,
  cards,
  t,
  formOne,
  formTwo,
  handleFormOne,
  handleFormTwo,
  ...props
}) {
  const [selection, setSelection] = useState(formOne)

  useEffect(() => {}, [selection])

  if (activeCard === 0) {
    return (
      <Internals {...props} key={activeCard}>
        <Title>{cards[activeCard].title}</Title>
        <SubTitle>{cards[activeCard].subTitle}</SubTitle>

        <GroupDesktop>
          <DesktopCard
            value="1"
            style={selection === 1 ? {boxShadow: '0px 0px 0px 2px #E22D2D'} : {}}
            onClick={(event) => {
              setSelection(1)
              handleFormOne(event)
            }}
          >
            <Image src={'/assets/react/postboarding/korean-lg.svg'}></Image>
            <Text>{t('postbording.q2o1')}</Text>
          </DesktopCard>
          <DesktopCard
            value="2"
            style={selection === 2 ? {boxShadow: '0px 0px 0px 2px #E22D2D'} : {}}
            onClick={(event) => {
              setSelection(2)
              handleFormOne(event)
            }}
          >
            <Image src={'/assets/react/postboarding/spanish-lg.svg'}></Image>
            <Text>{t('postbording.q2o2')}</Text>
          </DesktopCard>
          <DesktopCard
            value="3"
            style={selection === 3 ? {boxShadow: '0px 0px 0px 2px #E22D2D'} : {}}
            onClick={(event) => {
              setSelection(3)
              handleFormOne(event)
            }}
          >
            <Image src={'/assets/react/postboarding/vietnamese-lg.svg'}></Image>
            <Text>{t('postbording.q2o3')}</Text>
          </DesktopCard>
          <DesktopCard
            value="4"
            style={selection === 4 ? {boxShadow: '0px 0px 0px 2px #E22D2D'} : {}}
            onClick={(event) => {
              setSelection(4)
              handleFormOne(event)
            }}
          >
            <Image src={'/assets/react/postboarding/portuguese-lg.svg'}></Image>
            <Text>{t('postbording.q2o4')}</Text>
          </DesktopCard>
        </GroupDesktop>

        <FormControl component="fieldset">
          <RadioGroup name="formOne" value={formOne} onChange={handleFormOne}>
            <GroupMobile>
              <Option>
                <Box>
                  <Image src={'/assets/react/postboarding/korean.svg'}></Image>
                  <Text style={{paddingLeft: '10px'}}>{t('postbording.q2o1')}</Text>
                </Box>
                <FormControlLabel label="" value="1" control={<LightRadio />} />
              </Option>
              <Option>
                <Box>
                  <Image src={'/assets/react/postboarding/spanish.svg'}></Image>
                  <Text style={{paddingLeft: '10px'}}>{t('postbording.q2o2')}</Text>
                </Box>

                <FormControlLabel label="" value="2" control={<LightRadio />} />
              </Option>
              <Option>
                <Box>
                  <Image src={'/assets/react/postboarding/vietnamese.svg'}></Image>
                  <Text style={{paddingLeft: '10px'}}>{t('postbording.q2o3')}</Text>
                </Box>

                <FormControlLabel label="" value="3" control={<LightRadio />} />
              </Option>
              <Option>
                <Box>
                  <Image src={'/assets/react/postboarding/portuguese.svg'}></Image>
                  <Text style={{paddingLeft: '10px'}}>{t('postbording.q2o4')}</Text>
                </Box>

                <FormControlLabel label="" value="4" control={<LightRadio />} />
              </Option>
            </GroupMobile>
          </RadioGroup>
        </FormControl>
      </Internals>
    )
  } else if (activeCard === 1) {
    return (
      <Internals {...props} key={activeCard}>
        <Mobile>
          <Title>{cards[activeCard].title}</Title>
          <Title>{cards[activeCard].title2}</Title>
        </Mobile>
        <Desktop>
          <Title>{cards[activeCard].titleDesktop}</Title>
        </Desktop>
        <VideoWrapper>
          <Video>
            <Suspense fallback={<div>Loading...</div>}>
              <ReactPlayer
                style={{borderRadius: '16px'}}
                width="100%"
                height="30vh"
                playing={true}
                controls={false}
                light={'/assets/react/postboarding/thumbnail.png'}
                playIcon={
                  <img src={'/assets/react/postboarding/play.svg'} alt="play"></img>
                }
                url="https://www.youtube.com/watch?v=v6zPVKXSSWc"
              />
            </Suspense>
          </Video>
        </VideoWrapper>

        <GroupDesktop2>
          <DesktopCard
            value="1"
            style={
              selection === 5
                ? {
                    boxShadow: '0px 0px 0px 2px #E22D2D',
                  }
                : {}
            }
            onClick={(event) => {
              setSelection(5)
              handleFormTwo(event)
            }}
          >
            <Text>{t('postbording.q1o1')}</Text>
          </DesktopCard>
          <DesktopCard
            value="2"
            style={
              selection === 6
                ? {
                    boxShadow: '0px 0px 0px 2px #E22D2D',
                  }
                : {}
            }
            onClick={(event) => {
              setSelection(6)
              handleFormTwo(event)
            }}
          >
            <Text>{t('postbording.q1o2')}</Text>
          </DesktopCard>
          <DesktopCard
            value="3"
            style={
              selection === 7
                ? {
                    boxShadow: '0px 0px 0px 2px #E22D2D',
                  }
                : {}
            }
            onClick={(event) => {
              setSelection(7)
              handleFormTwo(event)
            }}
          >
            <Text>{t('postbording.q1o3')}</Text>
          </DesktopCard>
        </GroupDesktop2>

        <FormControl component="fieldset">
          <RadioGroup name="formTwo" value={formTwo} onChange={handleFormTwo}>
            <GroupMobile>
              <Option>
                <Text>{t('postbording.q1o1')}</Text>
                <FormControlLabel label="" value="1" control={<LightRadio />} />
              </Option>
              <Option>
                <Text>{t('postbording.q1o2')}</Text>
                <FormControlLabel label="" value="2" control={<LightRadio />} />
              </Option>
              <Option>
                <Text>{t('postbording.q1o3')}</Text>
                <FormControlLabel label="" value="3" control={<LightRadio />} />
              </Option>
            </GroupMobile>
          </RadioGroup>
        </FormControl>
      </Internals>
    )
  }
}

export default PostBordingPage
