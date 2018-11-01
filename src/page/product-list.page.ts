import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addToCart(): Promise<void> {
    await this.element.click();
  }
}
