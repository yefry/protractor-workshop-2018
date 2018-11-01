import { browser } from 'protractor';
import { MenuContentPage,
  AddressStepPage,
  BankPaymentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModalPage,
  ProductListPage,
  ShippingStepPage,
  SignInStepPage,
  SummaryStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.addToCart();
    await productAddedModalPage.proceedToCheckout();
    await summaryStepPage.proceedToCheckout();
    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await addressStepPage.proceedToCheckout();
    await shippingStepPage.acceptTermsAndProceedToCheckout();
    await paymentStepPage.payByBankWire();
    await orderSummaryPage.confirmMyOrder();
    await expect(bankPaymentPage.orderIsCompleteText())
      .toBe('Your order on My Store is complete.');
  });
});
