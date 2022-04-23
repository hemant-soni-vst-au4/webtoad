import React from 'react'
// import {isPlatform} from '@ionic/react'
// import Speech from 'speak-tts'
import {TextToSpeech} from '@ionic-native/text-to-speech'
import {Capacitor, Plugins} from '@capacitor/core'

const {Accessibility} = Plugins

export default function useSpeak() {
  // const tts = new TextToSpeech()

  async function speak(text: string) {
    if (Capacitor.platform === 'ios') {
      try {
        await TextToSpeech.speak({text, locale: 'en', rate: 1.5})
      } catch (error) {
        console.error('An error occured while initializing : ', error)
      }
    } else {
      await Accessibility.speak({value: text, language: 'en'})
    }
  }
  return speak
}

// export default function useSpeak() {
//   const [speech, setSpeech] = React.useState<any>()

//   function speak(text) {
//     Accessibility.speak({value: text, language: 'en'})
//     if (isPlatform('capacitor')) {
//       // TextToSpeech.speak(text)
//       Accessibility.speak({value: text})
//     } else if (speech) {
//       console.log({speech, text})
//       speech.speak({text})
//     }
//   }
//   React.useEffect(() => {
//     const speech = new Speech() // will throw an exception if not browser supported
//     if (speech.hasBrowserSupport()) {
//       speech.init({lang: 'en-US'}).then((data) => {
//         // const voices = data.voices.filter((v) => v.lang === 'en-US')
//         // const v = voices.find((v) => v.name === 'Samantha')

//         // speech.setVoice(v.name)
//         setSpeech(speech)
//       })
//       // speech.init({lang: 'en-US', voice: 'Samantha'}).then((data) => {
//       //   const voices = data.voices.filter((v) => v.lang === 'en-US')
//       //   const v = voices.find((v) => v.name === 'Samantha')

//       //   speech.setVoice(v.name)
//       //   setSpeech(speech)
//       // })
//     }
//   }, [])
//   return speak
// }
