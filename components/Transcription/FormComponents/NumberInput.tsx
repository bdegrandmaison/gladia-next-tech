import { Dispatch, SetStateAction } from 'react';
import { FormGroup, Label, Col, Input, FormText } from 'reactstrap';

type NumberInputProps = {
  handleChange: Dispatch<SetStateAction<number>>;
  label: string;
  name: string;
  value: number;
};

export const NumberInput = ({ handleChange, label, name, value }: NumberInputProps) => (
  <FormGroup row>
    <Label for={name} sm={2}>
      {label}
    </Label>
    <Col sm={10}>
      <Input
        id={name}
        name={name}
        placeholder="Optional"
        type="number"
        value={value ? value.toString() : ''}
        onChange={(e) => handleChange(parseInt(e.target.value))}
        min={0}
        max={10}
      />
      <FormText>This is guiding the maximum number of speakers (10 at most)</FormText>
    </Col>
  </FormGroup>
);
