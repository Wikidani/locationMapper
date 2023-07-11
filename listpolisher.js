const fs = require('fs');

function processFile(filePath) {
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

  const updatedLines = lines.filter(line => !line.includes('[""]'));

  const updatedContent = updatedLines.join('\n');

  fs.writeFileSync(filePath, updatedContent, 'utf-8');

  console.log(`File '${filePath}' processed successfully.`);
}

// Provide the file path as a variable
const filePath = 'test.json'; // Replace with the actual file path

processFile(filePath);
