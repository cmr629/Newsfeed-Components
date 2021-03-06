// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");
    this.expandButtonText = ["expand", "close"];
    this.expandTextToggle = 0;
    this.domElement.classList.toggle("article-close");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = this.expandButtonText[
      this.expandTextToggle
    ];

    this.domElement.setAttribute("tabindex", "0"); //needed to use blur

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.domElement.addEventListener("blur", this.blurArticle.bind(this));
    this.domElement.addEventListener("click", this.expandArticle.bind(this));
    this.domElement.addEventListener("keydown", this.keyDownArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    this.domElement.classList.toggle("article-close");
    this.expandTextToggle = (this.expandTextToggle + 1) % 2; //Toggle button text
    this.expandButton.textContent = this.expandButtonText[
      this.expandTextToggle
    ];
  }

  blurArticle() {
    if (this.domElement.classList.contains("article-open")) {
      this.domElement.classList.toggle("article-open");
      this.domElement.classList.toggle("article-close");
      this.expandButton.textContent = this.expandButtonText[0]; //Set button back to close
      this.expandTextToggle = 0;
    }
  }

  keyDownArticle(event) {
    if (event.keyCode === 32) {
      //spacebar pressed
      this.domElement.classList.toggle("article-open");
      this.domElement.classList.toggle("article-close");
      this.expandTextToggle = (this.expandTextToggle + 1) % 2; //Toggle button text
      this.expandButton.textContent = this.expandButtonText[
        this.expandTextToggle
      ];
    }
  }
}

/* START HERE: s

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");
articles.forEach(article => {
  return new Article(article);
});
