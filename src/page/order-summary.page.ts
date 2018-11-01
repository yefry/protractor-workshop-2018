import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmMyOrderButton: ElementFinder;

  constructor () {
    this.confirmMyOrderButton =
        $('#cart_navigation > button > span');
  }

  public async confirmMyOrder(): Promise<void> {
    await this.confirmMyOrderButton.click();
  }
}
