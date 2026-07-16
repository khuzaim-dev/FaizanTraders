const https = require('https');
const fs = require('fs');

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const html1 = await fetchHtml('https://autocj.co.jp/');
    const urls = [];
    
    // Regex to match image urls from autocj
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = imgRegex.exec(html1)) !== null) {
      if (match[1].includes('.jpg') || match[1].includes('.png')) {
        let u = match[1];
        if (u.startsWith('/')) u = 'https://autocj.co.jp' + u;
        if (!urls.includes(u)) urls.push(u);
      }
    }
    
    fs.writeFileSync('extracted_images.json', JSON.stringify(urls, null, 2));
    console.log('Extracted ' + urls.length + ' images');
  } catch (e) {
    console.error(e);
  }
}
run();
