<<<<<<< HEAD
import { AppPage } from './app.po';

describe('moayad App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
=======
import { AngularCliHerokuBoilerplatePage } from './app.po';

describe('angular-cli-heroku-boilerplate App', () => {
  let page: AngularCliHerokuBoilerplatePage;

  beforeEach(() => {
    page = new AngularCliHerokuBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
>>>>>>> 4268e33e0131d4f2b2013d44c5a00ccda987a421
  });
});
