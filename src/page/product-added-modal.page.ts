import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.element), 3000);
    await this.element.click();
  }
}
