require('cypress-xpath');

import registrationPage from '../pageObjects/registrationPage';
import {
  A,
  B,
  FNChristopher,
  correctEmail,
  LNFeatherstonehaugh,
  genderMale,
  mN1234567890,
  textSuccessMessage,
  subjectText,
  january,
  year1950,
  dateOfBirth,
  subjectFullText,
  currentAddress,
  stateNCR,
  cityDelhi,
  namePicture,
  genderFemale,
  dateOfBirthWithComma,
  hobbiesSport
} from '../support/testData';

describe('demoqa.com', () => {

  beforeEach(() => {
    cy.visit('/automation-practice-form');
  })

  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught Exception:', err); // Optional: Log the error for debugging
      return false; // Prevent Cypress from failing the test
    });
  });
  
  it('TC_01 Verify that Student Registration Form opens successfully', () => {
    cy.visit('/automation-practice-form');
    cy.url('/automation-practice-form');
 });

  it ('TC_02 Verify that a user can successfully register by filling out the required fields', () => {
    registrationPage.typeFirstName(FNChristopher);
    registrationPage.checkThatFirstNameInputHasValue(FNChristopher);
    registrationPage.typeLastName(LNFeatherstonehaugh);
    registrationPage.checkThatLastNameInputHasValue(LNFeatherstonehaugh);
    registrationPage.selectGender('1');
    registrationPage.checkThaGenderRadioButtonIsChecked('1');
    registrationPage.typeMobileNumber(mN1234567890);
    registrationPage.checkThatMobileNumberInputHasValue(mN1234567890);
    registrationPage.clickOnSubmitBtn();
    registrationPage.checkMessageAboutSuccessfulRegistration(textSuccessMessage);
    registrationPage.checkThatStudentNameExistsInTable(FNChristopher + ' ' + LNFeatherstonehaugh);
    registrationPage.checkThatGenderExistsInTable(genderMale);
    registrationPage.checkThatMobileNumberExistsInTable(mN1234567890);
    registrationPage.checkThatDateOfBirthIsNotEmptyInTable();
    registrationPage.checkThatCloseBtnExistsInTable();
  });

  it('TC_03 Verify that a user can successfully register by filling out the all fields', () => {
    registrationPage.typeFirstName(A);
    registrationPage.checkThatFirstNameInputHasValue(A);
    registrationPage.typeLastName(B);
    registrationPage.checkThatLastNameInputHasValue(B);
    registrationPage.typeUserEmail(correctEmail);
    registrationPage.checkThatUserEmailHasValue(correctEmail);
    registrationPage.selectGender(2);
    registrationPage.checkThaGenderRadioButtonIsChecked('2');
    registrationPage.typeMobileNumber(mN1234567890);
    registrationPage.checkThatMobileNumberInputHasValue(mN1234567890);
    registrationPage.clickOnTheDateOfBirthInput();
    registrationPage.selectMonthFromDatepicker(january);
    registrationPage.selectYearFromDatepicker(year1950);
    registrationPage.selectFirstDayOfMonthFromDatepicker();
    registrationPage.checkThatDateOfBirthInputHasValue(dateOfBirth);
    registrationPage.selectSubject(subjectText);
    registrationPage.checkThatSubjectContainerContainsOf(subjectFullText);
    registrationPage.checkHobbiesCheckbox(1);
    registrationPage.checkThatHobbiesCheckboxIsChecked(1);
    registrationPage.uploadPicture(namePicture);
    registrationPage.typeCurrentAddressInInput(currentAddress);
    registrationPage.checkThatCurrentAddressInputHasValue(currentAddress);
    registrationPage.selectState(stateNCR);
    registrationPage.checkThatStateContainerContainsOf(stateNCR);
    registrationPage.selectCity(cityDelhi);
    registrationPage.checkThatCityContainerContainsOf(cityDelhi);
    registrationPage.clickOnSubmitBtn();
    registrationPage.checkMessageAboutSuccessfulRegistration(textSuccessMessage);
    registrationPage.checkThatStudentNameExistsInTable(A + ' ' + B);
    registrationPage.checkThatStudentEmailExistsInTable(correctEmail);
    registrationPage.checkThatGenderExistsInTable(genderFemale);
    registrationPage.checkThatMobileNumberExistsInTable(mN1234567890);
    registrationPage.checkThatDateOfBirthIsExistsInTable(dateOfBirthWithComma);
    registrationPage.checkThatSubjectExistsInTable(subjectFullText);
    registrationPage.checkThatHobbiesExistsInTable(hobbiesSport);
    registrationPage.checkThatPictureNameExistsInTable(namePicture);
    registrationPage.checkThatAddressExistsInTable(currentAddress);
    registrationPage.checkThatStateAndCityExistInTable(stateNCR + ' ' + cityDelhi);
    registrationPage.checkThatCloseBtnExistsInTable();
  });

});