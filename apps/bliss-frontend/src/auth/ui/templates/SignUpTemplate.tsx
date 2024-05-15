import { route } from '@bliss/navigation/util';
import { TopNavigation } from '../../../navigation/ui';
import { Heading, Link, MainSection } from '../../../ui';

import type { SignUpFormProps } from '../organisms/';
import { SignUpForm } from '../organisms/';

export type SignUpTemplateProps = {
  isLoading?: boolean;
  error?: Error | null;
  onSubmit: SignUpFormProps['onSubmit'];
};

export function SignUpTemplate({
  isLoading,
  error,
  onSubmit,
}: SignUpTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>Sign Up</Heading>

        <SignUpForm
          isLoading={isLoading}
          errorMessage={error && error.message}
          onSubmit={onSubmit}
          className="mt3"
        >
          <div className="lh-copy">
            or{' '}
            <Link className="f5 dark-green" to={route.signIn()}>
              Sign In
            </Link>
          </div>
        </SignUpForm>
      </MainSection>
    </>
  );
}
