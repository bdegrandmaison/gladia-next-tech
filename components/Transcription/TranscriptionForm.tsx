import { FormEvent, useState } from 'react';
import { Form, FormGroup, FormText, Button, Spinner } from 'reactstrap';
import {
  bodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourForInputArray,
  bodyRecognizeAudioTextAudioTranscriptionPostLanguageForInputArray,
  bodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageForInputArray,
  bodyRecognizeAudioTextAudioTranscriptionPostOutputFormatForInputArray,
  audioTranscriptionParamsWithoutAudioKeysArray,
  videoTranscriptionParamsWithoutVideoKeysArray,
} from '../../utils/constants';
import {
  BodyRecognizeAudioTextAudioTranscriptionPost,
  BodyRecognizeAudioTextAudioTranscriptionPostLanguage,
  BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour,
  BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat,
  BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage,
  BodyTranscribeVideoTextVideoTranscriptionPost,
  RecognizeAudioTextAudioTranscriptionPostData,
  TranscribeVideoTextVideoTranscriptionPostData,
} from '../../interfaces/gladia/data-contracts';
import {
  BodyRecognizeAudioTextAudioTranscriptionPostKeys,
  BodyTranscribeVideoTextVideoTranscriptionPostKeys,
  UserChoice,
} from '../../interfaces';
import { Audio } from '../../interfaces/gladia/Audio';
import { useMutation } from 'react-query';
import { Video } from '../../interfaces/gladia/Video';
import { FileInput } from './FormComponents/FileInput';
import { TextOrUrlInput } from './FormComponents/TextOrUrlInput';
import { SelectInput } from './FormComponents/SelectInput';
import { SwitchInput } from './FormComponents/SwitchInput';
import { NumberInput } from './FormComponents/NumberInput';
import { handleDownload } from '../../utils/handleDownload';
import { ContentType } from '../../interfaces/gladia/http-client';
import { DownloadButton } from './FormComponents/DownloadButton';

const audioFormStyle = {
  width: '90em',
  margin: '0 auto',
  padding: '2em',
  borderRadius: '2em',
};

const buttonsStyle = {
  width: '7em',
  margin: ' 2em auto 0.5em',
  display: 'block',
};

const submitHintStyle = {
  width: '40em',
  margin: ' 0 auto',
  display: 'block',
};

const apiKey = process.env.NEXT_PUBLIC_GLADIA_API_KEY;

