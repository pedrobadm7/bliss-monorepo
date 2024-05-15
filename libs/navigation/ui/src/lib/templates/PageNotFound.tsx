import { route } from '@bliss/navigation/util';
import { Link } from '@bliss/ui';

import { Placeholder } from './Placeholder';

export type PageNotFoundProps = Record<string, never>;

export function PageNotFound() {
  return (
    <Placeholder title="Error 404">
      <p>
        Page not found, please return to <Link to={route.home()}>Home</Link>.
      </p>
    </Placeholder>
  );
}
