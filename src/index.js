//! import "./index.css";
//! probably should have been /src/index.css but wasn't working locally so I added css link to index.html


//* To restart this challenge, delete everything below. Everything but this file was given to me (and I already moved css link to index.html to fix qualified vs local compatibility issue). 


function validateExists(value) {
  return value && value.trim();
}

function validateForm(value) {
  if (!validateExists(value)) {
    return "Please enter a search term";
  }
}

const submitHandler = (event) => {
  event.preventDefault();
  const searchTerm = document.querySelector("#searchTerm").value;
  let error = validateForm(searchTerm);

  if (error) {
    const form = document.querySelector("#searchForm");
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML = `<div class="error" id="searchError">${error}</div>`;
    form.appendChild(errorMessage);
  } else {
    // because there is no new error, create variable for the message that may have already been in the DOM, then clear it.
    oldError = document.querySelector("#searchError");
    if (oldError != null) {
      oldError.remove();
    }

    const articles = document.querySelectorAll("article");
    articles.forEach((article) => {
      const articleTitle = article.querySelector("h2").innerText;
      if (!articleTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
        article.classList.add("hidden");
      } else {
        article.classList.remove("hidden");
      }
    });
  }
};

const main = () => {
  // get the form element
  const form = document.querySelector("#searchForm");
  // attach the submit handler
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);
