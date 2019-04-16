asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    return new Promise(resolve => {
        resolve(value);
    });
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    let request = new XMLHttpRequest();
      return {
        then: (callback) => {
          request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status >= 200 && request.status < 400) {
              let result = JSON.parse(request.responseText);
              let names = result["people"].map(function(item){
                return item["name"]
              }).sort();
              return callback(names);
            }
          }
          request.open("GET", url, true);
          request.send();
        }
      }
  },
};
