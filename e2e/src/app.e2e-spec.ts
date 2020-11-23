import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should login', async () => {
    page.navigateTo('');
    await page.getFormField('email').sendKeys('jan.zaremba@gmail.com');
    await page.getFormField('password').sendKeys('1234');
    await page.getButton('welcome-page_welcome-panel_button_login').click();

    expect(page.getTitleText('dashboard-panel_user-data_header')).toEqual('Logged user:');
  });

  it('should redirect to dashboard', async () => {
    page.navigateTo('/login');

    expect(page.getTitleText('dashboard-panel_user-data_header')).toEqual('Logged user:');
  });

  it('should logout', async () => {
    await page.getButton('dashboard-panel_user-data_actions_logout-button').click();

    expect(page.getTitleText('welcome-page_welcome-panel_header')).toEqual('Sign-In');
  });

  it('should register new account', async () => {
    await page.getButton('welcome-page_welcome-panel_button_register').click();
    await page.getFormField('email').sendKeys(`${Math.floor(Math.random() * (10000))}_jan.kowalski@gmail.com`);
    await page.getFormField('firstName').sendKeys('Jan');
    await page.getFormField('lastName').sendKeys('Kowalski');
    await page.getFormField('nick').sendKeys('kowal');
    await page.getFormField('password').sendKeys('1234');
    await page.getButton('welcome-page_welcome-panel_register-button').click();

    expect(page.getTitleText('dashboard-panel_user-data_header')).toEqual('Logged user:');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
