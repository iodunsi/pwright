// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Installation Page tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('localhost:4000/');
  });

  test('There should be a title stating “Student Guide to Docker”', async ({ page }) => {    
    // Checking title of landing page
    await expect(page).toHaveTitle(/Student Guide to Docker/);
  });


  test('Check for mention of docker using key terms: check for words “containerization,” “docker image,” and “kernel”', async ({ page }) => {

    //Look in the class of the article for key terms
    await expect(page.locator('.article-inner')).toHaveText(/Container/);
    await expect(page.locator('.article-inner')).toHaveText(/Docker Image/);
    await expect(page.locator('.article-inner')).toHaveText(/kernel/);
    
  });


  test('There should be clickable hyperlinks to all sub pages/articles', async ({ page }) => {

    //Find page link, click it, check title to see if page works, and then go back

    //Virtualization VS Containerization 
    await page.locator('.article-inner').locator('#Virtualization-vs-Containerization').getByText('Virtualization vs. Containerization').click();
    await expect(page.locator('.article-header')).toHaveText(/Virtualization vs. Containerization/);
    await page.locator('#sidebar').getByText(/Home/).click();

    //Docker vs Kubernetes
    await page.locator('.article-inner').locator('#Docker-vs-Kubernetes').getByText('Docker vs. Kubernetes').click();
    await expect(page.locator('.article-header')).toHaveText(/Docker vs Kubernetes/);
    await page.locator('#sidebar').getByText(/Home/).click();

    //Installation
    await page.locator('.article-inner').locator('#Installation-Process').getByText('Installation Process').click();
    await expect(page.locator('.article-header')).toHaveText(/Installation & Setup/);
    await page.locator('#sidebar').getByText(/Home/).click();

    //CI-CD
    await page.locator('.article-inner').locator('#GitHub-Fork-Actions').getByText('GitHub Fork + Actions').click();
    await expect(page.locator('.article-header')).toHaveText(/Github Collaboration with forks and CI\/CD/);
    await page.locator('#sidebar').getByText(/Home/).click();
    

  });

});

test.describe('Installation Page tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('localhost:4000/IS373_Hexo/InstallationSetup/');
  });

  test('There should be a title “Installation & Setup”', async ({ page }) => {
      await expect(page.locator('.article-header')).toHaveText(/Installation & Setup/);
  });

  test('There should be mention of “WSL” on the page as this is required for windows users', async ({ page }) => {
    await expect(page.locator('.article-inner')).toHaveText(/WSL 2/);
  });

  test('There should be an additional download of “VS Code Extention" mentioned', async ({ page }) => {
    await expect(page.locator('.article-inner')).toHaveText(/VS Code Extention/);
  });
  
  test('There should be a hyperlink to Docker’s official download page', async ({ page }) => {
    await page.locator('a', { hasText: 'Docker Website' }).click();
    await page.goBack();
  });
  
  test('There should be a hyperlink to the VS code extension', async ({ page }) => {
    await page.locator('a', { hasText: 'Extention' }).click();
    await page.goBack();
  });

});