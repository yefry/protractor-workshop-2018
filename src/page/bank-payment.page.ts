import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private orderIsCompleteTitle: ElementFinder;

  constructor () {
    this.orderIsCompleteTitle =
        $('#center_column > div > p > strong');
  }

  public orderIsCompleteText(): promise.Promise<string> {
    return this.orderIsCompleteTitle.getText();
  }
}
