import { FormGroup, Button } from 'reactstrap';
import { handleDownload } from '../../../utils/handleDownload';
import { CSSProperties } from 'react';
import {
  BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat,
  RecognizeAudioTextAudioTranscriptionPostData,
  TranscribeVideoTextVideoTranscriptionPostData,
} from '../../../interfaces/gladia/data-contracts';

type DownloadButtonProps = {
  style: CSSProperties;
  data:
    | RecognizeAudioTextAudioTranscriptionPostData
    | TranscribeVideoTextVideoTranscriptionPostData;
  outputType: BodyRecognizeAudioTextAudioTranscriptionPostOutputFormat;
};

export const DownloadButton = ({ style, data, outputType }: DownloadButtonProps) => (
  <FormGroup check row>
    <Button style={style} color="success" onClick={() => handleDownload({ data, outputType })}>
      Download
    </Button>
  </FormGroup>
);
