import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  console.log("Looking for local Chrome installation...");
  const paths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Users\\Vaishnav Temgire\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
  ];
  
  let executablePath = undefined;
  for (const p of paths) {
    if (fs.existsSync(p)) {
      executablePath = p;
      console.log(`Found local Chrome at: ${p}`);
      break;
    }
  }
  
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  console.log("Setting viewport...");
  await page.setViewport({ width: 1440, height: 900 });
  
  console.log("Navigating to http://localhost:5173/ ...");
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 });
  
  console.log("Waiting 12 seconds for the intro sequence...");
  await new Promise(resolve => setTimeout(resolve, 12000));
  
  const outputPath = 'C:/Users/Vaishnav Temgire/.gemini/antigravity-ide/brain/87edf02f-bd42-4004-ae44-6d9435dd4ba7/screenshot_output_timeline.png';
  console.log(`Taking screenshot and saving to: ${outputPath}`);
  await page.screenshot({ path: outputPath, fullPage: false });
  
  console.log("Closing browser...");
  await browser.close();
  console.log("Screenshot saved successfully!");
})();
