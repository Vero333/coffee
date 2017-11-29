import { CoffeePage } from './app.po';

describe('coffee App', () => {
  let page: CoffeePage;

  beforeEach(() => {
    page = new CoffeePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
