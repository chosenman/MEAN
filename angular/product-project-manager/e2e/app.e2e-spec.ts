import { ProductProjectManagerPage } from './app.po';

describe('product-project-manager App', () => {
  let page: ProductProjectManagerPage;

  beforeEach(() => {
    page = new ProductProjectManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
