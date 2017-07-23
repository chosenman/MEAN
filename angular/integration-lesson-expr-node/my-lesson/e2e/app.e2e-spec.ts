import { MyLessonPage } from './app.po';

describe('my-lesson App', () => {
  let page: MyLessonPage;

  beforeEach(() => {
    page = new MyLessonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
