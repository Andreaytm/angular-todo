function absoluteUrl(url) {
      var urlParsingNode = document.createElement("a");
      urlParsingNode.setAttribute("href", url);
      return urlParsingNode.href;
    }

    function stripQuery(url) {
      return url.replace(/\?[^?]*/, '');
    }

    var baseElement = document.getElementsByTagName('base')[0];
    var baseUrl = absoluteUrl(baseElement ? baseElement.getAttribute('href') : '/');
    var currentUrl = stripQuery(location.href);

    console.log(baseUrl, currentUrl);

    if (currentUrl + '/' === baseUrl) {
      var newUrl = location.href.replace(currentUrl, baseUrl);
      console.log('do redirect to', newUrl);
      location.href = newUrl;
    }