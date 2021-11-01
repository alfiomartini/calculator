// https://jestjs.io/docs/puppeteer

/*
 * const puppeteer = require("puppeteer");
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 *
 * The above is not needed, because jest-puppeteer exposes
 * the global objects 'browser' and 'page'
 */

// import { describe, expect, beforeAll, page, it } from "@jest/globals";

/*
 *  I have not used this
 * https://www.npmjs.com/package/jest-environment-puppeteer/v/1.0.0#configure-eslint
 */

describe("Testing Calculator", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:5000");
  });

  it("Check that 5 x 5 = 25", async () => {
    const five = await page.$("#five");
    const mult = await page.$("#mult");
    const equals = await page.$("#equals");
    await five.click();
    await mult.click();
    await five.click();
    await equals.click();
    const result = await page.$eval("#screen", (e) => e.value);
    expect(result).toMatch("25");
  });
});
