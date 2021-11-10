const totalCategories = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${totalCategories}`);

const categoryJs = document.querySelectorAll('li.item');
categoryJs.forEach(category => 
    console.log('Category:', category.firstElementChild.textContent, 'Elements:', category.lastElementChild.children.length)
);