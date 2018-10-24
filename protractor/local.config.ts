import { Config } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub'
};
