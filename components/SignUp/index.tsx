import { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupText,
  FormText,
  FormFeedback,
} from 'reactstrap';
import { validateEmailFormat } from '../../utils/helpers';
import { useCheckUser } from '../../hooks/useCheckUser';
import { useCreateUser } from '../../hooks/useCreateUser';
import { useRouter } from 'next/router';

const formStyle = {
  width: '90em',
  margin: '0 auto',
  padding: '2em',
  borderRadius: '2em',
};

const eyeButtonStyle = {
  backgroundColor: 'darkgray',
};

const creationErrorStyle = {
  marginTop: '0.25rem',
  fontSize: '.875em',
  color: '#dc3545',
};

export const SignupForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const [creationError, setcreationError] = useState(false);
  const isFormDisabled = !username || !password || !email || usernameError || emailError;

  const checkUserMutation = useCheckUser(username);
  const createUserMutation = useCreateUser({ username, password, email });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserMutation.mutate(null, {
      onSuccess: () => {
        router.push('/');
      },
      onError: () => {
        setcreationError(true);
      },
    });
  };

  const handleCheckUsernameAvailability = (e) => {
    e.preventDefault();
    checkUserMutation.mutate(null, {
      onSuccess: () => {
        setUsernameError(false);
      },
      onError: () => {
        if (!usernameError) {
          setUsernameError(true);
        }
      },
    });
  };

  const handleCheckEmailFormat = (e) => {
    e.preventDefault();
    setEmailError(email ? !validateEmailFormat(email) : true);
  };

  return (
    <Form onSubmit={handleSubmit} style={formStyle}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onBlur={handleCheckUsernameAvailability}
          invalid={usernameError}
        />
        {usernameError && (
          <FormFeedback>This username is taken already, try another one 😃 </FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <InputGroup>
          <Input
            type={passwordIsHidden ? 'password' : 'text'}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputGroupText
            onClick={() => {
              setPasswordIsHidden(!passwordIsHidden);
            }}
            style={passwordIsHidden ? {} : eyeButtonStyle}
          >
            👁️‍🗨️
          </InputGroupText>
        </InputGroup>
        <FormText>Click on the eye on the left to check your password</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleCheckEmailFormat}
          invalid={emailError}
          valid={!!email && !emailError}
        />
        {emailError && <FormFeedback>Please enter a valid email address</FormFeedback>}
      </FormGroup>
      <Button
        color="primary"
        type="submit"
        disabled={isFormDisabled || createUserMutation.isLoading}
        title={isFormDisabled ? 'Please fill in the form above' : ''}
      >
        {createUserMutation.isLoading ? 'Loading' : 'Sign up'}
      </Button>
      {creationError && (
        <div>
          <span style={creationErrorStyle}>
            There was an error creating your user profile, please try again later
          </span>
        </div>
      )}
    </Form>
  );
};
