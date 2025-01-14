import { test, expect } from '@playwright/test';
//responsive testing: after doing research we found that most of our users are using Iphone 13 mini and Galaxy S5
//common browsers: after doing some research we found that our users are using Chrome, and Firefox
// create tests that cover our common user base mobile and browsers

test('add list item', async ({ page, context }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }

  let b = await page.locator('[class="new-todo"]')
  await b.click()
  await b.fill('testing 123 testing')
  await b.press('Enter');
})

test('add list items in bulk', async ({page }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
})

test ('view completed tasks', async ({ page}) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
})

test('test that finds bug 1 that you found', async ({ page, }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
})

test('test that finds bug 2 that you found', async ({ page, }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
})

// TODO We want to see an example of your API testing skills. Please write a test that uses the SWAPI API to test the following:

// API Testing
// Use swapi documentation https://swapi.py4e.com/documentation

test('Use https://swapi.py4e.com/api/people to find and confirm how many people there are', async () => {
  
})

test('Use https://swapi.py4e.com/api/people/1 to find the name of Lukes homeworld', async () => {
  
})

test('Use https://swapi.py4e.com/api/people/1 with a wookiee encoding to assert the name of the value "whrascwo"', async () => {
  
})