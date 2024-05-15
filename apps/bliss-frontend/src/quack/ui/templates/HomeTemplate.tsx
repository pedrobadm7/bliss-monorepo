import { gql } from '@apollo/client';

import { Heading, MainSection, ReloadButton } from '@bliss/ui';
import { TopNavigation } from '../../../navigation/ui';

import type { QuackFormProps } from '../molecules';
import { QuackForm } from '../molecules/';
import type { QuackListProps } from '../organisms/';
import { QuackList } from '../organisms/';

export type HomeTemplateProps = {
  quacks: QuackListProps['quacks'];
  loading?: boolean;
  error?: Error | null;
  refetchQuacks: () => void;
  quackFormState: QuackFormProps;
  currentUser: { id: number } | null;
};

export function HomeTemplate({
  quacks,
  loading,
  error,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  refetchQuacks = () => {},
  quackFormState,
  currentUser,
}: HomeTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>Home</Heading>

        {currentUser && <QuackForm {...quackFormState} />}

        {quacks && (
          <ReloadButton
            isLoading={loading}
            onClick={() => refetchQuacks()}
            className="fr"
          />
        )}

        <QuackList
          quacks={quacks}
          isLoading={loading}
          error={error}
          refetch={refetchQuacks}
        />
      </MainSection>
    </>
  );
}
HomeTemplate.fragments = {
  quacks: gql`
    fragment HomeTemplate_quacks on Quack {
      ...QuackList_quacks
    }

    ${QuackList.fragments.quacks}
  `,
};
