import { test } from '../pom.fixture';
import {expect} from '@playwright/test';
/*

test('Get Request', async ({ request }) => {
    //verstuur request en controleer reactie-status
    const getRequest = await request.get("voerHierJeEndPointIn", {
      headers: {
        contenttype: `Application/json`,
      }
    });
    expect(getRequest.status()).toBe(200);
  });

  const dataToSend = {"value" : "string", "another value" : "also a string"};

  test("Put request", async ({ request }) => {
  const putRequest = await request.put("voerHierJeEndPointIn", {
    headers: {
      contenttype: `Application/json`,
    },
    data: dataToSend
  });
  expect(putRequest.status()).toBe(200);
})

*/