import { test } from '@playwright/test';
import {Types} from 'mongoose'

test("Fail", async ({page}) => {
  const bugTriggeringObject = new Types.ObjectId();
  console.log(JSON.stringify(bugTriggeringObject))
  await page.request.post('https://playwright.dev/',{data:bugTriggeringObject})
})