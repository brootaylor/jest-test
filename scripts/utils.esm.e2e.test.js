// Using the ES Modules import method...

import puppeteer from 'puppeteer';

describe('End-to-end tests for brootaylor.com', () => {
  test("Open home page, navigate to links page, take screenshot", async (done) => {
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80
      });
      const page = await browser.newPage();
      await page.goto('https://brootaylor.com/');
      //await page.type('input#username', 'testyTest');
      await page.click('#footer small a[href="/links/"]');
      await page.screenshot({path: 'puppeteer-links-page.png'});
      await browser.close();
      done();
  });

  test("Open home page, navigate to links page, back to homepage, check title string value, take screenshot", async (done) => {
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80
      });
      const page = await browser.newPage();
      await page.goto('https://brootaylor.com/');
      await page.click('#footer small a[href="/links/"]');
      await page.click('#mast .logo');
      await expect(page.title()).resolves.toMatch('Bruce Taylor | Front End Web Designer & Developer');
      await page.screenshot({path: 'puppeteer-home-page01.png'});
      await browser.close();
      done();
  });
});
