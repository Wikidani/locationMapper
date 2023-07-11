const request = require('request');
const fs = require('fs');

function numGen() {
  const startNum = 27965; //17315
  const endNum = 39000; //27965
  const delayMs = 100; // Delay in milliseconds (adjust as needed)

  const options = {
    method: 'GET',
    url: '',
    headers: {}
  };

  let counter = startNum;

  function makeRequest() {
    options.url = `https://ahiva.correo.com.uy/servicioConsultaTntIps-ws/seguimientoEnvios/sucursal?codigoSucursal=${counter}`;

    request(options, function (error, response) {
      if (error) throw new Error(error);

      const responseBody = response.body + " " +  counter + '\n' ; // Append a newline character

      fs.appendFile('test.json', responseBody, function (err) {
        if (err) throw new Error(err);
        console.log(`Response saved for counter ${counter}`);
      });

      counter++;

      if (counter <= endNum) {
        setTimeout(makeRequest, delayMs);
      }
    });
  }

  makeRequest();
}

// Calling the numGen function
numGen();
