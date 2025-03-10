class BasePage {
    constructor(page) {
        this.page = page;
    }

    async gotoPage(url) {
        await this.page.goto(url);
    }

    async checkPageInfo(page) {
        const pageTitle = await this.page.title();
        const pageUrl = await this.page.url();
        console.log(`\n------- Page Info -------`);
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
}

export { BasePage };
