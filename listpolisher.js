const fs = require('fs');

const filePath = 'places.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Split the file content into an array of lines
  const lines = data.split('\n');

  // Process each line and convert it into a JSON object
  const jsonArray = lines.map(line => {
    // Remove extra whitespace from the line
    const trimmedLine = line.trim();

    // Extract the values from the line
    const [name, value] = trimmedLine.split(' ');

    // Create an object
    return {
      name: name.replace(/[""]/g, '').trim(),
      value: parseInt(value)
    };
  });

  // Convert the array to JSON
  const jsonString = JSON.stringify(jsonArray, null, 2);

  // Write the resulting JSON to a new file
  const outputFilePath = 'a.json';
  fs.writeFile(outputFilePath, jsonString, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('JSON file created successfully!');
  });
});
