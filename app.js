document.addEventListener('DOMContentLoaded', function(){

  const list = document.querySelector('#book-list ul');
  const forms = document.forms;

  //delete books
  list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      li.parentNode.removechild(li);
    }
  });

  //add books
  const addForm = forms['add-book'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    //create element
    const value = addForm.querySelector('input[type="text"]').value();
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBin = document.createElement('span');

    //add text content
    const addForm = forms['add-book'];
    addForm.addEventListener('submit',function(e) {
      e.preventDefault();

      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const bookName = document.createElement('span');
      const deleteBtn = document.createElement('span');

      // add text content
      bookName.textContent = value;
      deleteBtn.textContent = 'delete';

      // add classes
      bookName.classList.add('name');
      deleteBtn.classList.add('delete');

      // append to DOM
      li.appendChild('bookName');
      li.appendChild('deleteBtn');
      list.appendCHild(li);
    });

    // hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e) {
      if (hideBox.checked) {
        list.style.display = 'none';
      }else{
        list.style.display = 'initial';
      }
    });

    // filter books
    const searchBar = forms['search-books'].querySelector('input');
    searchBar.addEvenetListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const books = list.getElementByTagName('li');
      Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(e.target.value) != -1) {
          book.style.display = 'block';
        }else{
          book.style.display = 'none';
        }
      });
    });

    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelector('.panel');
    tabs.addEventListener('click', (e) => {
      if (e.target.tagName = 'LI') {
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if (panel = targetPanel) {
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });
  });

// });
