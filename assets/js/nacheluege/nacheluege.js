/**
 * Element, that allows to filter posts
 * @param {String} idInput ID of the Input-Element
 * @param {String} idResults ID of the Results-Element
 * @param {String} pathJson Path to the JSON-based post-list
 */
function Nacheluege (idInput, idResults, pathJson) {
  // ! INIT
  const _elInput = document.getElementById(idInput)
  _elInput.disabled = true

  const _elResult = document.getElementById(idResults)
  const _pathJson = pathJson
  var _listArticles = []

  var request = new XMLHttpRequest()
  request.addEventListener('readystatechange', event => {
    if (request.readyState === 4 && request.status === 200) {
      _elInput.disabled = false
      _listArticles = JSON.parse(request.responseText)

      // once list is loaded successfully, attach event to input field (enables filtering)
      _elInput.addEventListener('input', function () {
        // ! EVENT
        var searchTerms = splitSearchTerms(_elInput.value)
        var articleList = _listArticles

        filter(articleList, searchTerms, function (results) {
          // ! RENDER
          if (searchTerms.length === 0) {
            render([], true)
          } else {
            render(results)
          }
        })
      })
    } else if (request.status === 404) {
      console.log('Defined JSON-File can\'t be found, check if the path to the file is correctly defined!')
    }
  })
  request.open('GET', _pathJson, true)
  request.send()

  // - FUNCTIONS -

  /**
   * Filters an array of articles based on an array of articles. After the posts are filtered, the callback is called with the results as a parameter.
   * @param {Array} articleList Array of articles (minimum of keys are 'url' & 'title', as those keys are later used)
   * @param {Array} searchTerm Array of multiple strings that are used to filter the array of articles
   * @param {Function} callback Function that is called after all articles are filtered.
   */
  function filter (articleList, searchTerm, callback) {
    var filteredArticleList = articleList.filter((article, index, array) => {
      var articleInline = String(article.title + article.category + article.tags + article.date)
      var isConcurring = true
      searchTerm.forEach(term => {
        isConcurring = RegExp(term, 'i').test(articleInline) & isConcurring
      })
      return isConcurring
    })

    callback(filteredArticleList)
  }

  /**
   * Separates a given string into smaller strings. Separation occurs every space -> ' '. This therefore returns an array of the split strings.
   * @param {String} searchTerm A string that needs to be split
   */
  function splitSearchTerms (searchTerm) {
    var string = String(searchTerm)
    var termArray = string.split(' ')

    return termArray.filter(Boolean)
  }

  /**
   * Renders the innerHTML of the Results-field with an array of articles.
   * @param {array} articleList Array of articles objects (each object requires 'url' and 'title')
   */
  function render (articleList, clear = false) {
    console.log(articleList)
    _elResult.innerHTML = ''
    if (!clear) {
      articleList.forEach((article, index) => {
        _elResult.innerHTML += '<div class="result-element card"><h3>' + article.title + '</h3>' + '<p><a href="' + article.url + '">' + window.location.host + article.url + '</a></p></div>'
      })
    }
  }
}
