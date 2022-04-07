const currentArr = [
    {
       value: 'Пункт 1.',
       children: null,
    },
    {
       value: 'Пункт 2.',
       children: [
          {
             value: 'Подпункт 2.1.',
             children: null,
          },
          {
             value: 'Подпункт 2.2.',
             children: [
                {
                   value: 'Подпункт 2.2.1.',
                   children: null,
                },
                {
                   value: 'Подпункт 2.2.2.',
                   children: null,
                }
             ],
          },
          {
             value: 'Подпункт 2.3.',
             children: null,
          }
       ]
    },
    {
       value: 'Пункт 3.',
       children: null,
    }
  ];

  function createList(arr){
    if (arr === null) return;

    let ul = document.createElement('ul');

    arr.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<span>${element.value}</span>`
        li.style.border = '1px solid gray';
        let childrenUl = createList(element.children);
        if (childrenUl) {
            li.append(childrenUl);
            childrenUl.style.fontSize = '0.9em';
        }
        ul.append(li);
    });

    return ul;
  }

  document.body.append(createList(currentArr))

  window.addEventListener('load', handleListener);

  function removeElement(event){
      if (event.target.nextElementSibling.style.display === 'none'){
         event.target.nextElementSibling.style.display = 'block';
      } else if (event.target.tagName === 'SPAN'){
         event.target.nextElementSibling.style.display = 'none';
      }
  }

  function handleListener(event){
     const ul = document.querySelector('ul');
     ul.addEventListener('click', removeElement);
  }
  