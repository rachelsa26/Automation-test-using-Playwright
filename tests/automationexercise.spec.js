const { test, expect} = require('@playwright/test');
const exp = require('node:constants');
// import { test, expect } from "@playwright/test";

test('TC01 Register User', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator('a[href="/login"]').click();
    await expect(page).toHaveURL('https://automationexercise.com/login');
    await expect (page.locator('.signup-form h2')).toHaveText('New User Signup!');
    await page.locator('[data-qa="signup-name"]').fill('Dummyuser')
    await page.locator('[data-qa="signup-email"]').fill('otomesentesting123@gmail.com');
    await page.locator('[data-qa="signup-button"]').click();
    await expect (page.locator(".login-form b:has-text('Enter Account Information')")).toBeVisible();
    await page.locator('#uniform-id_gender2').check();
    await page.locator('#password').fill('Test_123');
    await page.locator('#days').selectOption('1');
    await page.locator('#months').selectOption('1');
    await page.locator('#years').selectOption('1999');
    await page.locator('#newsletter').check();
    await page.locator('#optin').check();
    await page.locator('#first_name').fill('QA');
    await page.locator('#last_name').fill('Test');
    await page.locator('#company').fill('XYC ');
    await page.locator('#address1').fill('Jalan Jambu No 29');
    await page.locator('#address2').fill('Jalan Mangga No 30');
    await page.locator('#country').selectOption('United States');
    await page.locator('#state').fill('Dummy state');
    await page.locator('#city').fill('Dummy city');
    await page.locator('#zipcode').fill('123456');
    await page.locator('#mobile_number').fill('081234567890');
    await page.locator("[data-qa='create-account']").click();
    await expect(page.locator("h2[class='title text-center'] b")).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
    await expect(page.getByText('Logged in as Dummyuser')).toBeVisible();
    await page.locator("a[href='/delete_account']").click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await page.close();
});
test('TC02 Login user with correct email & password', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator("a[href='/login']").click();
    await page.locator("[data-qa='login-email']").fill('siahaanelsa3@gmail.com');
    await page.getByPlaceholder('Password').fill('123abc');
    await page.locator("[data-qa='login-button']").click();
    await expect(page.getByText('Logged in as QA_Test')).toBeVisible();
});
test('TC03 Login user with incorrect email & password', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator('a[href="/login"]').click();
    await page.locator("[data-qa='login-email']").fill('testincorrect@gmail.com');
    await page.getByPlaceholder('Password').fill('incorrect_password');
    await page.locator("[data-qa='login-button']").click();
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});
test('TC04 Logout User', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator('a[href="/login"]').click();
    await page.locator("[data-qa='login-email']").fill('siahaanelsa3@gmail.com');
    await page.getByPlaceholder('Password').fill('123abc');
    await page.locator("[data-qa='login-button']").click();
    await expect(page.getByText('Logged in as QA_Test')).toBeVisible();
    await page.locator("a[href='/logout']").click();
    await expect(page).toHaveURL(/.*login.*/);
});
test('TC05 Register user with existing email', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator('a[href="/login"]').click();
    await expect (page.locator('.signup-form h2')).toHaveText('New User Signup!');
    await page.locator('[data-qa="signup-name"]').fill('QA_Tester');
    await page.locator('[data-qa="signup-email"]').fill('siahaanelsa3@gmail.com');
    await page.locator('[data-qa="signup-button"]').click();
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
});
test('TC06 Contact Us Form', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator("a[href='/contact_us']").click();
    await expect(page.locator("div[class='contact-form'] h2[class='title text-center']")).toBeVisible();
    await page.getByPlaceholder('Name').fill('QA_Test');
    await page.getByPlaceholder('Email', { exact: true }).fill('siahaanelsa3@gmail.com');
    await page.getByPlaceholder('Subject').fill('Test contact us form');
    await page.getByPlaceholder('Your Message Here').fill('Hello, I recently made a purchase on your website, but I am facing an issue. The product I received does not match the description on your website, and I would like to request a refund or an exchange. I have attached some images as proof of the issue. Additionally, I tried contacting your support team via phone, but I was unable to reach anyone. Please assist me as soon as possible. Thank you.');
    await page.locator('input[name="upload_file"]').setInputFiles('./tests/fixtures/file_test.png');
    page.on('dialog', dialog => dialog.accept());
    await page.locator("input[value='Submit']").click();
    await expect(page.locator('.status.alert.alert-success').getByText("Success! Your details have been submitted successfully.")).toBeVisible();
    await page.locator('.btn.btn-success').click();
});
test('TC07 Verify AllTest Case Page', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    }
    await checkPageInfo(page);
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator("header[id='header'] li:nth-child(5) a:nth-child(1)").click();
    await checkPageInfo(page);
    await expect(page.locator("h2[class='title text-center'] b")).toHaveText('Test Cases');
    await expect(page.locator("div[class='panel-group'] h5 span")).toHaveText('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:');
    const testCaseCount = await page.locator("a[data-toggle='collapse'][href^='#collapse']").count();
    for (let i = 1; i <= testCaseCount; i++) {
        const testCase = page.locator(`(//a[@data-toggle='collapse'])[${i}]`);
        if (!(await testCase.isVisible())){
            console.log(`Element ke-${i} tidak ada`);
            continue;
        }
        const testName = await page.locator(`(//a[@data-toggle='collapse'])[${i}]//u`).textContent();
        console.log(`------${testName}-----`);
        await testCase.click();
        const listTexts = await page.locator(`//div[@id='collapse${i}']//ul[@class='list-group']//li`).allTextContents();
        console.log(listTexts);
        await testCase.click();
    }
});
test('TC8 Verify All Product and Product Detail Page', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    for (let i=1; i<=43; i++){
        await page.locator("a[href='/products']").click();
        await expect(page).toHaveURL('https://automationexercise.com/products')
        await expect(page.locator('#sale_image')).toBeVisible();
        await expect(page.locator('.title.text-center')).toHaveText('All Products');
        const viewProduct = page.locator(`a[href='/product_details/${i}']`);
        if (!(await viewProduct.isVisible())) {
            console.log(`Product ${i} tidak ditemukan, skip.`);
            continue;
        }
        await viewProduct.click();
        await expect(page).toHaveURL(`https://automationexercise.com/product_details/${i}`);
        const productTitle = await page.locator("div.product-information h2").textContent();
        console.log(`\n---------- Product ${i} ----------`);
        console.log('Name:', productTitle);
        const categoryText = await page.locator("div.product-information p").nth(0).textContent();
        console.log(categoryText);
        const productPrice = await page.locator("div[class='product-information'] span span").textContent();
        console.log('Price: ',productPrice);
        const productAvailability = await page.locator("div.product-information p").nth(1).textContent();
        console.log(productAvailability);
        const productCondition = await page.locator("div.product-information p").nth(2).textContent();
        console.log(productCondition);
        const productBrand = await page.locator("div.product-information p").nth(3).textContent();
        console.log(productBrand);
        await page.goBack()
    }
});
test('TC09 Search Product', async ({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator("a[href='/products']").click();
    await expect(page).toHaveURL('https://automationexercise.com/products')
    await expect(page.locator('#sale_image')).toBeVisible();
    await expect(page.locator('.title.text-center')).toHaveText('All Products');
    await page.locator('#search_product').fill('top');
    await page.locator('#submit_search').click();
    await expect(page.locator('.title.text-center')).toHaveText('Searched Products');
    const productCount = await page.locator("//div[@class='productinfo text-center']//p").count();
    console.log(`Found ${productCount} products`);
    for (let i = 0; i < productCount; i++) {
        const productNames = await page.locator("//div[@class='productinfo text-center']//p").nth(i).allTextContents();
        console.log(`Product ${i+1} = ${productNames}`);
    }
});
test('TC10 Verify Subscription in home page', async({ page }) => {
    await page.goto('https://automationexercise.com');
    const pageTitle = await page.title();
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.locator("div[class='single-widget'] h2")).toHaveText('Subscription');
    await page.locator('#susbscribe_email').fill('testerdummy@gmail.com');
    await page.locator('#subscribe').click();
    await expect(page.getByText('You have been successfully')).toBeVisible();
});
test('TC11 Verify Subscription in Cart Page', async({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.getByRole('link', { name: ' Cart' }).click();
    await expect(page.locator("div[class='single-widget'] h2")).toBeVisible();
    await page.locator('#susbscribe_email').fill('testerdummy@gmail.com');
    await page.locator('#subscribe').click();
    await expect(page.getByText('You have been successfully')).toBeVisible();
});
test('TC12 Add Products in Cart', async({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com');
    await page.locator("a[href='/products']").click();
    await checkPageInfo(page);
    const product = page.locator("div.productinfo.text-center a.add-to-cart");
    const countProduct = await product.count();
    console.log('Count Product: ', countProduct)
    for( let i = 0 ; i < countProduct; i++){
        if (!(await product.nth(i).isVisible())){
            console.log(`Product ${i} not available`);
            continue;
        }
        await product.nth(i).click();
        await page.locator(".btn.btn-success.close-modal.btn-block").click();
    };
    await page.locator(".nav.navbar-nav a[href='/view_cart']").click();
    await checkPageInfo(page);
    const productCart = page.locator(`a[href^='/product_details/']`);
    const productCartCount = await productCart.count();
    let productCartList = [];
    for (let i = 0; i < productCartCount; i++) {
        const productCartName = await productCart.nth(i).textContent();
        const productCartCategory = await page.locator(`td.cart_description p`).nth(i).textContent();
        const productCartPrice = await page.locator(`td.cart_price p`).nth(i).textContent();
        const productCartQty = await page.locator(`td.cart_quantity button`).nth(i).textContent();
        const productCartTotal = await page.locator(`td.cart_total p`).nth(i).textContent();
        productCartList.push({
            name: productCartName.trim(),
            category: productCartCategory.trim(),
            price: productCartPrice.trim(),
            qty: productCartQty.trim(),
            totalPrice: productCartTotal.trim()
        });
    }
    productCartList.forEach((product, index) => {
        console.log(`\n---------- Product ${index + 1} ----------`);
        console.log(`Product Name: ${product.name}`);
        console.log(`Product Category: ${product.category}`);
        console.log(`Price: ${product.price}`)
        console.log(`Quantity : ${product.qty}`)
        console.log(`Total Price : ${product.totalPrice}`)
    });
});
test('TC13 Verify Product Quantity in Cart', async({ page }) =>{
    await page.goto('https://automationexercise.com');
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await expect(page).toHaveURL('https://automationexercise.com');
    const viewProduct = await page.locator(`a[href^='/product_details/']`);
    const viewProductCount = await viewProduct.count();
    let productCartList = [];
    for (let i = 0; i < viewProductCount ; i++) {
        if (!(await viewProduct.nth(i).isVisible())){
            console.log(`Product ${i} not available`);
            continue;
        }
        await viewProduct.nth(i).click();
        const quantityInput = page.locator('#quantity');
        await quantityInput.evaluate(el => { el.value = ''});
        await quantityInput.fill((i+1).toString());
        await page.locator("button[type='button']").click();
        await page.locator("p[class='text-center'] a").click();
        const quantity = page.locator(`td.cart_quantity button`).last();
        const qtyValue = await quantity.textContent();
        const productCartName = await page.locator(`a[href^='/product_details/']`).nth(i).textContent();
        const productCartCategory = await page.locator(`td.cart_description p`).nth(i).textContent();
        const productCartPrice = await page.locator(`td.cart_price p`).nth(i).textContent();
        const productCartTotal = await page.locator(`td.cart_total p`).nth(i).textContent();
        await expect(quantity).toHaveText((i+1).toString());
        productCartList.push({
            quantity: qtyValue.trim(),
            name: productCartName.trim(),
            category: productCartCategory.trim(),
            price: productCartPrice.trim(),
            totalPrice: productCartTotal.trim()
        });
        await page.locator(`//ul[@class='nav navbar-nav']//li//a[@href='/products']`).click(); // untuk go back
    }
    productCartList.forEach((product, index) => {
        console.log(`\n---------- Product ${index + 1} ----------`);
        console.log(`Product Name: ${product.name}`);
        console.log(`Product Category: ${product.category}`);
        console.log(`Price: ${product.price}`)
        console.log(`Quantity : ${product.quantity}`)
        console.log(`Total Price : ${product.totalPrice}`)
    });
});
test('TC14 Place Order: Register While Checkout', async({ page }) =>{    
    await page.goto('https://automationexercise.com');
    const pageTitle = await page.title();
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await page.locator("a[href='/products']").click();
    await checkPageInfo(page);
    const product = page.locator("div.productinfo.text-center a.add-to-cart");
    const countProduct = await product.count();
    console.log('Count Product: ', countProduct)
    for( let i = 0 ; i < countProduct; i++){
        if (!(await product.nth(i).isVisible())){
            console.log(`Product ${i} not available`);
            continue;
        }
        await product.nth(i).click();
        await page.locator(".btn.btn-success.close-modal.btn-block").click();
    };
    await page.locator(".nav.navbar-nav a[href='/view_cart']").click();
    await checkPageInfo(page);
    await page.locator(".btn.btn-default.check_out").click();
    await page.locator("div[class='modal-body'] a").click();
    await page.getByPlaceholder('Name').fill('Simeon Toriya');
    await page.locator("input[data-qa='signup-email']").fill('simeon@gmail.com');
    await page.locator("button[data-qa='signup-button']").click();
    await page.locator("#id_gender1").click();
    await page.locator("#password").fill('123456simeon');
    await page.locator('#days').selectOption('10');
    await page.locator('#months').selectOption('10');
    await page.locator('#years').selectOption('2010');
    await page.locator("#newsletter").check();
    await page.locator("#optin").check();
    await page.locator("#first_name").fill('Simeon');
    await page.locator("#last_name").fill('Toriya');
    await page.locator("#company").fill('XYZ Company');
    await page.locator("#address1").fill('Jalan Jambu No 17 Gang Mangga, Bekasi, Jawa Barat');
    await page.locator("#country").selectOption('United States');
    await page.locator("#state").fill('Test state');
    await page.locator("#city").fill('Test city');
    await page.locator("#zipcode").fill('123456');
    await page.locator("#mobile_number").fill('082123456789');
    await page.locator("button[data-qa='create-account']").click();
    await expect(page.getByText('Account Created!')).toBeVisible();
    await page.locator(".btn.btn-primary").click();
    await expect(page.getByText('Logged in as Simeon Toriya')).toBeVisible();
    await page.locator(`//ul[@class='nav navbar-nav']//li//a[@href='/view_cart']`).click();
    await page.locator('.btn.btn-default.check_out').click();
    const addressDelivery = await page.locator('#address_delivery').innerText();
    const addressBilling = await page.locator("#address_invoice").innerText()
    console.log('-----Your delivery address-----');
    console.log(addressDelivery);
    console.log('-----Your billing address-----');
    console.log(addressBilling);
    const productCart = page.locator(`a[href^='/product_details/']`);
    const productCartCount = await productCart.count();
    let productCartList = [];
    for (let i = 0; i < productCartCount; i++) {
        const productCartName = await productCart.nth(i).textContent();
        const productCartCategory = await page.locator(`td.cart_description p`).nth(i).textContent();
        const productCartPrice = await page.locator(`td.cart_price p`).nth(i).textContent();
        const productCartQty = await page.locator(`td.cart_quantity button`).nth(i).textContent();
        const productCartTotal = await page.locator(`td.cart_total p`).nth(i).textContent();
        productCartList.push({
            name: productCartName.trim(),
            category: productCartCategory.trim(),
            price: productCartPrice.trim(),
            qty: productCartQty.trim(),
            totalPrice: productCartTotal.trim()
        });
    }
    productCartList.forEach((product, index) => {
        console.log(`\n---------- Product ${index + 1} ----------`);
        console.log(`Product Name: ${product.name}`);
        console.log(`Product Category: ${product.category}`);
        console.log(`Price: ${product.price}`)
        console.log(`Quantity : ${product.qty}`)
        console.log(`Total Price : ${product.totalPrice}`)
    });
    await page.locator(".btn.btn-default.check_out").click();
    await page.locator('[data-qa="name-on-card"]').fill('Simeon Toriya1');
    await page.locator('[data-qa="card-number"]').fill('234567890');
    await page.locator('[data-qa="cvc"]').fill('123');
    await page.locator('[data-qa="expiry-month"]').fill('12');
    await page.locator('[data-qa="expiry-year"]').fill('2027');
    await page.locator("#submit").click();
    await expect(page.getByText('Congratulations! Your order')).toBeVisible();
    await page.locator("a[href='/delete_account']").click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
});
test('TC15 Place Order: Register before Checkout', async({ page}) =>{
    await page.goto('https://automationexercise.com');
    const pageTitle = await page.title();
    async function checkPageInfo(page) {
        const pageTitle = await page.title();
        const pageUrl = page.url();
        console.log('Page title is:', pageTitle);
        console.log('Page URL is:', pageUrl);
    };
    await checkPageInfo(page);
    await page.locator("a[href='/login']").click();
    await checkPageInfo(page);
    await expect (page.locator('.signup-form h2')).toHaveText('New User Signup!');
    await page.locator('[data-qa="signup-name"]').fill('User Dummy')
    await page.locator('[data-qa="signup-email"]').fill('userdummyotomesen@gmail.com');
    await page.locator('[data-qa="signup-button"]').click();
    await expect (page.locator(".login-form b:has-text('Enter Account Information')")).toBeVisible();
    await page.locator('#uniform-id_gender2').check();
    await page.locator('#password').fill('Test_123');
    await page.locator('#days').selectOption('1');
    await page.locator('#months').selectOption('1');
    await page.locator('#years').selectOption('1999');
    await page.locator('#newsletter').check();
    await page.locator('#optin').check();
    await page.locator('#first_name').fill('QA');
    await page.locator('#last_name').fill('Test');
    await page.locator('#company').fill('XYC ');
    await page.locator('#address1').fill('Jalan Jambu No 29');
    await page.locator('#address2').fill('Jalan Mangga No 30');
    await page.locator('#country').selectOption('United States');
    await page.locator('#state').fill('Dummy state');
    await page.locator('#city').fill('Dummy city');
    await page.locator('#zipcode').fill('123456');
    await page.locator('#mobile_number').fill('081234567890');
    await page.locator("[data-qa='create-account']").click();
    await expect(page.locator("h2[class='title text-center'] b")).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
    await expect(page.getByText('Logged in as User Dummy')).toBeVisible();
    const product = page.locator("div.productinfo.text-center a.add-to-cart");
    const countProduct = await product.count();
    console.log('Count Product: ', countProduct)
    for( let i = 0 ; i < countProduct; i++){
        if (!(await product.nth(i).isVisible())){
            console.log(`Product ${i} not available`);
            continue;
        }
        await product.nth(i).click();
        await page.locator(".btn.btn-success.close-modal.btn-block").click();
    };
    await page.locator(".nav.navbar-nav a[href='/view_cart']").click();
    await checkPageInfo(page);
    await page.locator(".btn.btn-default.check_out").click();
    const addressDelivery = await page.locator('#address_delivery').innerText();
    const addressBilling = await page.locator("#address_invoice").innerText()
    console.log('----------------');
    console.log(addressDelivery);
    console.log('----------------');
    console.log(addressBilling);
    const productCart = page.locator(`a[href^='/product_details/']`);
    const productCartCount = await productCart.count();
    let productCartList = [];
    for (let i = 0; i < productCartCount; i++) {
        const productCartName = await productCart.nth(i).textContent();
        const productCartCategory = await page.locator(`td.cart_description p`).nth(i).textContent();
        const productCartPrice = await page.locator(`td.cart_price p`).nth(i).textContent();
        const productCartQty = await page.locator(`td.cart_quantity button`).nth(i).textContent();
        const productCartTotal = await page.locator(`td.cart_total p`).nth(i).textContent();
        productCartList.push({
            name: productCartName.trim(),
            category: productCartCategory.trim(),
            price: productCartPrice.trim(),
            qty: productCartQty.trim(),
            totalPrice: productCartTotal.trim()
        });
    }
    productCartList.forEach((product, index) => {
        console.log(`\n---------- Product ${index + 1} ----------`);
        console.log(`Product Name: ${product.name}`);
        console.log(`Product Category: ${product.category}`);
        console.log(`Price: ${product.price}`)
        console.log(`Quantity : ${product.qty}`)
        console.log(`Total Price : ${product.totalPrice}`)
    });
    await page.locator("textarea[name='message']").fill('Test checkout user dummy');
    await page.locator(".btn.btn-default.check_out").click()
    await page.locator('[data-qa="name-on-card"]').fill('User Dummy');
    await page.locator('[data-qa="card-number"]').fill('234567890');
    await page.locator('[data-qa="cvc"]').fill('123');
    await page.locator('[data-qa="expiry-month"]').fill('12');
    await page.locator('[data-qa="expiry-year"]').fill('2027');
    await page.locator("#submit").click();
    await expect(page.locator("div[class='col-sm-9 col-sm-offset-1'] p")).toHaveText('Congratulations! Your order has been confirmed!')
    await page.locator("a[href='/delete_account']").click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();

});