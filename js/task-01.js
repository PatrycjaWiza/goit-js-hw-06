const categoryCount = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoryCount}`);

const elementName = document.querySelectorAll('h2').forEach((e)=>
{console.log(`Category: ${e.textContent}`)
console.log(`Elements: ${document.querySelectorAll('ul li').length}`) 
}
);





// console.log(`Elements: ${elementCount}`);