import { gql, useMutation, useQuery } from '@apollo/client';
import { useAuth } from '@bliss/auth/contex-ui';
import { HomeTemplate } from '@bliss/quack/ui';
import { useState } from 'react';

export const QUACKS_QUERY = gql`
  query Quacks {
    quacks {
      ...HomeTemplate_quacks
    }
  }

  ${HomeTemplate.fragments.quacks}
`;

export const QUACK_MUTATION = gql`
  mutation Quack($userId: Int!, $text: String!) {
    addQuack(userId: $userId, text: $text) {
      id
    }
  }
`;

export type HomePageProps = Record<string, never>;

export function HomePage() {
  const { user } = useAuth();

  const quacksState = useQuery(QUACKS_QUERY);
  const [quackFormText, setQuackFormText] = useState('');

  const [quackMutationRequest, quackMutationRequestState] = useMutation(
    QUACK_MUTATION,
    {
      onCompleted: () => {
        setQuackFormText('');
        quacksState.refetch();
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onError: () => {},
    },
  );

  const submitQuack = ({ text }: { text: string }) => {
    quackMutationRequest({ variables: { text, userId: user?.id } });
  };

  const quackFormState = {
    error: quackMutationRequestState.error,
    loading: quackMutationRequestState.loading,
    text: quackFormText,
    setText: setQuackFormText,
    onSubmit: submitQuack,
  };

  return (
    <HomeTemplate
      quacks={quacksState.data?.quacks}
      error={quacksState.error}
      loading={quacksState.loading}
      refetchQuacks={() => quacksState.refetch()}
      quackFormState={quackFormState}
      currentUser={user}
    />
  );
}
