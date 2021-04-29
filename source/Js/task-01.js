const categoriesEl = document.getElementById('categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);
for (let i = 0; i < categoriesEl.children.length; i++) {
    const el = categoriesEl.children[i];
    const h2 = el.getElementsByTagName('h2');
    console.log(`Категория: ${h2[0].innerText}`);
    console.log(`Количество элементов: ${el.getElementsByTagName('li').length}`);
}


