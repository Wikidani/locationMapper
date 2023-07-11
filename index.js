const axios = require('axios');
const fs = require('fs');

function numGen() {
  const startNum = 27965;
  const endNum = 39000;
  const delayMs = 100;

  const options = {
    headers: {}
  };

  let counter = startNum;

  function makeRequest() {
    options.url = `https://ahiva.correo.com.uy/servicioConsultaTntIps-ws/seguimientoEnvios/sucursal?codigoSucursal=${counter}`;

    axios.get(options.url, options)
      .then(response => {
        const responseBody = response.data + " " + counter + '\n';

        fs.appendFile('promises.json', responseBody, function (err) {
          if (err) throw new Error(err);
          console.log(`Response saved for counter ${counter}`);
        });

        counter++;

        if (counter <= endNum) {
          setTimeout(makeRequest, delayMs);
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  makeRequest();
}

// Calling the numGen function
numGen();
