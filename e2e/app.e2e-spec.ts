import { LoTry6Page } from './app.po';

describe('lo-try6 App', () => {
  let page: LoTry6Page;

  beforeEach(() => {
    page = new LoTry6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
