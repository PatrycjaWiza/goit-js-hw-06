const categoryCount = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoryCount}`);

const elementName = document.querySelectorAll('li.item h2').forEach((e)=>{
    console.log(`Category: ${e.textContent}`)
}
);

// brakuje elements count!!!