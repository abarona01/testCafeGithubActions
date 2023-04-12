Feature: Registration feature

    As a visitor I can create a new account by the registration feature.

Scenario: New User Registration E2E Scenario
Given I open the registration page
When I select the gender
And I enter First name "Ailene"
And I enter Last Name "Bar"
And I select Date of Birth "5"
And I select Month of Birth "November"
And I select Year of Birth "1989"
And I enter Email "a@test.com"
And I enter Password "123456"
And I enter Confirm Password "123456"
And I click register button
Then successful message is displayed

Examples:
    | firstname | lastname | email | Password | day | month |
    | ailene  | barona  | aibarona | 123456 | 5 | November | 1983
    | john   | doe | johndoe  | 654321 | 6 | July | 1970