import {
  BodyRecognizeAudioTextAudioTranscriptionPostArrayKeys,
  BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourKeys,
  BodyRecognizeAudioTextAudioTranscriptionPostLanguageKeys,
  BodyRecognizeAudioTextAudioTranscriptionPostOutputFormatKeys,
  BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageKeys,
  BodyTranscribeVideoTextVideoTranscriptionPostArrayKeys,
  BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviourKeys,
  BodyTranscribeVideoTextVideoTranscriptionPostLanguageKeys,
  BodyTranscribeVideoTextVideoTranscriptionPostOutputFormatKeys,
  BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguageKeys,
} from '../interfaces';
import {
  BodyRecognizeAudioTextAudioTranscriptionPost,
  BodyRecognizeAudioTextAudioTranscriptionPostLanguage,
  BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour,
  BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat,
  BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage,
  BodyTranscribeVideoTextVideoTranscriptionPostLanguage,
  BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviour,
  BodyTranscribeVideoTextVideoTranscriptionPostOutputFormat,
  BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguage,
} from '../interfaces/gladia/data-contracts';
import { formatEnumLabels } from './helpers';

//Audio Query Params

const audioTranscriptionParamsWithoutAudio: BodyRecognizeAudioTextAudioTranscriptionPost = {
  language_behaviour: undefined,
  language: undefined,
  toggle_noise_reduction: undefined,
  transcription_hint: undefined,
  toggle_diarization: undefined,
  toggle_direct_translate: undefined,
  target_translation_language: undefined,
  toggle_text_emotion_recognition: undefined,
  toggle_summarization: undefined,
  toggle_chapterization: undefined,
  webhook_url: undefined,
  diarization_max_speakers: undefined,
  output_format: undefined,
};

export const audioTranscriptionParamsWithoutAudioKeysArray = Object.keys(
  audioTranscriptionParamsWithoutAudio,
) as BodyRecognizeAudioTextAudioTranscriptionPostArrayKeys;

//Video Query Params

const videoTranscriptionParamsWithoutVideo: BodyRecognizeAudioTextAudioTranscriptionPost = {
  language_behaviour: undefined,
  language: undefined,
  toggle_noise_reduction: undefined,
  transcription_hint: undefined,
  toggle_diarization: undefined,
  toggle_direct_translate: undefined,
  target_translation_language: undefined,
  toggle_text_emotion_recognition: undefined,
  toggle_summarization: undefined,
  toggle_chapterization: undefined,
  webhook_url: undefined,
  diarization_max_speakers: undefined,
  output_format: undefined,
};

export const videoTranscriptionParamsWithoutVideoKeysArray = Object.keys(
  videoTranscriptionParamsWithoutVideo,
) as BodyTranscribeVideoTextVideoTranscriptionPostArrayKeys;

// Enums to array for transcript forms
//AUDIO

type BodyRecognizeAudioTextAudioTranscriptionPostLanguageForInputType = {
  label: BodyRecognizeAudioTextAudioTranscriptionPostLanguageKeys;
  value: (typeof BodyRecognizeAudioTextAudioTranscriptionPostLanguage)[BodyRecognizeAudioTextAudioTranscriptionPostLanguageKeys];
};

export const bodyRecognizeAudioTextAudioTranscriptionPostLanguageForInputArray: BodyRecognizeAudioTextAudioTranscriptionPostLanguageForInputType[] =
  Object.keys(BodyRecognizeAudioTextAudioTranscriptionPostLanguage).map(
    (key: BodyRecognizeAudioTextAudioTranscriptionPostLanguageKeys) => ({
      label: key,
      value: BodyRecognizeAudioTextAudioTranscriptionPostLanguage[key],
    }),
  );

type BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourForInputType = {
  label: string;
  value: (typeof BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour)[BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourKeys];
};

export const bodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourForInputArray: BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourForInputType[] =
  Object.keys(BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour).map(
    (key: BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourKeys) => ({
      label: formatEnumLabels(key),
      value: BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour[key],
    }),
  );

type BodyRecognizeAudioTextAudioTranscriptionPostOutputFormatForInputType = {
  label: BodyRecognizeAudioTextAudioTranscriptionPostOutputFormatKeys;
  value: (typeof BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat)[BodyRecognizeAudioTextAudioTranscriptionPostOutputFormatKeys];
};

export const bodyRecognizeAudioTextAudioTranscriptionPostOutputFormatForInputArray: BodyRecognizeAudioTextAudioTranscriptionPostOutputFormatForInputType[] =
  Object.keys(BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat).map(
    (key: BodyRecognizeAudioTextAudioTranscriptionPostOutputFormatKeys) => ({
      label: key,
      value: BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat[key],
    }),
  );

type BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageForInputType = {
  label: BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageKeys;
  value: (typeof BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage)[BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageKeys];
};

export const bodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageForInputArray: BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageForInputType[] =
  Object.keys(BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage).map(
    (key: BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageKeys) => ({
      label: key,
      value: BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage[key],
    }),
  );

//VIDEO

type BodyTranscribeVideoTextVideoTranscriptionPostLanguageForInputType = {
  label: BodyTranscribeVideoTextVideoTranscriptionPostLanguageKeys;
  value: (typeof BodyTranscribeVideoTextVideoTranscriptionPostLanguage)[BodyTranscribeVideoTextVideoTranscriptionPostLanguageKeys];
};

export const bodyTranscribeVideoTextVideoTranscriptionPostLanguageForInputArray: BodyTranscribeVideoTextVideoTranscriptionPostLanguageForInputType[] =
  Object.keys(BodyTranscribeVideoTextVideoTranscriptionPostLanguage).map(
    (key: BodyTranscribeVideoTextVideoTranscriptionPostLanguageKeys) => ({
      label: key,
      value: BodyTranscribeVideoTextVideoTranscriptionPostLanguage[key],
    }),
  );

type BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviourForInputType = {
  label: string;
  value: (typeof BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviour)[BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviourKeys];
};

export const bodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviourForInputArray: BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviourForInputType[] =
  Object.keys(BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviour).map(
    (key: BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviourKeys) => ({
      label: formatEnumLabels(key),
      value: BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviour[key],
    }),
  );

type BodyTranscribeVideoTextVideoTranscriptionPostOutputFormatForInputType = {
  label: BodyTranscribeVideoTextVideoTranscriptionPostOutputFormatKeys;
  value: (typeof BodyTranscribeVideoTextVideoTranscriptionPostOutputFormat)[BodyTranscribeVideoTextVideoTranscriptionPostOutputFormatKeys];
};

export const bodyTranscribeVideoTextVideoTranscriptionPostOutputFormatForInputArray: BodyTranscribeVideoTextVideoTranscriptionPostOutputFormatForInputType[] =
  Object.keys(BodyTranscribeVideoTextVideoTranscriptionPostOutputFormat).map(
    (key: BodyTranscribeVideoTextVideoTranscriptionPostOutputFormatKeys) => ({
      label: key,
      value: BodyTranscribeVideoTextVideoTranscriptionPostOutputFormat[key],
    }),
  );

type BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguageForInputType = {
  label: BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguageKeys;
  value: (typeof BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguage)[BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguageKeys];
};

export const bodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguageForInputArray: BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguageForInputType[] =
  Object.keys(BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguage).map(
    (key: BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguageKeys) => ({
      label: key,
      value: BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguage[key],
    }),
  );
