import 'rxjs/add/operator/map';

const https = require('https');

export class MovieApiService   {

  static KEY = '6c3a2d45';
  static TITLE = 'bridge of spies'; // Default house Id

  static serviceURl = `https://www.omdbapi.com/?t=${MovieApiService.TITLE}&apikey=${MovieApiService.KEY}`;

  /*
   * Fetch content from the API
   */
  public static searchByTitle(id, success) {
    if (id) {
      this.serviceURl = `https://www.omdbapi.com/?t=${id}&apikey=${MovieApiService.KEY}`;
    }

    const req = https.request(this.serviceURl, (res) => {
      res.setEncoding('utf-8');
      let responseString = '';

      res.on('data', (d) => {
        responseString += d;
      });

      res.on('end', function() {
        try {
          const result = JSON.parse(responseString);
          success(result);
        } catch (e) {
          console.log(e);
          success('Parse Error');
        }
      });
    });

    req.on('error', (e) => {
      console.error(e);
      return e;
    });

    req.end();
  }

  /*
 * Fetch content from the API
 */
  public static searchByTitleAndPlot(title, plot, success) {
    if (title) {
      this.serviceURl = `https://www.omdbapi.com/?t=${title}&plot=${plot}&apikey=${MovieApiService.KEY}`;
    }
    console.log(this.serviceURl)
    const req = https.request(this.serviceURl, (res) => {
      res.setEncoding('utf-8');
      let responseString = '';

      res.on('data', (d) => {
        responseString += d;
      });

      res.on('end', function() {
        try {
          const result = JSON.parse(responseString);
          success(result);
        } catch (e) {
          console.log(e);
          success('Parse Error');
        }
      });
    });

    req.on('error', (e) => {
      console.error(e);
      return e;
    });

    req.end();
  }
}
