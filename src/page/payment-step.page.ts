import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payByBankWire(): Promise<void> {
    await this.element.click();
  }
}
