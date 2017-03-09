import { PremierAngularPage } from './app.po';

describe('premier-angular App', () => {
  let page: PremierAngularPage;

  beforeEach(() => {
    page = new PremierAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
