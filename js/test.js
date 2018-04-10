function() {
      var indexFile = (location.pathname.match(/\/(index[^\.]*\.html)/) || ['', ''])[1],
          rUrl = /(#!\/|api|guide|misc|tutorial|error|index[^\.]*\.html).*$/,
          baseUrl = location.href.replace(rUrl, indexFile),
          production = location.hostname === 'angular-todo.org',
          headEl = document.getElementsByTagName('head')[0],
          sync = true;
        }