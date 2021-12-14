import {by, element, expect} from 'detox';

// eslint-disable-next-line no-undef
describe('First Test', () => {
  // eslint-disable-next-line no-undef
  it('should show title', async () => {
    await expect(element(by.text('AuthScreen'))).toBeVisible();
  });
});
