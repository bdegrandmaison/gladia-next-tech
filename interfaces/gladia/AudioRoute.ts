/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  BodyRecognizeAudioTextAudioTranscriptionPost,
  ListAvailableModelsAudioTextAudioTranscriptionGetData,
  RecognizeAudioTextAudioTranscriptionPostData,
  RecognizeAudioTextAudioTranscriptionPostParamsModel,
} from "./data-contracts";

export namespace Audio {
  /**
   * @description List the available models for audio transcription returns: dict: list of available models
   * @tags Audio Transcription
   * @name ListAvailableModelsAudioTextAudioTranscriptionGet
   * @summary List Available Models
   * @request GET:/audio/text/audio-transcription/
   * @secure
   * @response `200` `ListAvailableModelsAudioTextAudioTranscriptionGetData` Successful Response
   */
  export namespace ListAvailableModelsAudioTextAudioTranscriptionGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListAvailableModelsAudioTextAudioTranscriptionGetData;
  }

  /**
   * @description Audio Transcription: &nbsp;&nbsp;&nbsp;Args: - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model (str): The AI model used for audio trancription (default: large-v2). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;audio (audio): The file to transcript. - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;audio_url (url): The file url to transcript, ignored if an audio file is provided. This can be a public file url or any of the supported social platform listed in the documentation.. - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;language_behaviour (enum): Define how the speaker's language will be detected (default: automatic single language). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;language (enum): If language_behaviour is set to manual, define the language to use for the transcription. - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toggle_noise_reduction (boolean): Activate the noise reduction to improve transcription quality (default: False). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transcription_hint (string): String to be fed to Whisper Model as textual context used during the inference. If empty, this argument is skipped. (default: ). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toggle_diarization (boolean): Activate the diarization of the audio (default: False). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toggle_direct_translate (boolean): Activate the direct translation of the audio transcription (default: False). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target_translation_language (enum): If toogle_direct_translate is set to true, define the language to use for the translation of the transcription. - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toggle_text_emotion_recognition (boolean): Activate the emotion recognition of             the audio transcription (default: False). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toggle_summarization (boolean): Activate the summarization of the audio transcription (default: False). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toggle_chapterization (boolean): Activate the chapterization of the audio transcription (default: False). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;webhook_url (string): Webhook URL to send the result to.        Make sure it network is open. (default: False). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;diarization_max_speakers (integer): Guiding maximum number of speakers (1à at most) (default: 2). - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output_format (enum): Define the output format, allowing to have         Plain Text, Text, JSON, STR, VTT         (subtitle file format for video content) (default: json). &nbsp;&nbsp;&nbsp;Returns: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dict: transcription
   * @tags Audio Transcription
   * @name RecognizeAudioTextAudioTranscriptionPost
   * @summary Recognize
   * @request POST:/audio/text/audio-transcription/
   * @secure
   * @response `200` `RecognizeAudioTextAudioTranscriptionPostData` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace RecognizeAudioTextAudioTranscriptionPost {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Model
       * The AI model used for audio trancription
       * @default "large-v2"
       */
      model?: RecognizeAudioTextAudioTranscriptionPostParamsModel;
    };
    export type RequestBody = BodyRecognizeAudioTextAudioTranscriptionPost;
    export type RequestHeaders = {};
    export type ResponseBody = RecognizeAudioTextAudioTranscriptionPostData;
  }
}
