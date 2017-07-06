import { POCTemplatePage } from './app.po';

describe('poc-template App', () => {
  let page: POCTemplatePage;

  beforeEach(() => {
    page = new POCTemplatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
