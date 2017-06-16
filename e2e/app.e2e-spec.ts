import { ECommercePortalPage } from './app.po';

describe('ecommerce-portal App', () => {
  let page: ECommercePortalPage;

  beforeEach(() => {
    page = new ECommercePortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
