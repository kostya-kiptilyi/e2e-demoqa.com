import { dateOfBirth, namePicture } from "../support/testData";

class registrationPage {

//selectors

getFirstNameInput() {
    return cy.xpath('//input[@id="firstName"]');
}

getLastNameInput() {
    return cy.xpath('//input[@id="lastName"]');
}

getGenderRadioBtn(genderRadioNumber) {
    return cy.xpath(`//input[@id='gender-radio-${genderRadioNumber}']`);
}

getMobileNumberInput() {
    return cy.xpath('//input[@id="userNumber"]');
}

getSubmitBtn() {
    return cy.xpath('//button[@id="submit"]');
}

getMessageAboutSuccessfulRegistration() {
    return cy.xpath('//div[@class="modal-header"]');
}

getStudentNameFromTable() {
    return cy.xpath('//table/tbody/tr[1]/td[2]');
}

getStudentEmailFromTable() {
    return cy.xpath('//table/tbody/tr[2]/td[2]');
}

 getGanderFromTable() {
    return cy.xpath('//table/tbody/tr[3]/td[2]');
 }

 getMobileNumberFromTable() {
    return cy.xpath('//table/tbody/tr[4]/td[2]');
 }

 getDateOfBirthFromTable() {
    return cy.xpath('//table/tbody/tr[5]/td[2]');
 }

 getSubjectsFromTable() {
    return cy.xpath('//table/tbody/tr[6]/td[2]');
 }

 getHobbiesFromTable() {
        return cy.xpath('//table/tbody/tr[7]/td[2]');
 }

 getPictureFromTable() {
    return cy.xpath('//table/tbody/tr[8]/td[2]');
 }

 getAddressFromTable() {
    return cy.xpath('//table/tbody/tr[9]/td[2]');
 }

 getStateAndCityFromTable() {
    return cy.xpath('//table/tbody/tr[10]/td[2]');
}

 getCloseBtnFromTable() {
    return cy.xpath('//button[@id="closeLargeModal"]');
 }

 getUserEmailInput() {
    return cy.xpath('//input[@id="userEmail"]');
 }

 getDateOfBirthInput() {
    return cy.get('#dateOfBirthInput');
 }

 getDatepickerMonthSelect() {
    return cy.xpath('(//*[@id="dateOfBirth"]//select)[1]');
 }

 getDatepickerYearSelect() {
    return cy.xpath('(//*[@id="dateOfBirth"]//select)[2]');
 }

 getFirstDayOfMonth() {
    return cy.get('.react-datepicker__day');
 }

 getSubjectsInput() {
    return cy.get('#subjectsInput');
 }

 getSubjectContainer() {
    return cy.xpath('//*[@id="subjectsContainer"]/div/div[1]/div[1]/div[1]');
 }

 getHobbiesCheckbox(number) {
    return cy.get(`#hobbies-checkbox-${number}`);
 }

 getCurrentAddressInput() {
    return cy.xpath('//textarea[@id="currentAddress"]');
 }

 getStateContainer() {
    return cy.xpath('//div[@id="state"]');
 }

 getCityContainer() {
    return cy.xpath('//div[@id="city"]');
 }

