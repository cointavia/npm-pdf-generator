const axios = require('axios').default;

async function cointaviaPDF(file_name,html_string) {

  const options = {
                   headers: {
                              'Authorization': '',
                              'Content-Type' : 'application/json'
                            }
                  };
    
    await axios
           .post('https://pdf.cointavia.com/api/v1/generate-PDF', {
              fileName: file_name,
              htmlString: html_string
            },
            options)
            .then(function (response) {
               console.log(response.data);
               return response.data;
            })
            .catch(function (error) {
                console.log(error.response.data);
                return error.response.data
                // console.error(error.message) 
                // Promise.resolve([undefined, error])
                // console.log(Promise.resolve(error.response.data))
            });

  };
  
  
module.exports = cointaviaPDF;

//console.log(cointaviaPDF("hello","world"))