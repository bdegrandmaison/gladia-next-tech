import { Dispatch, SetStateAction } from 'react';
import { FormGroup, Label, Col, Input, FormText } from 'reactstrap';

type FileInputProps = {
  accept: string;
  label: string;
  name: string;
  handleChange: Dispatch<SetStateAction<File>>;
};

export const FileInput = ({ accept, label, name, handleChange }: FileInputProps) => (
  <FormGroup row>
    <Label for={name} sm={2}>
      {label}
    </Label>
    <Col sm={10}>
      <Input
        id={name}
        name={name}
        type="file"
        accept={accept}
        onChange={(e) => handleChange(e.target.files ? e.target.files[0] : undefined)}
      />
      <FormText>Please upload your file here</FormText>
    </Col>
  </FormGroup>
);
