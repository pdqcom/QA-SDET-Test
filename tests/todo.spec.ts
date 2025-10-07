import { test, expect } from '@playwright/test';
/*
Performance Budget: 
Initial page load ≤ 2 seconds.
Bundle size ≤ 250 KB.
Adding a todo ≤ 200 ms.
*/

test('innitial page load performance test', async ({ page, context }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
})

test('adding a todo performance test', async ({page }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
})



// Add a couple written (not coded) test cases using the test requirements listed in the README.md file.