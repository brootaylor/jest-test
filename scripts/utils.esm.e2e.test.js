// Using the ES Modules import method...
import puppeteer from 'puppeteer';

test("End-to-end test, brootaylor home navigate to links page", async (done) => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 80
    });
    const page = await browser.newPage();
    await page.goto(
      'https://brootaylor.com/'
    );
    //await page.type('input#username', 'testyTest');
    await page.click('#footer small a[href="/links/"]');
    await page.screenshot({path: 'puppeteer-links-page.png'});
    await browser.close();
    done();
});

test("End-to-end test, brootaylor home to links and back to home", async (done) => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80
  });
  const page = await browser.newPage();
  await page.goto(
    'https://brootaylor.com/'
  );
  await page.click('#footer small a[href="/links/"]');
  await page.click('#mast .logo');
  await page.screenshot({path: 'puppeteer-home-page.png'});
  await browser.close();
  done();
});
