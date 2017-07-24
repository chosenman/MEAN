import { ANotesPage } from './app.po';

describe('a-notes App', () => {
  let page: ANotesPage;

  beforeEach(() => {
    page = new ANotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
