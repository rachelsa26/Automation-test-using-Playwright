import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.mjs";

class TestCasePage extends BasePage{
    constructor(page){
        super(page);
        this.testCaseLink = page.locator("header[id='header'] li:nth-child(5) a:nth-child(1)");
        this.testCaseTitle = page.locator("h2[class='title text-center'] b");
        this.testCaseSubtitle = page.locator("div[class='panel-group'] h5 span");
        this.allTestCaseItems = page.locator("a[data-toggle='collapse'][href^='#collapse']");
    }
    async navigateToTestCase(){
        await this.gotoPage('https://automationexercise.com');
        await this.testCaseLink.click();
    }
    async verifyTestCasePage(title,subtitle){
        await this.checkPageInfo();
        await expect(this.testCaseTitle).toHaveText(title)
        await expect(this.testCaseSubtitle).toHaveText(subtitle)
        console.log(`\n-----${title}-----`)
        console.log(subtitle)
    }
    async printAllTestCaseScenario(){
        const testCaseCount = await this.allTestCaseItems.count()
        console.log(`\n Jumlah test case: ${testCaseCount}`);
        for (let i = 1; i <= testCaseCount ; i++){
            const selectedTestCase  =  this.page.locator(`(//a[@data-toggle='collapse'])[${i}]`);
            const selectedTestCaseName = this.page.locator(`(//a[@data-toggle='collapse'])[${i}]//u`);
            const testCaseScenarioItems  = this.page.locator(`//div[@id='collapse${i}']//ul[@class='list-group']//li`);
            if(!(await selectedTestCase.isVisible())){
                console.log(`Test case ke-${i} tidak ada`);
                continue;
            }
            const testName = await selectedTestCaseName.textContent();
            console.log(`------${testName}-----`);
            await selectedTestCase.click();
            const testScenario = await testCaseScenarioItems.allTextContents();
            console.log(testScenario);
            await selectedTestCase.click()
        }
    }
}
export { TestCasePage };