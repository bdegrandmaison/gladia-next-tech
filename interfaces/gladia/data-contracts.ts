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

/** Body_recognize_audio_text_audio_transcription__post */
export interface BodyRecognizeAudioTextAudioTranscriptionPost {
  /**
   * Audio
   * The file to transcript
   * @format binary
   * @example "http://files.gladia.io/example/audio-transcription/split_infinity.wav"
   */
  audio?: File;
  /**
   * Audio url
   * The file url to transcript, ignored if an audio file is provided. This can be a public file url or any of the supported social platform listed in the documentation.
   * @example "http://files.gladia.io/example/audio-transcription/split_infinity.wav"
   */
  audio_url?: string;
  /**
   * Diarization max speakers
   * Guiding maximum number of speakers (1à at most)
   * @default 2
   * @example 2
   */
  diarization_max_speakers?: number;
  /**
   * Language
   * If language_behaviour is set to manual, define the language to use for the transcription
   * @example "english"
   */
  language?: BodyRecognizeAudioTextAudioTranscriptionPostLanguage;
  /**
   * Language behaviour
   * Define how the speaker's language will be detected
   * @default "automatic single language"
   * @example "automatic single language"
   */
  language_behaviour?: BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour;
  /**
   * Output format
   * Define the output format, allowing to have         Plain Text, Text, JSON, STR, VTT         (subtitle file format for video content)
   * @default "json"
   * @example "json"
   */
  output_format?: BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat;
  /**
   * Target translation language
   * If toogle_direct_translate is set to true, define the language to use for the translation of the transcription
   * @example "english"
   */
  target_translation_language?: BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage;
  /**
   * Toggle chapterization
   * Activate the chapterization of the audio transcription
   * @default false
   * @example false
   */
  toggle_chapterization?: boolean;
  /**
   * Toggle diarization
   * Activate the diarization of the audio
   * @default false
   * @example false
   */
  toggle_diarization?: boolean;
  /**
   * Toggle direct translate
   * Activate the direct translation of the audio transcription
   * @default false
   * @example false
   */
  toggle_direct_translate?: boolean;
  /**
   * Toggle noise reduction
   * Activate the noise reduction to improve transcription quality
   * @default false
   * @example false
   */
  toggle_noise_reduction?: boolean;
  /**
   * Toggle summarization
   * Activate the summarization of the audio transcription
   * @default false
   * @example false
   */
  toggle_summarization?: boolean;
  /**
   * Toggle text emotion recognition
   * Activate the emotion recognition of             the audio transcription
   * @default false
   * @example false
   */
  toggle_text_emotion_recognition?: boolean;
  /**
   * Transcription hint
   * String to be fed to Whisper Model as textual context used during the inference. If empty, this argument is skipped.
   * @default ""
   * @example ""
   */
  transcription_hint?: string;
  /**
   * Webhook url
   * Webhook URL to send the result to.        Make sure it network is open.
   * @default false
   * @example ""
   */
  webhook_url?: string;
}

