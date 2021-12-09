/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show title', async () => {
    await expect(element(by.text('AuthScreen'))).toBeVisible();
  });
});
