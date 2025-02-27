import { test, expect} from '@playwright/test';

test('Register User', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
    await page.getByPlaceholder('Name').fill('Dummyuser');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('jayajayatesting123@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await expect(page.getByText('Enter Account Information')).toBeVisible();
    await page.getByLabel('Mrs.').check();
    await page.getByLabel('Password *').fill('Test_123');
    await page.locator('#days').selectOption('1');
    await page.locator('#months').selectOption('1');
    await page.locator('#years').selectOption('1999');
    await page.getByLabel('Sign up for our newsletter!').check();
    await page.getByLabel('Receive special offers from').check();
    await page.getByLabel('First name *').fill('QA');
    await page.getByLabel('Last name *').fill('Test');
    await page.getByLabel('Company', { exact: true }).fill('XYC ');
    await page.getByLabel('Address * (Street address, P.').fill('Jalan Jambu No 29');
    await page.getByLabel('Address 2').fill('Jalan Mangga No 30');
    await page.getByLabel('Country *').selectOption('United States');
    await page.getByLabel('State *').fill('Dummy State');
    await page.getByLabel('City *').fill('Dummy City');
    await page.getByLabel('Mobile Number *').fill('081234567890');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.locator('#zipcode').fill('123456');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.getByText('Account Created!')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page.getByText('Logged in as Dummyuser')).toBeVisible();
    await page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
});
test('Login user with correct email & password', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('siahaanelsa3@gmail.com');
    await page.getByPlaceholder('Password').fill('123abc');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Logged in as QA_Test')).toBeVisible();
});
test('Login user with incorrect email & password', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('testincorrect@gmail.com');
    await page.getByPlaceholder('Password').fill('incorrect_password');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Your email or password is')).toBeVisible();
});
test('Logout User', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('siahaanelsa3@gmail.com');
    await page.getByPlaceholder('Password').fill('123abc');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Logged in as QA_Test')).toBeVisible();
    await page.getByRole('link', { name: ' Logout' }).click();
    await expect(page).toHaveURL(/.*login.*/);
});
test('Register user with existing email', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
    await page.getByPlaceholder('Name').fill('QA_Tester');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('siahaanelsa3@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
});
test('Contact Us Form', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Contact us' }).click();
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    await page.getByPlaceholder('Name').fill('QA_Test');
    await page.getByPlaceholder('Email', { exact: true }).fill('siahaanelsa3@gmail.com');
    await page.getByPlaceholder('Subject').fill('Test contact us form');
    await page.getByPlaceholder('Your Message Here').fill('Hello, I recently made a purchase on your website, but I am facing an issue. The product I received does not match the description on your website, and I would like to request a refund or an exchange. I have attached some images as proof of the issue. Additionally, I tried contacting your support team via phone, but I was unable to reach anyone. Please assist me as soon as possible. Thank you.');
    await page.locator('input[name="upload_file"]').setInputFiles('./tests/fixtures/file_test.png');
    page.on('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: 'Submit' }).click()
    await expect(page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();
    await page.getByRole('link', { name: ' Home' }).click();
});
test('Verify Test Case Page', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Test Cases' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/test_cases')
    await expect(page.locator('b')).toBeVisible();
    await expect(page.getByText('Below is the list of test')).toBeVisible();
});
test('Verify All Product and Product Detail Page', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/products')
    await expect(page.getByRole('img', { name: 'Website for practice' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'All Products  Added! Your' }).nth(2)).toBeVisible();
    await expect(page.locator('.features_items > div:nth-child(3)')).toBeVisible();
    await page.locator('.choose > .nav > li > a').first().click();
    await expect(page).toHaveURL('https://automationexercise.com/product_details/1')
    await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
    await expect(page.getByText('Category: Women > Tops')).toBeVisible();
    await expect(page.getByText('Rs.')).toBeVisible();
    await expect(page.getByText('Availability: In Stock')).toBeVisible();
    await expect(page.getByText('Condition: New')).toBeVisible();
    await expect(page.getByText('Brand: Polo')).toBeVisible();
});
test('Search Product', async ({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/products')
    await expect(page.getByRole('img', { name: 'Website for practice' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'All Products  Added! Your' }).nth(2)).toBeVisible();
    await page.getByPlaceholder('Search Product').fill('Men Tshirt');
    await page.getByRole('button', { name: '' }).click();
    await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
    await expect(page.getByText('Men Tshirt').nth(2)).toContainText(/Men Tshirt/);
});
test('Verify Subscription in home page', async({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
    await page.getByPlaceholder('Your email address').fill('siahaanelsa3@gmail.com');
    await page.getByRole('button', { name: '' }).click();
    await expect(page.getByText('You have been successfully')).toBeVisible();
});
test('Verify Subscription in Cart Page', async({ page }) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    await page.getByRole('link', { name: ' Cart' }).click();
    await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
    await page.getByPlaceholder('Your email address').fill('siahaanelsa3@gmail.com');
    await page.getByRole('button', { name: '' }).click();
    await expect(page.getByText('You have been successfully')).toBeVisible();
});
