import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@bliss/auth/contex-ui';
import { SignUpTemplate } from '@bliss/auth/ui';
import { route } from '@bliss/navigation/util';

const SIGNUP_MUTATION = gql`
  mutation SignUp(
    $email: String!
    $name: String!
    $password: String!
    $userName: String!
  ) {
    signup(
      email: $email
      name: $name
      password: $password
      userName: $userName
    ) {
      user {
        id
        name
        userName
        profileImageUrl
      }
      token
    }
  }
`;

export type SignUpPageProps = Record<string, never>;

export function SignUpPage(props: SignUpPageProps) {
  const auth = useAuth();
  const navigate = useNavigate();
  const [signupRequest, signupRequestState] = useMutation(SIGNUP_MUTATION, {
    onCompleted: ({ signup: { user, token } }) => {
      auth.signin({ token, user });
      navigate(route.home());
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onError: () => {},
  });

  const handleSignUpFormSubmit = useCallback(
    (variables: any) => {
      signupRequest({ variables });
    },
    [signupRequest],
  );

  return (
    <SignUpTemplate
      isLoading={signupRequestState.loading}
      error={signupRequestState.error}
      onSubmit={handleSignUpFormSubmit}
    />
  );
}
