import { Given, When, Then } from '@cucumber/cucumber';
import { expect, APIRequestContext, request } from '@playwright/test';

let apiContext: APIRequestContext;
let response: any;
let responseJson: any;

const BASE_URL = 'https://automationexercise.com';

// Initialize API context before making requests
async function getApiContext(): Promise<APIRequestContext> {
    if (!apiContext) {
        apiContext = await request.newContext({
            baseURL: BASE_URL,
            extraHTTPHeaders: {
                'Accept': 'application/json',
            },
        });
    }
    return apiContext;
}

When('I send a GET request to {string}', async function (endpoint: string) {
    const context = await getApiContext();
    response = await context.get(endpoint);
    responseJson = await response.json();
    console.log('Response:', responseJson);
});

When('I send a POST request to {string}', async function (endpoint: string) {
    const context = await getApiContext();
    response = await context.post(endpoint);
    responseJson = await response.json();
    console.log('Response:', responseJson);
});

When('I send a POST request to {string} with body:', async function (endpoint: string, body: string) {
    const context = await getApiContext();
    response = await context.post(endpoint, {
        data: JSON.parse(body),
    });
    responseJson = await response.json();
    console.log('Response:', responseJson);
});

When('I send a PUT request to {string}', async function (endpoint: string) {
    const context = await getApiContext();
    response = await context.put(endpoint);
    responseJson = await response.json();
    console.log('Response:', responseJson);
});

When('I send a DELETE request to {string}', async function (endpoint: string) {
    const context = await getApiContext();
    response = await context.delete(endpoint);
    responseJson = await response.json();
    console.log('Response:', responseJson);
});

Then('the response status should be {int}', async function (statusCode: number) {
    expect(response.status()).toBe(statusCode);
});

Then('the response code should be {int}', async function (responseCode: number) {
    expect(responseJson.responseCode).toBe(responseCode);
});

Then('the response message should be {string}', async function (message: string) {
    expect(responseJson.message).toBe(message);
});

Then('the response should contain a list of products', async function () {
    expect(responseJson.products).toBeDefined();
    expect(Array.isArray(responseJson.products)).toBe(true);
    expect(responseJson.products.length).toBeGreaterThan(0);
    console.log(`Found ${responseJson.products.length} products`);
});

Then('the response should contain product with name {string}', async function (productName: string) {
    const product = responseJson.products.find((p: any) => p.name === productName);
    expect(product).toBeDefined();
});
