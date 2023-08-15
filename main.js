document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const searchBar = document.getElementById("searchBar")
  
  searchBar.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
  })
  searchButton.addEventListener('click', function () {
    const searchTerm = searchBar.value;
    if (searchTerm) {
      searchLink = "https://en.wikipedia.org/wiki/Special:Search?go=Go&search=" + searchTerm;
      chrome.tabs.create({url: searchLink});
      }
    }
  )
})