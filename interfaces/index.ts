import { IronSession } from 'iron-session';
import { NextApiRequest } from 'next';
import {
  BodyRecognizeAudioTextAudioTranscriptionPost,
  BodyRecognizeAudioTextAudioTranscriptionPostLanguage,
  BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour,
  BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat,
  BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage,
  BodyTranscribeVideoTextVideoTranscriptionPost,
  BodyTranscribeVideoTextVideoTranscriptionPostLanguage,
  BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviour,
  BodyTranscribeVideoTextVideoTranscriptionPostOutputFormat,
  BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguage,
} from './gladia/data-contracts';

export type User = {
  id: string;
  name: string;
  password: string;
  email: string;
  isLoggedIn: boolean;
  hasPaid: boolean;
};

export type UserWithoutPassword = Omit<User, 'password'>;

export type LoginRequest = {
  username: string;
  password: string;
};

export type UserSession = IronSession & { user?: UserWithoutPassword };

export type ReqSession = NextApiRequest & { session?: UserSession };

export type PaymentStatus = {
  hasPaid: boolean;
};

export type PaymentRequest = {
  userId: string;
};

//Gladia types

export type BodyRecognizeAudioTextAudioTranscriptionPostKeys = Exclude<
  keyof BodyRecognizeAudioTextAudioTranscriptionPost,
  'audio' | 'audio_url'
>;

export type BodyRecognizeAudioTextAudioTranscriptionPostArrayKeys =
  BodyRecognizeAudioTextAudioTranscriptionPostKeys[];

export type BodyTranscribeVideoTextVideoTranscriptionPostKeys = Exclude<
  keyof BodyTranscribeVideoTextVideoTranscriptionPost,
  'video' | 'video_url'
>;

export type BodyTranscribeVideoTextVideoTranscriptionPostArrayKeys =
  BodyTranscribeVideoTextVideoTranscriptionPostKeys[];

export enum UserChoice {
  Audio = 'audio-choice',
  Video = 'video-choice',
}

//Enum keys
//Audio
export type BodyRecognizeAudioTextAudioTranscriptionPostLanguageKeys =
  keyof typeof BodyRecognizeAudioTextAudioTranscriptionPostLanguage;

export type BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviourKeys =
  keyof typeof BodyRecognizeAudioTextAudioTranscriptionPostLanguageBehaviour;

export type BodyRecognizeAudioTextAudioTranscriptionPostOutputFormatKeys =
  keyof typeof BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat;

export type BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguageKeys =
  keyof typeof BodyRecognizeAudioTextAudioTranscriptionPostTargetTranslationLanguage;

//Video
export type BodyTranscribeVideoTextVideoTranscriptionPostLanguageKeys =
  keyof typeof BodyTranscribeVideoTextVideoTranscriptionPostLanguage;

export type BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviourKeys =
  keyof typeof BodyTranscribeVideoTextVideoTranscriptionPostLanguageBehaviour;

export type BodyTranscribeVideoTextVideoTranscriptionPostOutputFormatKeys =
  keyof typeof BodyTranscribeVideoTextVideoTranscriptionPostOutputFormat;

export type BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguageKeys =
  keyof typeof BodyTranscribeVideoTextVideoTranscriptionPostTargetTranslationLanguage;