export const TranscriptionForm = ({ userChoice }: { userChoice: UserChoice }) => {
  const [audioFile, setAudioFile] = useState<File>();
  const [audioURL, setAudioURL] = useState<string>('');
  const [videoFile, setVideoFile] = useState<File>();
  const [videoURL, setVideoURL] = useState<string>('');
  const [languageBehaviour, setLanguageBehaviour] =
    useState<BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour>();
  const [audioLanguage, setAudioLanguage] =
    useState<BodyRecognizeAudioTextAudioTranscriptionPostLanguage>();
  const [noiseReduction, setNoiseReduction] = useState(false);
  const [transcriptionHint, setTranscriptionHint] = useState('');
  const [diarization, setDiarization] = useState(false);
  const [directTranslate, setDirectTranslate] = useState(false);
  const [targetLanguage, setTargetLanguage] =
    useState<BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage>();
  const [summarization, setSummarization] = useState(false);
  const [textEmotionRecognition, setTextEmotionRecognition] = useState(false);
  const [chapterization, setChapterization] = useState(false);
  const [webHookURL, setWebHookURL] = useState<string>('');
  const [diarizationMaxSpeakers, setDiarizationMaxSpeakers] = useState<number>();
  const [outputFormat, setOutputFormat] =
    useState<BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat>();
  const [audioResult, setAudioResult] = useState<RecognizeAudioTextAudioTranscriptionPostData>();
  const [videoResult, setVideoResult] = useState<TranscribeVideoTextVideoTranscriptionPostData>();

  const audioTranscriptionMutation = useMutation({
    mutationFn: (formData: BodyRecognizeAudioTextAudioTranscriptionPost) => {
      const audioClient = new Audio();
      return audioClient.recognizeAudioTextAudioTranscriptionPost({}, formData, {
        headers: {
          accept: ContentType.Json,
          'x-gladia-key': apiKey,
          'Content-Type': ContentType.FormData,
        },
      });
    },
    onSuccess: (data) => {
      setAudioResult(data);
    },
  });

  const videoTranscriptionMutation = useMutation({
    mutationFn: (formData: BodyTranscribeVideoTextVideoTranscriptionPost) => {
      const videoClient = new Video();
      return videoClient.transcribeVideoTextVideoTranscriptionPost({}, formData, {
        headers: {
          accept: 'application/json',
          'x-gladia-key': apiKey,
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess: (data) => {
      setVideoResult(data);
    },
  });

  const noAudioFileOrURL = userChoice === UserChoice.Audio && !audioFile && !audioURL;
  const noVideoFileOrURL = userChoice === UserChoice.Video && !videoFile && !videoURL;
  const noTranscriptArtefact = noAudioFileOrURL || noVideoFileOrURL;
  const mutationHappening =
    audioTranscriptionMutation.isLoading || videoTranscriptionMutation.isLoading;
  const submitIsDisabled = noTranscriptArtefact || mutationHappening;

  const queriesIdle = audioTranscriptionMutation.isIdle || videoTranscriptionMutation.isIdle;
  const queriesLoading =
    audioTranscriptionMutation.isLoading || videoTranscriptionMutation.isLoading;
  const audioQuerySuccessful =
    userChoice === UserChoice.Audio && audioTranscriptionMutation.isSuccess && audioResult;
  const videoQuerySuccessful =
    userChoice === UserChoice.Audio && videoTranscriptionMutation.isSuccess && videoResult;

  function dataSwitch(
    keyForData:
      | BodyRecognizeAudioTextAudioTranscriptionPostKeys
      | BodyTranscribeVideoTextVideoTranscriptionPostKeys,
  ) {
    switch (keyForData) {
      case 'language_behaviour':
        return languageBehaviour;
      case 'language':
        return audioLanguage;
      case 'toggle_noise_reduction':
        return noiseReduction;
      case 'transcription_hint':
        return transcriptionHint;
      case 'toggle_diarization':
        return diarization;
      case 'toggle_direct_translate':
        return directTranslate;
      case 'target_translation_language':
        return targetLanguage;
      case 'toggle_text_emotion_recognition':
        return textEmotionRecognition;
      case 'toggle_summarization':
        return summarization;
      case 'toggle_chapterization':
        return chapterization;
      case 'webhook_url':
        return webHookURL;
      case 'diarization_max_speakers':
        return diarizationMaxSpeakers;
      case 'output_format':
        return outputFormat;
      default:
        return;
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData:
      | BodyRecognizeAudioTextAudioTranscriptionPost
      | BodyTranscribeVideoTextVideoTranscriptionPost = {};

    if (userChoice === UserChoice.Audio) {
      if (!audioFile && !audioURL) {
        alert('Please provide an audio file or audio URL');
        return;
      }

      if (audioFile) {
        formData['audio'] = audioFile;
      } else {
        formData['audio_url'] = audioURL;
      }

      audioTranscriptionParamsWithoutAudioKeysArray.forEach(
        (arrayKey: BodyRecognizeAudioTextAudioTranscriptionPostKeys) => {
          const valueToAppend = dataSwitch(arrayKey);
          if (valueToAppend) {
            formData[arrayKey as string] = valueToAppend;
          }
        },
      );

      audioTranscriptionMutation.mutate(formData as BodyRecognizeAudioTextAudioTranscriptionPost);
    } else {
      if (!videoFile && !videoURL) {
        alert('Please provide an audio file or audio URL');
        return;
      }
      if (videoFile) {
        formData['video'] = videoFile;
      } else {
        formData['video_url'] = videoURL;
      }

      videoTranscriptionParamsWithoutVideoKeysArray.forEach(
        (arrayKey: BodyTranscribeVideoTextVideoTranscriptionPostKeys) => {
          const valueToAppend = dataSwitch(arrayKey);
          if (valueToAppend) {
            formData[arrayKey as string] = valueToAppend;
          }
        },
      );

      videoTranscriptionMutation.mutate(formData as BodyTranscribeVideoTextVideoTranscriptionPost);
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={audioFormStyle} className="shadow-lg">
      {userChoice === UserChoice.Audio ? (
        <>
          <FileInput
            accept="audio/*"
            label="Audio File"
            name="audio-file"
            handleChange={setAudioFile}
          />
          <TextOrUrlInput
            label="Audio URL"
            name="audio-url"
            handleChange={setAudioURL}
            placeholder="URL of the audio file"
            value={audioURL}
            type="url"
          />
        </>
      ) : (
        <>
          <FileInput
            accept="video/*"
            label="Video File"
            name="video-file"
            handleChange={setVideoFile}
          />
          <TextOrUrlInput
            label="Video URL"
            name="video-url"
            handleChange={setVideoURL}
            placeholder="URL of the video file"
            value={videoURL}
            type="url"
          />
        </>
      )}
      <SelectInput
        data={bodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourForInputArray}
        handleChange={setLanguageBehaviour}
        label="Audio Language Behaviour"
        name="audio-language-behaviour"
        value={languageBehaviour}
        formText='This defines how the speaker&apos;s language will be detected. By default, it will be "Automatic single language"'
      />
      <SelectInput
        disabled={
          languageBehaviour !== BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour.Manual
        }
        data={bodyRecognizeAudioTextAudioTranscriptionPostLanguageForInputArray}
        handleChange={setAudioLanguage}
        label="Audio Language"
        name="audio-language"
        value={audioLanguage}
        formText="If language behaviour is set to manual, this defines the language to use for the
        transcription"
      />
      <SwitchInput
        explanation="this activates noise reduction"
        label="Noise reduction"
        name="noise-reduction"
        handleChange={setNoiseReduction}
        value={noiseReduction}
      />
      <TextOrUrlInput
        name="transcription_hint"
        label="Transcription Hint"
        placeholder="(Optional) Enter some textual context"
        value={transcriptionHint}
        handleChange={setTranscriptionHint}
        type="text"
        formText="String to be fed to Whisper Model as textual context used during the inference. If
      empty, this argument is skipped."
      />
      <SwitchInput
        explanation="this activates the diarization of the audio"
        label="Diarization"
        name="diarization"
        handleChange={setDiarization}
        value={diarization}
      />
      <SwitchInput
        explanation="this activates the direct translation of the audio transcription"
        label="Direct translate"
        name="direct_translate"
        handleChange={setDirectTranslate}
        value={directTranslate}
      />
      <SelectInput
        disabled={!directTranslate}
        data={bodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageForInputArray}
        handleChange={setTargetLanguage}
        label="Target Translation Language"
        name="target_translation_language"
        value={targetLanguage}
        formText="If direct translate is checked, define the language to use for the translation of the
        transcription"
      />
      <SwitchInput
        explanation="this activates the emotion recognition of the audio transcription"
        label="Text Emotion Recognition"
        name="text_emotion_recognition"
        handleChange={setTextEmotionRecognition}
        value={textEmotionRecognition}
      />
      <SwitchInput
        explanation="this activates the summarization of the audio transcription"
        label="Summarization"
        name="summarization"
        handleChange={setSummarization}
        value={summarization}
      />
      <SwitchInput
        explanation="this activates the chapterization of the audio transcription"
        label="Chapterization"
        name="chapterization"
        handleChange={setChapterization}
        value={chapterization}
      />
      <TextOrUrlInput
        formText="The webhook URL to send the result to. Just make sure your network is open."
        handleChange={setWebHookURL}
        label="Webhook URL"
        name="webhook-url"
        placeholder="URL for the webhook"
        value={webHookURL}
        type="url"
      />
      <NumberInput
        name="diarization_max_speakers"
        label="Diarization max speakers"
        handleChange={setDiarizationMaxSpeakers}
        value={diarizationMaxSpeakers}
      />
      <SelectInput
        data={bodyRecognizeAudioTextAudioTranscriptionPostOutputFormatForInputArray}
        handleChange={setOutputFormat}
        label="Output Format"
        name="output-format"
        value={outputFormat}
        formText="This defines the output format, allowing to have Plain Text, Text, JSON, STR, VTT
        (subtitle file format for video content). By default, it will be a JSON file."
      />
      {queriesIdle && !queriesLoading && (
        <FormGroup check row>
          <Button style={buttonsStyle} disabled={submitIsDisabled} color="primary">
            Submit{noTranscriptArtefact && ' *'}
          </Button>
          <FormText style={submitHintStyle}>
            {noTranscriptArtefact &&
              '*To enable the submit button, please select a file or URL for transcription.'}
          </FormText>
        </FormGroup>
      )}
      {queriesLoading && (
        <FormGroup check row>
          <Button style={buttonsStyle} color="primary" disabled>
            <Spinner size="sm">Loading...</Spinner>
            <span> Loading</span>
          </Button>
        </FormGroup>
      )}
      {videoQuerySuccessful && (
        <FormGroup check row>
          <Button
            style={buttonsStyle}
            color="success"
            onClick={() =>
              userChoice === UserChoice.Audio
                ? handleDownload({ data: audioResult, outputType: outputFormat })
                : handleDownload({ data: videoResult, outputType: outputFormat })
            }
          >
            Download
          </Button>
        </FormGroup>
      )}
      {audioQuerySuccessful && (
        <DownloadButton style={buttonsStyle} data={audioResult} outputType={outputFormat} />
      )}
      {videoQuerySuccessful && (
        <DownloadButton style={buttonsStyle} data={videoResult} outputType={outputFormat} />
      )}
    </Form>
  );
};
