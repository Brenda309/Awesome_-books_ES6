const add = () => {
  if (localStorage.Books) {
    for (let i = 0; i < JSON.parse(localStorage.Books).length; i += 1) {
      const ul = document.getElementById('books');
      const addTitle = document.createElement('p');
      const li = document.createElement('li');
      const addAuthor = document.createElement('p');
      const rmvButton = document.createElement('button');

      ul.className = 'books';

      li.id = `${i}`;
      li.className = 'myBooks';
      li.style.listStyle = 'none';

      addTitle.innerHTML = JSON.parse(localStorage.Books)[i].title;
      addTitle.innerText += ' by ';
      li.appendChild(addTitle);

      addAuthor.innerHTML = JSON.parse(localStorage.Books)[i].author;
      li.appendChild(addAuthor);

      rmvButton.innerHTML = 'Remove';
      rmvButton.id = `btn${i}`;
      rmvButton.className = 'rmv';
      li.appendChild(rmvButton);

      ul.appendChild(li);
    }
  }
};

export default add;

