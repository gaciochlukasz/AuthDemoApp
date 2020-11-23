import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(url: string): Promise<unknown> {
    return browser.get(`${browser.baseUrl}${url}`) as Promise<unknown>;
  }

  getTitleText(cssName: string): Promise<string> {
    return element(by.className(cssName)).getText() as Promise<string>;
  }

  getFormField(formField: string): WebElementPromise {
    return element(by.css(`input[formControlName=${formField}]`)).getWebElement() as WebElementPromise;
  }

  getButton(buttonCSSName: string): WebElementPromise {
    return element(by.className(buttonCSSName)).getWebElement() as WebElementPromise;
  }
}
