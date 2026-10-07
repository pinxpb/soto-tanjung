const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  
  const viewports = [
    {width: 360, height: 800},
    {width: 390, height: 844},
    {width: 768, height: 1024},
    {width: 1440, height: 900},
    {width: 1920, height: 1080}
  ];

  for (const vp of viewports) {
    await page.setViewport(vp);
    await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'networkidle0'});
    
    const rects = await page.evaluate(() => {
      const gun = document.querySelector('.gun').getBoundingClientRect();
      const bowl = document.querySelector('.bowl').getBoundingClientRect();
      const arjuna = document.querySelector('.fig.a').getBoundingClientRect();
      const semar = document.querySelector('.fig.s').getBoundingClientRect();
      
      const intersect = !(gun.right < bowl.left || 
                          gun.left > bowl.right || 
                          gun.bottom < bowl.top || 
                          gun.top > bowl.bottom);
                          
      return {
        intersect,
        gunBottom: gun.bottom,
        bowlTop: bowl.top,
        arjunaHeight: arjuna.height,
        semarHeight: semar.height,
        arjunaVisible: arjuna.top < window.innerHeight,
        semarVisible: semar.top < window.innerHeight,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth
      };
    });
    
    console.log(Viewport x:);
    console.log(  Intersect: );
    console.log(  Gap: px);
    console.log(  Arjuna Height: px, Semar Height: px);
    console.log(  Visible on first screen: Arjuna() Semar());
    console.log(  Horizontal Scroll:  ( vs ));
  }
  
  await browser.close();
})();
