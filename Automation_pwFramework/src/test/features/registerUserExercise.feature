@signup
@regression @smoke
Feature: Test Case 1: Register User

  Scenario: Register a new user and delete account
    Given I navigate to "https://automationexercise.com/login"
    And I wait 5 seconds
    When I click "cookies.acceptCookiesButton" if visible
    When I fill "Test User PT 2025" in "signup.nameField"
    And I fill unique email in "signup.emailField"
    And I click "signup.signupButton"
    Then I should see "signup.enterAccountInfoTitle"
    When I check "signup.title_mr"
    And I fill "123213" in "signup.passwordField"
    And I select "15" from "signup.dayDropdown"
    And I select "March" from "signup.monthDropdown"
    And I select "1990" from "signup.yearDropdown"
    And I fill "First Name" in "signup.firstNameField"
    And I fill "Last Name" in "signup.lastNameField"
    And I fill "123 Street" in "signup.addressField"
    And I select "United States" from "signup.countryDropdown"
    And I fill "Porto" in "signup.stateField"
    And I fill "Porto" in "signup.cityField"
    And I fill "12345" in "signup.zipcodeField"
    And I fill random phone in "signup.phoneField"
    And I wait 2 seconds
    Then I click "signup.createAccountButton"
    And I wait 2 seconds
    And I should see text "Congratulations! Your new account has been successfully created!"
    When I click "signup.continueButton_afterSignup"
    Then I click "menu.accountDeleteButton"
    Then I should see text "Account Deleted!"