// libs/navigation/util/src/lib/route.spec.ts

import { route } from './route';

describe('Route configurations', () => {
  it('should return the correct URL for the home route', () => {
    const expected = '/';
    const result = route.home();
    expect(result).toEqual(expected);
  });

  it('should return the correct URL for the about route', () => {
    const expected = '/about';
    const result = route.about();
    expect(result).toEqual(expected);
  });

  it('should return the correct URL for the signIn route', () => {
    const expected = '/auth/signin';
    const result = route.signIn();
    expect(result).toEqual(expected);
  });

  it('should return the correct URL for the signUp route', () => {
    const expected = '/auth/signup';
    const result = route.signUp();
    expect(result).toEqual(expected);
  });

  it('should return the correct URL for the userDetail route', () => {
    const username = 'johnDoe';
    const expected = `/${username}`;
    const result = route.userDetail(username);
    expect(result).toEqual(expected);
  });
});