/** Body_transcribe_video_text_video_transcription__post */
export interface BodyTranscribeVideoTextVideoTranscriptionPost {
  /**
   * Diarization max speakers
   * Guiding maximum number of speakers (1à at most)
   * @default 2
   * @example 2
   */
  diarization_max_speakers?: number;
  /**
   * Language
   * If language_behaviour is set to manual, define the language to use for the transcription
   * @example "english"
   */
  language?: BodyTranscribeVideoTextVideoTranscriptionPostLanguage;
  /**
   * Language behaviour
   * Define how the speaker's language will be detected
   * @default "automatic single language"
   * @example "automatic single language"
   */
  language_behaviour?: BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviour;
  /**
   * Output format
   * Define the output format, allowing to have         Plain Text, Text, JSON, STR, VTT         (subtitle file format for video content)
   * @default "json"
   * @example "json"
   */
  output_format?: BodyTranscribeVideoTextVideoTranscriptionPostOutputFormat;
  /**
   * Target translation language
   * If toogle_direct_translate is set to true, define the language to use for the translation of the transcription
   * @example "english"
   */
  target_translation_language?: BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguage;
  /**
   * Toggle chapterization
   * Activate the chapterization of the audio transcription
   * @default false
   * @example false
   */
  toggle_chapterization?: boolean;
  /**
   * Toggle diarization
   * Activate the diarization of the audio
   * @default false
   * @example false
   */
  toggle_diarization?: boolean;
  /**
   * Toggle direct translate
   * Activate the direct translation of the audio transcription
   * @default false
   * @example false
   */
  toggle_direct_translate?: boolean;
  /**
   * Toggle noise reduction
   * Activate the noise reduction to improve transcription quality
   * @default false
   * @example false
   */
  toggle_noise_reduction?: boolean;
  /**
   * Toggle summarization
   * Activate the summarization of the audio transcription
   * @default false
   * @example false
   */
  toggle_summarization?: boolean;
  /**
   * Toggle text emotion recognition
   * Activate the emotion recognition of             the audio transcription
   * @default false
   * @example false
   */
  toggle_text_emotion_recognition?: boolean;
  /**
   * Transcription hint
   * String to be fed to Whisper Model as textual context used during the inference. If empty, this argument is skipped.
   * @default ""
   * @example ""
   */
  transcription_hint?: string;
  /**
   * Video
   * The file to transcript
   * @format binary
   * @example "http://files.gladia.io/example/video-transcription/short-video.mp4"
   */
  video?: File;
  /**
   * Video url
   * The file url to transcript, ignored if an audio file is provided. This can be a public file url or any of the supported social platform listed in the documentation.
   * @example "http://files.gladia.io/example/video-transcription/short-video.mp4"
   */
  video_url?: string;
  /**
   * Webhook url
   * Webhook URL to send the result to.        Make sure it network is open.
   * @default false
   * @example ""
   */
  webhook_url?: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

export interface ListAvailableModelsAudioTextAudioTranscriptionGetData {
  models?: {
    "large-v2"?: string;
  };
  summary?: string;
}

export interface ModelsVideoTextVideoTranscriptionGetData {
  models?: {
    "large-v2"?: string;
  };
  summary?: string;
}

export interface RecognizeAudioTextAudioTranscriptionPostData {
  /** The result that we want when we use an endpoint. This is the data you will need in 99/100 of cases. */
  prediction?: {
    time_begin?: number;
    time_end?: number;
    transcription?: string;
    language?: string;
    probability?: number;
    speaker?: string;
    channel?: string;
  }[];
  /** The raw result from audio processing, with extra data. */
  prediction_raw?: {
    metadata?: {
      total_speech_duration?: number;
      total_speech_duration_channel_0?: number;
      audio_conversion_time?: number;
      vad_time?: number;
      inference_time?: number;
      diarization_time?: number;
      total_transcription_time?: number;
      original_file_type?: string;
      original_nb_channels?: number;
      original_sample_rate?: number;
      original_sample_width?: number;
      original_nb_silent_channels?: number;
      original_nb_similar_channels?: number;
      original_mediainfo?: {
        index?: string;
        codec_name?: string;
        codec_long_name?: string;
        profile?: string;
        codec_type?: string;
        codec_time_base?: string;
        codec_tag_string?: string;
        codec_tag?: string;
        sample_fmt?: string;
        sample_rate?: string;
        channels?: string;
        channel_layout?: string;
        bits_per_sample?: string;
        id?: string;
        r_frame_rate?: string;
        avg_frame_rate?: string;
        time_base?: string;
        start_pts?: string;
        start_time?: string;
        duration_ts?: string;
        duration?: string;
        bit_rate?: string;
        max_bit_rate?: string;
        bits_per_raw_sample?: string;
        nb_frames?: string;
        nb_read_frames?: string;
        nb_read_packets?: string;
        DISPOSITION?: {
          default?: string;
          dub?: string;
          original?: string;
          comment?: string;
          lyrics?: string;
          karaoke?: string;
          forced?: string;
          hearing_impaired?: string;
          visual_impaired?: string;
          clean_effects?: string;
          attached_pic?: string;
          timed_thumbnails?: string;
        };
        nb_streams?: string;
        nb_programs?: string;
        format_name?: string;
        format_long_name?: string;
        size?: string;
        probe_score?: string;
        TAG?: {
          encoded_by?: string;
          date?: string;
          creation_time?: string;
          time_reference?: string;
          coding_history?: string;
        };
      };
    };
    transcription?: {
      time_begin?: number;
      time_end?: number;
      transcription?: string;
      language?: string;
      probability?: number;
      speaker?: string;
      channel?: string;
    }[];
  };
}

export type RecognizeAudioTextAudioTranscriptionPostError = HTTPValidationError;

export interface RecognizeAudioTextAudioTranscriptionPostParams {
  /**
   * Model
   * The AI model used for audio trancription
   * @default "large-v2"
   */
  model?: RecognizeAudioTextAudioTranscriptionPostParamsModel;
}

export interface TranscribeVideoTextVideoTranscriptionPostData {
  /** The result that we want when we use an endpoint. This is the data you will need in 99/100 of cases. */
  prediction?: {
    time_begin?: number;
    time_end?: number;
    transcription?: string;
    language?: string;
    probability?: number;
    speaker?: string;
    channel?: string;
  }[];
  /** The raw result from audio processing, with extra data. */
  prediction_raw?: {
    metadata?: {
      total_speech_duration?: number;
      total_speech_duration_channel_0?: number;
      audio_conversion_time?: number;
      vad_time?: number;
      inference_time?: number;
      diarization_time?: number;
      total_transcription_time?: number;
      original_file_type?: string;
      original_nb_channels?: number;
      original_sample_rate?: number;
      original_sample_width?: number;
      original_nb_silent_channels?: number;
      original_nb_similar_channels?: number;
      original_mediainfo?: {
        index?: string;
        codec_name?: string;
        codec_long_name?: string;
        profile?: string;
        codec_type?: string;
        codec_time_base?: string;
        codec_tag_string?: string;
        codec_tag?: string;
        sample_fmt?: string;
        sample_rate?: string;
        channels?: string;
        channel_layout?: string;
        bits_per_sample?: string;
        id?: string;
        r_frame_rate?: string;
        avg_frame_rate?: string;
        time_base?: string;
        start_pts?: string;
        start_time?: string;
        duration_ts?: string;
        duration?: string;
        bit_rate?: string;
        max_bit_rate?: string;
        bits_per_raw_sample?: string;
        nb_frames?: string;
        nb_read_frames?: string;
        nb_read_packets?: string;
        DISPOSITION?: {
          default?: string;
          dub?: string;
          original?: string;
          comment?: string;
          lyrics?: string;
          karaoke?: string;
          forced?: string;
          hearing_impaired?: string;
          visual_impaired?: string;
          clean_effects?: string;
          attached_pic?: string;
          timed_thumbnails?: string;
        };
        nb_streams?: string;
        nb_programs?: string;
        format_name?: string;
        format_long_name?: string;
        size?: string;
        probe_score?: string;
        TAG?: {
          encoded_by?: string;
          date?: string;
          creation_time?: string;
          time_reference?: string;
          coding_history?: string;
        };
      };
    };
    transcription?: {
      time_begin?: number;
      time_end?: number;
      transcription?: string;
      language?: string;
      probability?: number;
      speaker?: string;
      channel?: string;
    }[];
  };
}

export type TranscribeVideoTextVideoTranscriptionPostError = HTTPValidationError;

export interface TranscribeVideoTextVideoTranscriptionPostParams {
  /**
   * Model
   * The AI model used for audio trancription
   * @default "large-v2"
   */
  model?: TranscribeVideoTextVideoTranscriptionPostParamsModel;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: any[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/**
 * Language
 * If language_behaviour is set to manual, define the language to use for the transcription
 * @example "english"
 */
export enum BodyRecognizeAudioTextAudioTranscriptionPostLanguage {
  Afrikaans = "afrikaans",
  Albanian = "albanian",
  Amharic = "amharic",
  Arabic = "arabic",
  Armenian = "armenian",
  Assamese = "assamese",
  Azerbaijani = "azerbaijani",
  Bashkir = "bashkir",
  Basque = "basque",
  Belarusian = "belarusian",
  Bengali = "bengali",
  Bosnian = "bosnian",
  Breton = "breton",
  Bulgarian = "bulgarian",
  Catalan = "catalan",
  Chinese = "chinese",
  Croatian = "croatian",
  Czech = "czech",
  Danish = "danish",
  Dutch = "dutch",
  English = "english",
  Estonian = "estonian",
  Faroese = "faroese",
  Finnish = "finnish",
  French = "french",
  Galician = "galician",
  Georgian = "georgian",
  German = "german",
  Greek = "greek",
  Gujarati = "gujarati",
  HaitianCreole = "haitian creole",
  Hausa = "hausa",
  Hawaiian = "hawaiian",
  Hebrew = "hebrew",
  Hindi = "hindi",
  Hungarian = "hungarian",
  Icelandic = "icelandic",
  Indonesian = "indonesian",
  Italian = "italian",
  Japanese = "japanese",
  Javanese = "javanese",
  Kannada = "kannada",
  Kazakh = "kazakh",
  Khmer = "khmer",
  Korean = "korean",
  Lao = "lao",
  Latin = "latin",
  Latvian = "latvian",
  Lingala = "lingala",
  Lithuanian = "lithuanian",
  Luxembourgish = "luxembourgish",
  Macedonian = "macedonian",
  Malagasy = "malagasy",
  Malay = "malay",
  Malayalam = "malayalam",
  Maltese = "maltese",
  Maori = "maori",
  Marathi = "marathi",
  Mongolian = "mongolian",
  Myanmar = "myanmar",
  Nepali = "nepali",
  Norwegian = "norwegian",
  Nynorsk = "nynorsk",
  Occitan = "occitan",
  Pashto = "pashto",
  Persian = "persian",
  Polish = "polish",
  Portuguese = "portuguese",
  Punjabi = "punjabi",
  Romanian = "romanian",
  Russian = "russian",
  Sanskrit = "sanskrit",
  Serbian = "serbian",
  Shona = "shona",
  Sindhi = "sindhi",
  Sinhala = "sinhala",
  Slovak = "slovak",
  Slovenian = "slovenian",
  Somali = "somali",
  Spanish = "spanish",
  Sundanese = "sundanese",
  Swahili = "swahili",
  Swedish = "swedish",
  Tagalog = "tagalog",
  Tajik = "tajik",
  Tamil = "tamil",
  Tatar = "tatar",
  Telugu = "telugu",
  Thai = "thai",
  Tibetan = "tibetan",
  Turkish = "turkish",
  Turkmen = "turkmen",
  Ukrainian = "ukrainian",
  Urdu = "urdu",
  Uzbek = "uzbek",
  Vietnamese = "vietnamese",
  Welsh = "welsh",
  Wolof = "wolof",
  Yiddish = "yiddish",
  Yoruba = "yoruba",
}

/**
 * Language behaviour
 * Define how the speaker's language will be detected
 * @default "automatic single language"
 * @example "automatic single language"
 */
export enum BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour {
  Manual = "manual",
  AutomaticSingleLanguage = "automatic single language",
  AutomaticMultipleLanguages = "automatic multiple languages",
}

/**
 * Output format
 * Define the output format, allowing to have         Plain Text, Text, JSON, STR, VTT         (subtitle file format for video content)
 * @default "json"
 * @example "json"
 */
export enum BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat {
  Json = "json",
  Srt = "srt",
  Vtt = "vtt",
  Txt = "txt",
  Plain = "plain",
}

/**
 * Target translation language
 * If toogle_direct_translate is set to true, define the language to use for the translation of the transcription
 * @example "english"
 */
export enum BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage {
  Afrikaans = "afrikaans",
  Albanian = "albanian",
  Amharic = "amharic",
  Arabic = "arabic",
  Armenian = "armenian",
  Assamese = "assamese",
  Azerbaijani = "azerbaijani",
  Bashkir = "bashkir",
  Basque = "basque",
  Belarusian = "belarusian",
  Bengali = "bengali",
  Bosnian = "bosnian",
  Breton = "breton",
  Bulgarian = "bulgarian",
  Catalan = "catalan",
  Chinese = "chinese",
  Croatian = "croatian",
  Czech = "czech",
  Danish = "danish",
  Dutch = "dutch",
  English = "english",
  Estonian = "estonian",
  Faroese = "faroese",
  Finnish = "finnish",
  French = "french",
  Galician = "galician",
  Georgian = "georgian",
  German = "german",
  Greek = "greek",
  Gujarati = "gujarati",
  HaitianCreole = "haitian creole",
  Hausa = "hausa",
  Hawaiian = "hawaiian",
  Hebrew = "hebrew",
  Hindi = "hindi",
  Hungarian = "hungarian",
  Icelandic = "icelandic",
  Indonesian = "indonesian",
  Italian = "italian",
  Japanese = "japanese",
  Javanese = "javanese",
  Kannada = "kannada",
  Kazakh = "kazakh",
  Khmer = "khmer",
  Korean = "korean",
  Lao = "lao",
  Latin = "latin",
  Latvian = "latvian",
  Lingala = "lingala",
  Lithuanian = "lithuanian",
  Luxembourgish = "luxembourgish",
  Macedonian = "macedonian",
  Malagasy = "malagasy",
  Malay = "malay",
  Malayalam = "malayalam",
  Maltese = "maltese",
  Maori = "maori",
  Marathi = "marathi",
  Mongolian = "mongolian",
  Myanmar = "myanmar",
  Nepali = "nepali",
  Norwegian = "norwegian",
  Nynorsk = "nynorsk",
  Occitan = "occitan",
  Pashto = "pashto",
  Persian = "persian",
  Polish = "polish",
  Portuguese = "portuguese",
  Punjabi = "punjabi",
  Romanian = "romanian",
  Russian = "russian",
  Sanskrit = "sanskrit",
  Serbian = "serbian",
  Shona = "shona",
  Sindhi = "sindhi",
  Sinhala = "sinhala",
  Slovak = "slovak",
  Slovenian = "slovenian",
  Somali = "somali",
  Spanish = "spanish",
  Sundanese = "sundanese",
  Swahili = "swahili",
  Swedish = "swedish",
  Tagalog = "tagalog",
  Tajik = "tajik",
  Tamil = "tamil",
  Tatar = "tatar",
  Telugu = "telugu",
  Thai = "thai",
  Tibetan = "tibetan",
  Turkish = "turkish",
  Turkmen = "turkmen",
  Ukrainian = "ukrainian",
  Urdu = "urdu",
  Uzbek = "uzbek",
  Vietnamese = "vietnamese",
  Welsh = "welsh",
  Wolof = "wolof",
  Yiddish = "yiddish",
  Yoruba = "yoruba",
}

/**
 * Language
 * If language_behaviour is set to manual, define the language to use for the transcription
 * @example "english"
 */
export enum BodyTranscribeVideoTextVideoTranscriptionPostLanguage {
  Afrikaans = "afrikaans",
  Albanian = "albanian",
  Amharic = "amharic",
  Arabic = "arabic",
  Armenian = "armenian",
  Assamese = "assamese",
  Azerbaijani = "azerbaijani",
  Bashkir = "bashkir",
  Basque = "basque",
  Belarusian = "belarusian",
  Bengali = "bengali",
  Bosnian = "bosnian",
  Breton = "breton",
  Bulgarian = "bulgarian",
  Catalan = "catalan",
  Chinese = "chinese",
  Croatian = "croatian",
  Czech = "czech",
  Danish = "danish",
  Dutch = "dutch",
  English = "english",
  Estonian = "estonian",
  Faroese = "faroese",
  Finnish = "finnish",
  French = "french",
  Galician = "galician",
  Georgian = "georgian",
  German = "german",
  Greek = "greek",
  Gujarati = "gujarati",
  HaitianCreole = "haitian creole",
  Hausa = "hausa",
  Hawaiian = "hawaiian",
  Hebrew = "hebrew",
  Hindi = "hindi",
  Hungarian = "hungarian",
  Icelandic = "icelandic",
  Indonesian = "indonesian",
  Italian = "italian",
  Japanese = "japanese",
  Javanese = "javanese",
  Kannada = "kannada",
  Kazakh = "kazakh",
  Khmer = "khmer",
  Korean = "korean",
  Lao = "lao",
  Latin = "latin",
  Latvian = "latvian",
  Lingala = "lingala",
  Lithuanian = "lithuanian",
  Luxembourgish = "luxembourgish",
  Macedonian = "macedonian",
  Malagasy = "malagasy",
  Malay = "malay",
  Malayalam = "malayalam",
  Maltese = "maltese",
  Maori = "maori",
  Marathi = "marathi",
  Mongolian = "mongolian",
  Myanmar = "myanmar",
  Nepali = "nepali",
  Norwegian = "norwegian",
  Nynorsk = "nynorsk",
  Occitan = "occitan",
  Pashto = "pashto",
  Persian = "persian",
  Polish = "polish",
  Portuguese = "portuguese",
  Punjabi = "punjabi",
  Romanian = "romanian",
  Russian = "russian",
  Sanskrit = "sanskrit",
  Serbian = "serbian",
  Shona = "shona",
  Sindhi = "sindhi",
  Sinhala = "sinhala",
  Slovak = "slovak",
  Slovenian = "slovenian",
  Somali = "somali",
  Spanish = "spanish",
  Sundanese = "sundanese",
  Swahili = "swahili",
  Swedish = "swedish",
  Tagalog = "tagalog",
  Tajik = "tajik",
  Tamil = "tamil",
  Tatar = "tatar",
  Telugu = "telugu",
  Thai = "thai",
  Tibetan = "tibetan",
  Turkish = "turkish",
  Turkmen = "turkmen",
  Ukrainian = "ukrainian",
  Urdu = "urdu",
  Uzbek = "uzbek",
  Vietnamese = "vietnamese",
  Welsh = "welsh",
  Wolof = "wolof",
  Yiddish = "yiddish",
  Yoruba = "yoruba",
}

/**
 * Language behaviour
 * Define how the speaker's language will be detected
 * @default "automatic single language"
 * @example "automatic single language"
 */
export enum BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviour {
  Manual = "manual",
  AutomaticSingleLanguage = "automatic single language",
  AutomaticMultipleLanguages = "automatic multiple languages",
}

/**
 * Output format
 * Define the output format, allowing to have         Plain Text, Text, JSON, STR, VTT         (subtitle file format for video content)
 * @default "json"
 * @example "json"
 */
export enum BodyTranscribeVideoTextVideoTranscriptionPostOutputFormat {
  Json = "json",
  Srt = "srt",
  Vtt = "vtt",
  Txt = "txt",
  Plain = "plain",
}

/**
 * Target translation language
 * If toogle_direct_translate is set to true, define the language to use for the translation of the transcription
 * @example "english"
 */
export enum BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguage {
  Afrikaans = "afrikaans",
  Albanian = "albanian",
  Amharic = "amharic",
  Arabic = "arabic",
  Armenian = "armenian",
  Assamese = "assamese",
  Azerbaijani = "azerbaijani",
  Bashkir = "bashkir",
  Basque = "basque",
  Belarusian = "belarusian",
  Bengali = "bengali",
  Bosnian = "bosnian",
  Breton = "breton",
  Bulgarian = "bulgarian",
  Catalan = "catalan",
  Chinese = "chinese",
  Croatian = "croatian",
  Czech = "czech",
  Danish = "danish",
  Dutch = "dutch",
  English = "english",
  Estonian = "estonian",
  Faroese = "faroese",
  Finnish = "finnish",
  French = "french",
  Galician = "galician",
  Georgian = "georgian",
  German = "german",
  Greek = "greek",
  Gujarati = "gujarati",
  HaitianCreole = "haitian creole",
  Hausa = "hausa",
  Hawaiian = "hawaiian",
  Hebrew = "hebrew",
  Hindi = "hindi",
  Hungarian = "hungarian",
  Icelandic = "icelandic",
  Indonesian = "indonesian",
  Italian = "italian",
  Japanese = "japanese",
  Javanese = "javanese",
  Kannada = "kannada",
  Kazakh = "kazakh",
  Khmer = "khmer",
  Korean = "korean",
  Lao = "lao",
  Latin = "latin",
  Latvian = "latvian",
  Lingala = "lingala",
  Lithuanian = "lithuanian",
  Luxembourgish = "luxembourgish",
  Macedonian = "macedonian",
  Malagasy = "malagasy",
  Malay = "malay",
  Malayalam = "malayalam",
  Maltese = "maltese",
  Maori = "maori",
  Marathi = "marathi",
  Mongolian = "mongolian",
  Myanmar = "myanmar",
  Nepali = "nepali",
  Norwegian = "norwegian",
  Nynorsk = "nynorsk",
  Occitan = "occitan",
  Pashto = "pashto",
  Persian = "persian",
  Polish = "polish",
  Portuguese = "portuguese",
  Punjabi = "punjabi",
  Romanian = "romanian",
  Russian = "russian",
  Sanskrit = "sanskrit",
  Serbian = "serbian",
  Shona = "shona",
  Sindhi = "sindhi",
  Sinhala = "sinhala",
  Slovak = "slovak",
  Slovenian = "slovenian",
  Somali = "somali",
  Spanish = "spanish",
  Sundanese = "sundanese",
  Swahili = "swahili",
  Swedish = "swedish",
  Tagalog = "tagalog",
  Tajik = "tajik",
  Tamil = "tamil",
  Tatar = "tatar",
  Telugu = "telugu",
  Thai = "thai",
  Tibetan = "tibetan",
  Turkish = "turkish",
  Turkmen = "turkmen",
  Ukrainian = "ukrainian",
  Urdu = "urdu",
  Uzbek = "uzbek",
  Vietnamese = "vietnamese",
  Welsh = "welsh",
  Wolof = "wolof",
  Yiddish = "yiddish",
  Yoruba = "yoruba",
}

/**
 * Model
 * The AI model used for audio trancription
 * @default "large-v2"
 */
export enum RecognizeAudioTextAudioTranscriptionPostParamsModel {
  LargeV2 = "large-v2",
}

/**
 * Model
 * The AI model used for audio trancription
 * @default "large-v2"
 */
export enum TranscribeVideoTextVideoTranscriptionPostParamsModel {
  LargeV2 = "large-v2",
}
