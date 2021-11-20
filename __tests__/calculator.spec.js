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

  // operations are evaluated from left to right, no priorities
  const values = [
    { exp: "5*5", value: "25" },
    {
      exp: "100+50/30",
      value: "5",
    },
    {
      exp: "15*200/15",
      value: "200",
    },
    { exp: "1.75 + 1.25 - 1.75/1.25 - 10", value: "-9" },
    {
      exp: "30*10/0",
      value: "division by zero",
    },
  ];

  it("1 - Check that 5 x 5 = 25", async () => {
    const clear = await page.$("#clear");
    const five = await page.$("#five");
    const mult = await page.$("#mult");
    const equals = await page.$("#equals");
    await clear.click();
    await five.click();
    await mult.click();
    await five.click();
    await equals.click();
    const result = await page.$eval("#screen", (e) => e.value);
    expect(result).toMatch(values[0].value);
  });

  it("2 - Check that 100+50/30 = 5", async () => {
    const clear = await page.$("#clear");
    const five = await page.$("#five");
    const zero = await page.$("#zero");
    const div = await page.$("#div");
    const plus = await page.$("#plus");
    const one = await page.$("#one");
    const three = await page.$("#three");
    const equals = await page.$("#equals");
    await clear.click();
    await one.click();
    await zero.click();
    await zero.click();
    await plus.click();
    await five.click();
    await zero.click();
    await div.click();
    await three.click();
    await zero.click();
    await equals.click();
    const result = await page.$eval("#screen", (e) => e.value);
    expect(result).toMatch(values[1].value);
  });

  it("4 - Check that 1.75 + 1.25 - 1.75/1.25 - 10 = -9", async () => {
    const clear = await page.$("#clear");
    const one = await page.$("#one");
    const two = await page.$("#two");
    const zero = await page.$("#zero");
    const five = await page.$("#five");
    const seven = await page.$("#seven");
    const dec = await page.$("#dec");
    const plus = await page.$("#plus");
    const minus = await page.$("#minus");
    const div = await page.$("#div");
    const equals = await page.$("#equals");

    await clear.click();

    await one.click();
    await dec.click();
    await seven.click();
    await five.click();

    await plus.click();

    await one.click();
    await dec.click();
    await two.click();
    await five.click();

    await minus.click();

    await one.click();
    await dec.click();
    await seven.click();
    await five.click();

    await div.click();

    await one.click();
    await dec.click();
    await two.click();
    await five.click();

    await minus.click();

    await one.click();
    await zero.click();
    await equals.click();

    const result = await page.$eval("#screen", (elm) => elm.value);
    expect(result).toMatch(values[3].value);
  });

  it("5 - Check that 30*10/0 = division by zero", async () => {
    const clear = await page.$("#clear");
    const three = await page.$("#three");
    const one = await page.$("#one");
    const zero = await page.$("#zero");
    const mult = await page.$("#mult");
    const div = await page.$("#div");
    const equals = await page.$("#equals");

    await clear.click();

    await three.click();
    await zero.click();

    await mult.click();

    await one.click();
    await zero.click();

    await div.click();

    await zero.click();
    await equals.click();

    const result = await page.$eval("#screen", (elm) => elm.value);
    expect(result).toMatch(values[4].value);
  });
});
