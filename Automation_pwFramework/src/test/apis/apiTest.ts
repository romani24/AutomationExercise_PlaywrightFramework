import {test, expect} from '@playwright/test';

test('API 1: Get All Products List', async ({request}) => {
    const response = await request.get('https://automationexercise.com/api/productsList');
    var responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);        
});

test('API 2: POST To All Products List', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/productsList');
    const responseJson = await response.json();
    console.log(responseJson);
    // A API retorna HTTP 200, mas o responseCode no body é 405
    expect(response.status()).toBe(200);
    expect(responseJson.responseCode).toBe(405);
    expect(responseJson.message).toBe('This request method is not supported.');
});