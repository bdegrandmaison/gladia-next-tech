import { Dispatch, SetStateAction } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

type SwitchInputProps = {
  handleChange: Dispatch<SetStateAction<boolean>>;
  explanation: string;
  label: string;
  name: string;
  value: boolean;
};

export const SwitchInput = ({
  explanation,
  handleChange,
  label,
  name,
  value,
}: SwitchInputProps) => (
  <FormGroup row>
    <Label for={name} sm={2}>
      {label}
    </Label>
    <Col
      sm={{
        size: 10,
      }}
    >
      <FormGroup switch>
        <Input
          id={name}
          name={name}
          type="switch"
          role="switch"
          checked={value}
          onChange={(e) => {
            handleChange(e.target.checked);
          }}
        />{' '}
        <Label check>If switched on, {explanation}</Label>
      </FormGroup>
    </Col>
  </FormGroup>
);
