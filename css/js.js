document.addEventListener("DOMContentLoaded", function() {
    var searchForm = document.querySelector("form");
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var searchValue = searchForm.elements.searchInput.value;
    });
    
    var logo = document.querySelector("https://www.receptum.fi/wp-content/themes/receptum/assets/images/logo.svg");
    logo.addEventListener("click", function() {
      window.location.href = "Uppg.html";
    });
    
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var linkUrl = event.target.href;

      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var searchForm = document.querySelector("form");
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var searchValue = searchForm.elements.searchInput.value;
      fetch('https://api.example.com/recipes?q='+searchValue)
      .then(response => response.json())
      .then(data => {

        var featuredRecipes = document.querySelector('#featured-recipes');
        data.forEach(recipe => {
          var recipeElement = document.createElement('li');
          var recipeLink = document.createElement('a');
          recipeLink.href = recipe.link;
          recipeLink.innerHTML = recipe.name;
          recipeElement.appendChild(recipeLink);
          featuredRecipes.appendChild(recipeElement);
        });
      })
      .catch(error => console.log(error))
    });
    
    var logo = document.querySelector("https://www.receptum.fi/wp-content/themes/receptum/assets/images/logo.svg");
    logo.addEventListener("click", function() {
      window.location.href = "Uppg.html";
    });
    
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var linkUrl = event.target.href;

        var main = document.querySelector('main');
        fetch(linkUrl)
        .then(response => response.text())
        .then(data => {
          main.innerHTML = data;
        })
        .catch(error => console.log(error))
      });
    });
  
    var recipeLinks = document.querySelectorAll(Kategorier.html);
    recipeLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var linkUrl = event.target.href;
        var recipeContainer = document.querySelector('#recipe-container');
        fetch(linkUrl)
        .then(response => response.text())
        .then(data => {
          recipeContainer.innerHTML = data;
        })
        .catch(error => console.log(error))
      });
    });
  });
  