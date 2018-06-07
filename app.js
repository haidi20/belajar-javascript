const books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book) {
  book.textContent += '   (Book title)' ;
});

const bookList = document.querySelectorAll('#book-list');
bookList.innerHtml = '<h2> Books and more books..</h2>';
bookList.innerHtml += '<p>This is how you add HTML content</p>';
