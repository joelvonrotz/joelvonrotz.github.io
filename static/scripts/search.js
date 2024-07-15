/* VARIABLES ------------------------------------------------------------------------- */


/* UTILITY FUNCTION ------------------------------------------------------------------ */
// So results are not processed instantly but with a delay
function debounce(func, wait) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

async function fetchPostsJSON() {
  const response = await fetch("/search_index.en.json");
  const posts = await response.json();
  return posts;
}

function formatSearchResultItem(item, terms) {
  return `<a href="${item.url}">${item.title}</a>`; //+ `<div>${makeTeaser(item.doc.body, terms)}</div>`;
}


function initSearch() {
  var search_fuse = null; // Fuse Object
  var $searchInput = document.getElementById("search-input");
  var $searchResults = document.querySelector(".search-results");
  var $searchResultsItems = document.querySelector(".search-results-items");
  var MAX_ITEMS = 10;

  const fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: true,
    // shouldSort: true,
    includeMatches: true, // for highlighting purposes
    findAllMatches: true,
    minMatchCharLength: 2,
    // location: 0,
    threshold: 0.5,
    // distance: 100,
    useExtendedSearch: true,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
      'title',
      'url',
      'description',
      'body'
    ]
  };

  var currentTerm = "";
  var index;

  // build index from the search index json file
  fetchPostsJSON().then(posts => {
    search_fuse = new Fuse(posts, fuseOptions);
    $searchInput.addEventListener("keyup", debounce(function () {
      var term = $searchInput.value;
      if (term === currentTerm) {
        return;
      }

      $searchResultsItems.innerHTML = "";
      currentTerm = term;
      if (term === "") {
        return;
      }

      var results = search_fuse.search(term);

      for (var i = 0; i < Math.min(results.length, MAX_ITEMS); i++) {
        var item = document.createElement("li");
        console.log(results[i]);
      }

      for (var i = 0; i < Math.min(results.length, MAX_ITEMS); i++) {
        var item = document.createElement("li");
        item.innerHTML = formatSearchResultItem(results[i].item, term.split(" "));
        $searchResultsItems.appendChild(item);
      }


      //var results = (await initIndex()).search(term, options);
      //if (results.length === 0) {
      //  $searchResults.style.display = "none";
      //  return;
      //}
      //

    }, 150));
  });
}





/* START UP SEQUENCE ----------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", initSearch);



