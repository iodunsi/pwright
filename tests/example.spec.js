// @ts-check
const { test, expect } = require('@playwright/test');

test('There should be a title stating “Student Guide to Docker”', async ({ page }) => {
  await page.goto('localhost:4000');

  // Checking title of landing page
  await expect(page).toHaveTitle(/Student Guide to Docker/);
  
});


test('Check for mention of docker using key terms: check for words “containerization,” “docker image,” and “kernel”', async ({ page }) => {
  await page.goto('https://jhr-4.github.io/IS373_Hexo/README/');

  //Look in the class of the article for key terms
  await expect(page.locator('.article-inner')).toHaveText(/Container/);
  await expect(page.locator('.article-inner')).toHaveText(/Docker Image/);
  await expect(page.locator('.article-inner')).toHaveText(/kernel/);
  
});


test('There should be clickable hyperlinks to all sub pages/articles', async ({ page }) => {
  await page.goto('https://jhr-4.github.io/IS373_Hexo/README/');

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
  await page.locator('.article-inner').locator('#CI-CD-Explained-Setup').getByText('CI/CD Explained & Setup').click();
  await expect(page.locator('.article-header')).toHaveText(/CI\/CD Explained & Setup/);
  await page.locator('#sidebar').getByText(/Home/).click();
  
});