import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.element.click();
  }
}
