import { Dispatch, SetStateAction } from 'react';
import { FormGroup, Label, Col, Input, FormText } from 'reactstrap';

type TextOrUrlInputProps = {
  handleChange: Dispatch<SetStateAction<string>>;
  label: string;
  name: string;
  type: 'url' | 'text';
  placeholder: string;
  value: string;
  formText?: string;
};

export const TextOrUrlInput = ({
  handleChange,
  label,
  name,
  placeholder,
  value,
  type,
  formText,
}: TextOrUrlInputProps) => (
  <FormGroup row>
    <Label for={name} sm={2}>
      {label}
    </Label>
    <Col sm={10}>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {!!formText && <FormText>{formText}</FormText>}
    </Col>
  </FormGroup>
);
