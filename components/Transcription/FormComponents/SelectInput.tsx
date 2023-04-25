import { Dispatch, SetStateAction } from 'react';
import { FormGroup, Label, Col, Input, FormText } from 'reactstrap';

type SelectInputProps<T extends string> = {
  data: Array<{ label: string; value: T }>;
  handleChange: Dispatch<SetStateAction<T>>;
  label: string;
  name: string;
  value: T;
  formText: string;
  disabled?: boolean;
};

export const SelectInput = <T extends string>({
  data,
  disabled,
  handleChange,
  label,
  name,
  value,
  formText,
}: SelectInputProps<T>) => (
  <FormGroup row>
    <Label for={name} sm={2}>
      {label}
    </Label>
    <Col sm={10}>
      <Input
        id={name}
        disabled={!!disabled}
        name={name}
        type="select"
        onChange={(e) => {
          handleChange(e.target.value as T);
        }}
        value={value}
      >
        <option value="" disabled selected>
          Optional
        </option>
        {data.map(({ label: mappedLabel, value: mappedValue }) => (
          <option value={mappedValue} key={mappedValue}>
            {mappedLabel}
          </option>
        ))}
      </Input>
      <FormText>{formText}</FormText>
    </Col>
  </FormGroup>
);
