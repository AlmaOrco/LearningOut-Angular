import { LearningoutFrontPage } from './app.po';

describe('learningout-front App', () => {
  let page: LearningoutFrontPage;

  beforeEach(() => {
    page = new LearningoutFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
