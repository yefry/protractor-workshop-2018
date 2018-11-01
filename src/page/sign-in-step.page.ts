import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailElement: ElementFinder;
  private passwordElement: ElementFinder;
  private submitLoginElement: ElementFinder;

  constructor () {
    this.emailElement = $('#email');
    this.passwordElement = $('#passwd');
    this.submitLoginElement = $('#SubmitLogin > span');
  }

  public async signIn(email: string, password: string): Promise<void> {
    await this.emailElement.sendKeys(email);
    await this.passwordElement.sendKeys(password);
    await this.submitLoginElement.click();
  }
}
