import { ChangeEvent, useState } from 'react';
import { FormGroup, Col, Row, Input, Label, Form } from 'reactstrap';
import { TranscriptionForm } from './TranscriptionForm';
import { UserChoice } from '../../interfaces';

const choiceFormstyle = {
  display: 'block',
  width: '90em',
  margin: '2em auto',
  padding: '2em',
  borderRadius: '2em',
};

export const Choice = () => {
  const [selectedOption, setSelectedOption] = useState<UserChoice>(UserChoice.Audio);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as UserChoice);
  };

  return (
    <>
      <Form style={choiceFormstyle} className="shadow">
        <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-2">Type of file to transcribe</legend>
          <Col sm={10}>
            <Row>
              <Col sm={4}>
                <FormGroup check>
                  <Input
                    id="audio-choice"
                    name="audio-choice"
                    type="radio"
                    value={UserChoice.Audio}
                    checked={selectedOption === UserChoice.Audio}
                    onChange={handleOptionChange}
                  />{' '}
                  <Label for="audio-choice" check>
                    Audio
                  </Label>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup check>
                  <Input
                    id="video-choice"
                    name="video-choice"
                    type="radio"
                    value={UserChoice.Video}
                    checked={selectedOption === UserChoice.Video}
                    onChange={handleOptionChange}
                  />{' '}
                  <Label for="video-choice" check>
                    Video
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </FormGroup>
      </Form>
      <TranscriptionForm userChoice={selectedOption} />
    </>
  );
};
