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
    registrationPage.getFirstNameInput().should('have.value', FNChristopher);
    registrationPage.typeLastName(LNFeatherstonehaugh);
    registrationPage.getLastNameInput().should('have.value', LNFeatherstonehaugh);
    registrationPage.selectGender('gender-radio-1');
    registrationPage.getGenderRadioBtn('gender-radio-1').should('be.checked');
    registrationPage.typeMobileNumber(mN1234567890);
    registrationPage.getMobileNumber(mN1234567890);
    registrationPage.clickOnSubmitBtn();
    registrationPage.checkMessageAboutSuccessfulRegistration(textSuccessMessage);
    registrationPage.checkThatStudentNameExistsInTable(FNChristopher + ' ' + LNFeatherstonehaugh);
    registrationPage.checkThatGenderExistsInTable(genderMale);
    registrationPage.checkThatMobileNumberExistsInTable(mN1234567890);
    registrationPage.checkThatDateOfBirthIsNotEmptyInTable();
    registrationPage.checkThatCloseBtnExistInTable();
  });

  it('TC_03 Verify that a user can successfully register by filling out the all fields', () => {
    registrationPage.typeFirstName(A);
    registrationPage.getFirstNameInput().should('have.value', A);
    registrationPage.typeLastName(B);
    registrationPage.getLastNameInput().should('have.value', B);
    registrationPage.typeUserEmail(correctEmail);
    registrationPage.getUserEmailInput().should('have.value', correctEmail);
    registrationPage.selectGender('gender-radio-2');
    registrationPage.getGenderRadioBtn('gender-radio-2').should('be.checked');
    registrationPage.typeMobileNumber(mN1234567890);
    registrationPage.getMobileNumber().should('have.value', mN1234567890); //
    registrationPage.clickOnTheDateOfBirthInput();
    registrationPage.selectMonthFromDatepicker(january);
    registrationPage.selectYearFromDatepicker(year1950);
    registrationPage.selectFirstDayOfMonthFromDatepicker();
    registrationPage.getDateOfBirthInput().should('have.value', dateOfBirth);
    registrationPage.selectSubject(subjectText);
    registrationPage.getSubjectContainer().contains(subjectFullText);
    registrationPage.checkHobbiesCheckbox(1);
    registrationPage.getHobbiesCheckbox(1).should('be.checked');
    registrationPage.typeCurrentAddressInInput(currentAddress);
    registrationPage.getCurrentAddressInput().should('have.value', currentAddress);
    registrationPage.selectState(stateNCR);
    registrationPage.getStateContainer().contains(stateNCR);
    registrationPage.selectCity(cityDelhi);
    registrationPage.getCityContainer().contains(cityDelhi);
    registrationPage.uploadPicture(namePicture);
    registrationPage.clickOnSubmitBtn();
    registrationPage.checkMessageAboutSuccessfulRegistration(textSuccessMessage);
    cy.screenshot();

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
    registrationPage.checkThatCloseBtnExistInTable();
  });

});