 getUploadPictureInput (){
    return cy.xpath('//input[@id="uploadPicture"]')
 }


//actions

typeFirstName(firstName) {
    return this.getFirstNameInput().type(firstName);
}

checkThatFirstNameInputHasValue(firstName) {
    return this.getFirstNameInput().should('have.value', firstName);
}

typeLastName(lastName) {
    return this.getLastNameInput().type(lastName);
}

checkThatLastNameInputHasValue(lastName) {
    return this.getLastNameInput().should('have.value', lastName);
}

typeUserEmail(userEmail) {
    return this.getUserEmailInput().type(userEmail)
}

checkThatUserEmailHasValue(userEmail) {
    return this.getUserEmailInput().should('have.value', userEmail);
}

selectGender(genderRadioNumber) {
    return this.getGenderRadioBtn(genderRadioNumber).click({force:true});
}

checkThatGenderRadioBtnIsChecked(radioBtn) {
    return this.getGenderRadioBtn(radioBtn).should('be.checked');
}

typeMobileNumber(mobileNumber) {
    return this.getMobileNumberInput(mobileNumber).type(mobileNumber);
}

checkThatMobileNumberInputHasValue(mobileNumber) {
    return this.getMobileNumberInput().should('have.value', mobileNumber);
}

checkThatDateOfBirthInputHasValue(dateOfBirth) {
    return this.getDateOfBirthInput().should('have.value', dateOfBirth);
}

checkThatSubjectContainerContainsOf(subject) {
    return this.getSubjectContainer().contains(subject);
}

checkThatHobbiesCheckboxIsChecked(checkbox) {
    return this.getHobbiesCheckbox(checkbox).should('be.checked');
}

checkThatCurrentAddressInputHasValue(currentAddress) {
    return this.getCurrentAddressInput().should('have.value', currentAddress);
}

checkThatStateContainerContainsOf(state) {
    return this.getStateContainer().contains(state);
}

checkThaGenderRadioButtonIsChecked(radioButton) {
    return this.getGenderRadioBtn(radioButton).should('be.checked');
}

checkThatCityContainerContainsOf(state) {
    return this.getCityContainer().contains(state);
}

clickOnSubmitBtn() {
    return this.getSubmitBtn().click();
}

checkMessageAboutSuccessfulRegistration(textSuccessMessage) {
    return this.getMessageAboutSuccessfulRegistration().should('have.text', textSuccessMessage).should('be.visible');
}

checkThatStudentNameExistsInTable(studentName) {
    return this.getStudentNameFromTable().should('have.text', studentName);
}

checkThatStudentEmailExistsInTable(studentEmail) {
    return this.getStudentEmailFromTable().should('have.text', studentEmail);
}

checkThatGenderExistsInTable(genderName) {
    return this.getGanderFromTable().should('have.text', genderName);
}

checkThatMobileNumberExistsInTable(mobileNumber) {
    return this.getMobileNumberFromTable().should('have.text', mobileNumber);
}

checkThatDateOfBirthIsNotEmptyInTable() {
    return this.getDateOfBirthFromTable().should('not.be.empty');
}

checkThatDateOfBirthIsExistsInTable(dateOfBirth) {
    return this.getDateOfBirthFromTable().contains(dateOfBirth);
}
checkThatSubjectExistsInTable(subject) {
    return this.getSubjectsFromTable().contains(subject);
}

checkThatHobbiesExistsInTable(hobbies) {
    return this.getHobbiesFromTable().contains(hobbies);
}

checkThatPictureNameExistsInTable(patchPicture) {
    return this.getPictureFromTable().contains(patchPicture);
}

checkThatAddressExistsInTable(address) {
    return this.getAddressFromTable().contains(address);
}

checkThatStateAndCityExistInTable(stateAndCity) {
    return this.getStateAndCityFromTable().contains(stateAndCity);
}

checkThatCloseBtnExistsInTable() {
    return this.getCloseBtnFromTable().should('be.exist');
}

typeUserEmail(userEmail) {
    return this.getUserEmailInput().type(userEmail)
}

clickOnTheDateOfBirthInput() {
    return this.getDateOfBirthInput().click();
}

selectMonthFromDatepicker(month) {
    return this.getDatepickerMonthSelect().select(month);
}

selectYearFromDatepicker(year) {
    return this.getDatepickerYearSelect().select(year);
}

selectFirstDayOfMonthFromDatepicker() {
    return this.getFirstDayOfMonth().first().click();
}

selectSubject(subject) {
    return this.getSubjectsInput().type(`${subject}{enter}`);
}

checkHobbiesCheckbox(number) {
    return this.getHobbiesCheckbox(number).check({force: true});
}

typeCurrentAddressInInput(currentAddress) {
return this.getCurrentAddressInput().type(currentAddress);
}

selectState(state) {
    return this.getStateContainer().type(`${state}{enter}`);
}

selectCity(city) {
    return this.getCityContainer().type(`${city}{enter}`);
}

uploadPicture(patchPicture) {
    return this.getUploadPictureInput().selectFile(`cypress/fixtures/${patchPicture}`);
}

}

export default new registrationPage();