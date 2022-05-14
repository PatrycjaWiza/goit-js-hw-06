const categoryCount = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoryCount}`);

const lis = document.getElementsByClassName("item").getElementsByTagName("li").length;
const elementName = document.querySelectorAll('li.item h2').forEach((e)=>{
    console.log(`Category: ${e.textContent}`)
console.log(lis)
}
);
// const elementCount = document.querySelectorAll('li.item').forEach((e)=>{
//     // console.log(`Elements: ${e.children("li").length}`)
// });


