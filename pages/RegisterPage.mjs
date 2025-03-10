import { expect } from "@playwright/test";
import { BasePage } from '../pages/BasePage.mjs';

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);
    this.signUpLink = page.locator("a[href='/login']");
    this.signUpTitle = page.locator(".signup-form h2");
    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.btnSignUp = page.locator('[data-qa="signup-button"]');
    this.registerFormTitle = page.locator(".login-form b:has-text('Enter Account Information')");
    this.genderF = page.locator("#uniform-id_gender2");
    this.genderM = page.locator("#id_gender1");
    this.passwordInput = page.locator("#password");
    this.selectDays = page.locator("#days");
    this.selectMonth = page.locator("#months");
    this.selectYears = page.locator("#years");
    this.newsletterCheckbox = page.locator("#newsletter");
    this.optionCheckbox = page.locator("#optin");
    this.firstNameInput = page.locator("#first_name");
    this.lastNameInput = page.locator("#last_name");
    this.companyInput = page.locator("#company");
    this.addrInput1 = page.locator("#address1");
    this.addrInput2 = page.locator("#address2");
    this.countryInput = page.locator("#country");
    this.stateInput = page.locator("#state");
    this.cityInput = page.locator("#city");
    this.zipcodeInput = page.locator("#zipcode");
    this.mobileNumberInput = page.locator("#mobile_number");
    this.btnCreateAccount = page.locator("[data-qa='create-account']");
    this.successText = page.locator("h2[class='title text-center'] b");
    this.btnContinue = page.locator('[data-qa="continue-button"]');
    this.loggedInText = page.getByText("Logged in as");
    this.btnDelete = page.locator("a[href='/delete_account']");
    this.deleteText = page.getByText("Account Deleted!");
    this.errorSignupMessage = page.getByText('Email Address already exist!');
  }
  async navigateToRegister() {
    await this.gotoPage("https://automationexercise.com");
    await this.signUpLink.click();
    await this.checkPageInfo();
  }
  async submitSignup(name, email) {
    const textTitle = await this.signUpTitle.textContent(); 
    console.log(`\n-------${textTitle}-----`);
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    console.log(`Input name: ${name}`);
    console.log(`Input email: ${email}`)
    await this.btnSignUp.click();
  }
  async verifyRegisterForm() {
    await expect(this.registerFormTitle).toBeVisible();
    const textTitle = await this.registerFormTitle.textContent(); 
    console.log(`\n-------${textTitle}-----`);
  }
  async selectFemaleGender(){
    await this.genderF.check();
    console.log('Gender: Female');
  }
  async selectMaleGender(){
    await this.genderM.check();
    console.log('Gender: Male');
  }
  async inputPassword(password){
    await this.passwordInput.fill(password);
    console.log(`Input Password: ${password}`);
  }
  async inputBirthDate(day,month,year){
    await this.selectDays.selectOption(day);
    await this.selectMonth.selectOption(month);
    await this.selectYears.selectOption(year);
    console.log(`Birth Date: ${day}-${month}-${year}`);
  }
  async selectSubscriptionOptions(){
    await this.newsletterCheckbox.check();
    await this.optionCheckbox.check();
  }
  async inputName(firstname,lastname){
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    console.log(`Full Name: ${firstname}-${lastname}`);
  }
  async inputCompany(companyname){
    await this.companyInput.fill(companyname);
    console.log(`Company Name: ${companyname}`);
  }
  async inputAddress(adr1, adr2){
    await this.addrInput1.fill(adr1);
    await this.addrInput2.fill(adr2);
    console.log(`Address 1: ${adr1}`);
    console.log(`Address 2: ${adr2}`);
  }
  async inputLocation(country, state, city, zipcode){
    await this.countryInput.selectOption(country);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipcodeInput.fill(zipcode);
    console.log(`Location: ${country}, ${state}, ${city}, ${zipcode}`);
  }
  async inputPhoneNumber(phone){
    await this.mobileNumberInput.fill(phone);
    console.log(`Phone Number: ${phone}`);
  }
  async submitRegistration() {
    await this.btnCreateAccount.click();
    await expect(this.successText).toBeVisible();
    await this.btnContinue.click();
  }
  async deleteAccount() {
    await this.btnDelete.click();
    await expect(this.deleteText).toBeVisible();
  }
  async verifySignupError() {
    await expect(this.errorSignupMessage).toBeVisible();
    const errorMessage = await this.errorSignupMessage.textContent();
    console.log(`Signup error message: "${errorMessage}"`);
}
}
export { RegisterPage };
