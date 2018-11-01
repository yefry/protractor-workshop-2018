import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('.cart_navigation span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.element.click();
  }
}
