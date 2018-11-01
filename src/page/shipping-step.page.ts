import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptTermsCheckbox: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.acceptTermsCheckbox = $('#cgv');
    this.proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async acceptTermsAndProceedToCheckout(): Promise<void> {
    await this.acceptTermsCheckbox.click();
    await this.proceedToCheckoutButton.click();
  }
}
