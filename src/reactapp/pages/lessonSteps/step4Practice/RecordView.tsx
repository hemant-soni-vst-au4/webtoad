import React from 'react'
import {Box, Flex, Spinner, Text} from '@chakra-ui/react'
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonImg,
  IonProgressBar,
  IonText,
} from '@ionic/react'
import clsx from 'clsx'
import {checkmark} from 'ionicons/icons'
import {useSpeechToText} from './useSpeechToText'

export function RecordResultItem({
  loading,
  error = undefined,
  data,
  index,
  isPlaying,
  onPlay,
  onStop,
}) {
  return (
    <IonCard className="confidence-level " mode="ios">
      {data && index === 0 && (
        <IonCardHeader>
          <IonCardTitle id="checkmark-icon">
            <IonIcon mode="md" icon={checkmark}></IonIcon>
            <IonText>
              {data.percent >= 93
                ? 'You got it! English must be your mother tongue!'
                : data.percent >= 80
                ? 'You are pretty good.'
                : data.percent >= 70
                ? 'You are not bad.'
                : "That doesn't sound good. You can try again."}
            </IonText>
          </IonCardTitle>
        </IonCardHeader>
      )}
      <IonCardContent>
        <Flex>
          {loading ? (
            <Box flex={1}>
              <Spinner />
            </Box>
          ) : error ? (
            <Box flex={1}>Can not evaluate. Try again</Box>
          ) : (
            <Box flex={1}>
              <IonText className="percent">
                {index === 0 ? 'Latest' : index + 1}: {data.percent}%{' '}
              </IonText>

              <IonProgressBar
                className={clsx(index === 0 ? 'latest-confidence' : 'old-confidence')}
                mode="md"
                value={data.confidence}
              ></IonProgressBar>
              <Box mt={2}>
                <Text color={index === 0 ? '#e22d2d' : '#444'}>{data.transcript}</Text>
              </Box>
            </Box>
          )}

          <Box h="40px" w="40px">
            {!isPlaying ? (
              <IonImg
                className="pointer"
                onClick={onPlay}
                style={{height: '100%'}}
                src="../../../../../assets/images/play.png"
              />
            ) : (
              <IonImg
                className="pointer"
                onClick={onStop}
                style={{height: '100%'}}
                src="../../../../../assets/images/audioFilePlaying.png"
              />
            )}
          </Box>
        </Flex>
      </IonCardContent>
    </IonCard>
  )
}

export function RecordView({
  audioAsBase64,
  sampleRate,
  index,
  isPlaying,
  onPlay,
  onStop,
  onCompleted,
}) {
  const {data, error, loading} = useSpeechToText(audioAsBase64, sampleRate, {onCompleted})
  return (
    <RecordResultItem
      data={data}
      error={error}
      loading={loading}
      index={index}
      isPlaying={isPlaying}
      onStop={onStop}
      onPlay={onPlay}
    />
  )
}
