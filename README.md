<h1 align="center">Welcome to Cointavia HTML to PDF Generator 👋</h1>

## ✨ Install from the command line:

The CointaviaPDF npm package can be installed via [NPM](https://www.npmjs.com/package/cointavia-html-to-pdf-converter) by requiring the
`cointavia-html-to-pdf-converter` package.

```sh
npm i cointavia-html-to-pdf-converter
```




## ⭐Purchase Api Token

You can purchase api token through [pdf.cointavia.com](https://pdf.cointavia.com/)




### Usage for Vue

In Vue project  you can simply import CointaviaPDF after above command

Example :

```sh
import CointaviaPDF from 'cointavia-html-to-pdf-converter/CointaviaPDF'


export default {

  methods: {
    accessCointaviaApi() {
      const auth_token = "************";
      const fileName = "vueFile";
      const htmlString = "<h1>Hello</h1><p>Node Js</p>";

       CointaviaPDF.generatePDF(auth_token,fileName,htmlString)
    },


  }
}
...


With successfull request Cointavia Api will return

```json
{
    "status": 200,
    "success": {
        "filePath": "Path-To-Download-PDF"
    }
}
```

### Disclaimer
All rights reserved [@cointavia](https://pdf.cointavia.com/)