require('cypress-xpath');

import registrationPage from '../pageObjects/registrationPage';
import {
  firstName,
  lastName,
  email,
  genderMale,
  mobileNumber,
  subjectShort,
  subjectFull,
  birthMonth,
  birthYear,
  dateOfBirth,
  currentAddress,
  state,
  city,
  namePicture,
  genderFemale,
  dateOfBirthFormatted,
  hobbySport,
  successMessage,
  a,
  b,
} from '../support/testData';

describe('demoqa.com', () => {

  beforeEach(() => {
    cy.visit('/automation-practice-form');
  })

  // before(() => {
  //   Cypress.on('uncaught:exception', (err, runnable) => {
  //     console.error('Uncaught Exception:', err); // Optional: Log the error for debugging
  //     return false; // Prevent Cypress from failing the test
  //   });
  // });
  
  it('TC_01 Verify that Student Registration Form opens successfully', () => {
    cy.visit('/automation-practice-form');
    cy.url().should('be.eq', 'https://demoqa.com/automation-practice-form');
 });

  it ('TC_02 Verify that a user can successfully register by filling out the required fields', () => {
    registrationPage.typeFirstName(firstName);
    registrationPage.checkThatFirstNameInputHasValue(firstName);
    registrationPage.typeLastName(lastName);
    registrationPage.checkThatLastNameInputHasValue(lastName);
    registrationPage.selectGender('1');
    registrationPage.checkThaGenderRadioButtonIsChecked('1');
    registrationPage.typeMobileNumber(mobileNumber);
    registrationPage.checkThatMobileNumberInputHasValue(mobileNumber);
    registrationPage.clickOnSubmitBtn();
    registrationPage.checkMessageAboutSuccessfulRegistration(successMessage);
    registrationPage.checkThatStudentNameExistsInTable(firstName + ' ' + lastName);
    registrationPage.checkThatGenderExistsInTable(genderMale);
    registrationPage.checkThatMobileNumberExistsInTable(mobileNumber);
    registrationPage.checkThatDateOfBirthIsNotEmptyInTable();
    registrationPage.checkThatCloseBtnExistsInTable();
  });

  it('TC_03 Verify that a user can successfully register by filling out the all fields', () => {
    registrationPage.typeFirstName(a);
    registrationPage.checkThatFirstNameInputHasValue(a);
    registrationPage.typeLastName(b);
    registrationPage.checkThatLastNameInputHasValue(b);
    registrationPage.typeUserEmail(email);
    registrationPage.checkThatUserEmailHasValue(email);
    registrationPage.selectGender(2);
    registrationPage.checkThaGenderRadioButtonIsChecked('2');
    registrationPage.typeMobileNumber(mobileNumber);
    registrationPage.checkThatMobileNumberInputHasValue(mobileNumber);
    registrationPage.clickOnTheDateOfBirthInput();
    registrationPage.selectMonthFromDatepicker(birthMonth);
    registrationPage.selectYearFromDatepicker(birthYear);
    registrationPage.selectFirstDayOfMonthFromDatepicker();
    registrationPage.checkThatDateOfBirthInputHasValue(dateOfBirth);
    registrationPage.selectSubject(subjectShort);
    registrationPage.checkThatSubjectContainerContainsOf(subjectFull);
    registrationPage.checkHobbiesCheckbox(1);
    registrationPage.checkThatHobbiesCheckboxIsChecked(1);
    registrationPage.uploadPicture(namePicture);
    registrationPage.typeCurrentAddressInInput(currentAddress);
    registrationPage.checkThatCurrentAddressInputHasValue(currentAddress);
    registrationPage.selectState(state);
    registrationPage.checkThatStateContainerContainsOf(state);
    registrationPage.selectCity(city);
    registrationPage.checkThatCityContainerContainsOf(city);
    registrationPage.clickOnSubmitBtn();
    registrationPage.checkMessageAboutSuccessfulRegistration(successMessage);
    registrationPage.checkThatStudentNameExistsInTable(a + ' ' + b);
    registrationPage.checkThatStudentEmailExistsInTable(email);
    registrationPage.checkThatGenderExistsInTable(genderFemale);
    registrationPage.checkThatMobileNumberExistsInTable(mobileNumber);
    registrationPage.checkThatDateOfBirthIsExistsInTable(dateOfBirthFormatted);
    registrationPage.checkThatSubjectExistsInTable(subjectFull);
    registrationPage.checkThatHobbiesExistsInTable(hobbySport);
    registrationPage.checkThatPictureNameExistsInTable(namePicture);
    registrationPage.checkThatAddressExistsInTable(currentAddress);
    registrationPage.checkThatStateAndCityExistInTable(state + ' ' + city);
    registrationPage.checkThatCloseBtnExistsInTable();
  });

});