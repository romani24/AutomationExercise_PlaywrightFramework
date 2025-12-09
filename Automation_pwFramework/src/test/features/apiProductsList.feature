@api
Feature: Products List API
  As a user
  I want to interact with the Products List API
  So that I can get and manage product information

    @api
  Scenario: API 1 - Get All Products List
    When I send a GET request to "/api/productsList"
    Then the response status should be 200
    And the response code should be 200
    And the response should contain a list of products
    
    @api
  Scenario: API 2 - POST To All Products List
    When I send a POST request to "/api/productsList"
    Then the response status should be 200
    And the response code should be 405
    And the response message should be "This request method is not supported."
