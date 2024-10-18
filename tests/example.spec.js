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
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Virtualization vs Containerization Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('localhost:4000/IS373_Hexo/VirtualizationVsContainerization/');
  });

  test('There should be a section labeled "Virtualization vs. Containerization"', async ({ page }) => {
    // Ensure the section header exists and contains the correct text
    await expect(page.locator('.article-header')).toHaveText(/Virtualization vs. Containerization/);
  });

  test('Content should explain the difference between virtualization and containerization with key terms', async ({ page }) => {
    const articleContent = page.locator('.article-inner');
    
    await expect(articleContent).toHaveText(/hypervisor/i);
    await expect(articleContent).toHaveText(/virtual machine/i);
    await expect(articleContent).toHaveText(/operating system/i);
    await expect(articleContent).toHaveText(/resource/i);
  });

  test('Content should explain benefits and drawbacks with specific terms and comparisons', async ({ page }) => {
    const articleContent = page.locator('.article-inner');

    await expect(articleContent).toHaveText(/scalability/i);
    await expect(articleContent).toHaveText(/efficiency/i);
    await expect(articleContent).toHaveText(/deployment/i);
    
    await expect(articleContent).toHaveText(/strong isolation/i);
    await expect(articleContent).toHaveText(/each VM runs independently/i);

    await expect(articleContent).toHaveText(/deploy multiple apps/i);
    await expect(articleContent).toHaveText(/containers virtualize the OS/i);
  });
  test.describe('Docker vs. Kubernetes Page tests', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('localhost:4000/IS373_Hexo/DockerVsKubernetes/');
    });
  
    test('There should be a section titled "Docker vs Kubernetes"', async ({ page }) => {
      await expect(page.locator('.article-header')).toHaveText(/Docker vs Kubernetes/);
    });
  
    test('Content should include key terms: "container" for Docker and "orchestration" for Kubernetes', async ({ page }) => {
      await expect(page.locator('.article-inner')).toHaveText(/container/i);
      await expect(page.locator('.article-inner')).toHaveText(/orchestration/i);
    });
  
    test('Content should include key terms: "scaling", "deployment", "integration", "lightweight", and "resource management"', async ({ page }) => {
      await expect(page.locator('.article-inner')).toHaveText(/scaling/i);
      await expect(page.locator('.article-inner')).toHaveText(/deployment/i);
      await expect(page.locator('.article-inner')).toHaveText(/integration/i);
      await expect(page.locator('.article-inner')).toHaveText(/lightweight/i);
      await expect(page.locator('.article-inner')).toHaveText(/resource management/i);
    });
  
    test('There should be sections titled "Advantages of Docker" and "Advantages of Kubernetes"', async ({ page }) => {
      await expect(page.locator('.article-inner')).toHaveText(/Advantages of Docker/);
      await expect(page.locator('.article-inner')).toHaveText(/Advantages of Kubernetes/);
    });
  
    test('Docker should be described as better for "small-scale projects" and Kubernetes for "large-scale demands"', async ({ page }) => {
      await expect(page.locator('.article-inner')).toHaveText(/small-scale projects/i);
      await expect(page.locator('.article-inner')).toHaveText(/large-scale demands/i);
    });
  
    test('Docker should be described as a "more lightweight option" for developers', async ({ page }) => {
      await expect(page.locator('.article-inner')).toHaveText(/more lightweight option/i);
    });
  
  });
  
});
});