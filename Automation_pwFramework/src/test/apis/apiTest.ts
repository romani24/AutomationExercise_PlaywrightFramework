import {test, expect} from '@playwright/test';
import { logger } from '../../utils/logger';

test('API 1: Get All Products List', async ({request}) => {
    const response = await request.get('https://automationexercise.com/api/productsList');
    var responseJson = await response.json();
    logger.response('Products List', responseJson);
    expect(response.status()).toBe(200);        
});

test('API 2: POST To All Products List', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/productsList');
    const responseJson = await response.json();
    logger.response('POST Response', responseJson);
    // A API retorna HTTP 200, mas o responseCode no body é 405
    expect(response.status()).toBe(200);
    expect(responseJson.responseCode).toBe(405);
    expect(responseJson.message).toBe('This request method is not supported.');
});