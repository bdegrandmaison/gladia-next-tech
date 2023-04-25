import {
  BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat,
  RecognizeAudioTextAudioTranscriptionPostData,
  TranscribeVideoTextVideoTranscriptionPostData,
} from '../interfaces/gladia/data-contracts';
import { ContentType } from '../interfaces/gladia/http-client';

type handleDownloadProps = {
  data:
    | RecognizeAudioTextAudioTranscriptionPostData
    | TranscribeVideoTextVideoTranscriptionPostData;
  outputType?: BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat;
};

const handleJSONDownload = (data: handleDownloadProps['data']) => {
  const downloadLink = document.createElement('a');
  const file = new Blob([JSON.stringify(data, null, 2)], { type: ContentType.Json });
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = 'transcript.json';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

const handleTextOrPlainDownload = (
  data: handleDownloadProps['data'],
  type:
    | BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Txt
    | BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Plain,
) => {
  const downloadLink = document.createElement('a');
  const file = new Blob(
    [
      JSON.stringify(
        type === BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Txt
          ? data.prediction
          : data,
      ),
    ],
    {
      type: ContentType.Text,
    },
  );
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = 'transcript.txt';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

const handleSrtOrVttDownload = (
  prediction: handleDownloadProps['data']['prediction'] | string,
  type:
    | BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Srt
    | BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Vtt,
) => {
  const downloadLink = document.createElement('a');
  const file = new Blob([prediction as string], {
    type: `text/${
      type === BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Srt ? 'srt' : 'vtt'
    }`,
  });
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = `transcript.${
    type === BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Srt ? 'srt' : 'vtt'
  }`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const handleDownload = async ({ data, outputType }: handleDownloadProps) => {
  switch (outputType) {
    case BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Txt:
      handleTextOrPlainDownload(data, outputType);
      break;
    case BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Plain:
      handleTextOrPlainDownload(data, outputType);
      break;
    case BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Srt:
      handleSrtOrVttDownload(data.prediction, outputType);
      break;
    case BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat.Vtt:
      handleSrtOrVttDownload(data.prediction, outputType);
      break;
    default:
      handleJSONDownload(data);
      break;
  }
};
