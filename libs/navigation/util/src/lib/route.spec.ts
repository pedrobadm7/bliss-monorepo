// route.test.ts
import { route } from './route';

describe('route', () => {
  it('should return the correct path for home', () => {
    expect(route.home()).toEqual('/');
  });

  it('should return the correct path for about', () => {
    expect(route.about()).toEqual('/about');
  });

  it('should return the correct path for signIn', () => {
    expect(route.signIn()).toEqual('/auth/signin');
  });

  it('should return the correct path for signUp', () => {
    expect(route.signUp()).toEqual('/auth/signup');
  });

  it('should return the correct path for userDetail', () => {
    const userName = 'testuser';
    expect(route.userDetail(userName)).toEqual(`/${userName}`);
  });
});
