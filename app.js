const list = document.querySelector('#book-list ul');

list.addEventListener('click' , (e) => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    console.log(li);
    li.parentNode.removeChild(li);
  }
});
