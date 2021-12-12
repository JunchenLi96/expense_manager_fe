import {device} from 'detox';
import adapter from 'detox/runners/jest/adapter';

// eslint-disable-next-line no-undef
beforeAll(async () => {
  await device.launchApp({
    launchArgs: {detoxPrintBusyIdleResources: 'YES'},
  });
});

// eslint-disable-next-line no-undef
beforeEach(async () => {
  await device.reloadReactNative();
});

// eslint-disable-next-line no-undef
afterAll(async () => {
  await adapter.afterAll();
});
