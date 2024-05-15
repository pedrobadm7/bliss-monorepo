import { Heading, MainSection } from '@bliss/ui';
import type { ReactNode } from 'react';
import { TopNavigation } from '../organisms';

export type PlaceholderProps = {
  title: string;
  children: ReactNode;
};

export function Placeholder({ title, children }: PlaceholderProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>{title}</Heading>

        {typeof children === 'undefined' ? (
          <p>This page is empty for now...</p>
        ) : (
          children
        )}
      </MainSection>
    </>
  );
}
