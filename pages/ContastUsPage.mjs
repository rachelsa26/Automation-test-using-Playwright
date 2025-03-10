import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.mjs";

class ContactUsPage extends BasePage{
    constructor(page){
        super(page);
        this.contactUsLink = page.locator("a[href='/contact_us']");
        this.contactUsTitle = page.locator("div[class='contact-form'] h2[class='title text-center']");
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.getByPlaceholder('Email', { exact: true });
        this.subjectInput = page.getByPlaceholder('Subject');
        this.messageInput = page.getByPlaceholder('Your Message Here');
        this.fileInput = page.locator('input[name="upload_file"]');
        this.btnSubmit = page.locator("input[value='Submit']");
        this.successMessage = page.locator('.status.alert.alert-success');
        this.btnHome = page.locator('.btn.btn-success');
    }
    async navigateToContactUs(){
        await this.gotoPage("https://automationexercise.com");
        await this.contactUsLink.click()
        await this.checkPageInfo();
    }
    async verifyContactUsPage(name){
        await expect(this.contactUsTitle).toHaveText("Get In Touch");
        const textTitle = await this.contactUsTitle.textContent();
        console.log(`\n-------${textTitle}-------`);
    }
    async inputNameEmail(name, email){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        console.log(`\n- Input name: ${name}`);
        console.log(`- Input email: ${email}`);
    }
    async inputSubject(subject){
        await this.subjectInput.fill(subject);
        console.log(`- Input subject: ${subject}`);
    }
    async inputMessage(message){
        await this.messageInput.fill(message);
        console.log(`- Message: ${message}`);
    }
    async uploadFile(filepath){
        await this.fileInput.setInputFiles(filepath);
        this.page.on('dialog', dialog => dialog.accept());
        console.log(`- File successfully uploaded from: ${filepath}`)
    }
    async submit(){
        await this.btnSubmit.click();
    }
    async verifySuccessSubmit(){
        await expect(this.successMessage).toBeVisible();
        const successText = await this.successMessage.textContent();
        console.log(`\nSuccess Message: ${successText}`)
    }
    async navigateToHome(){
        await this.btnHome.click();
        console.log(`\n-------Navigated to home page-------`);
    }

}

export { ContactUsPage };