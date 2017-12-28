<<<<<<< HEAD
import { browser, by, element } from 'protractor';

export class AppPage {
=======
import { browser, element, by } from 'protractor';

export class AngularCliHerokuBoilerplatePage {
>>>>>>> 4268e33e0131d4f2b2013d44c5a00ccda987a421
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
