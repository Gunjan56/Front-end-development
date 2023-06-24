//dom and bom
//document object model
//manipulate html and javasript 
//the html dom is a starndard for how to get change delete and add new elements
//section 1: Selecting elements
//getElementById
// const element = document.getElementById('target');
// console.log(element);
//if element does not exist in document
// const element1 = document.getElementById("gg");
// console.log(element1);//it will return null

//getElementByClassName
const elementClass = document.getElementsByClassName("target");
//it create an array like object so we can access its elements using array methods
// console.log(elementClass[0]);
// console.log(elementClass[1]);
// console.log(elementClass[2]);
// console.log(elementClass[3]);
// console.log(elementClass[4]);

//using for of loop
// for(const i of elementClass){
//     console.log(i);
// }

//getElementByTagName
// const paraElement = document.getElementsByTagName("h1");
// console.log(paraElement);
// const paraTagElement = document.getElementsByTagName("h2");
// console.log(paraTagElement.length);//can get length 
// console.log(paraTagElement[0]);//can access its elements
//using loop
// for(const i of paraTagElement){
//     console.log(i);
// }

//querySelector(): selects the first element
// const querySelection = document.querySelector("#target1");
// const querySelection2 = document.querySelector("#target2");
// const querySelection3 = document.querySelector(".gg");
// console.log(querySelection3);

//can access parent child elements
// const querySelection4 = document.querySelector("#divider #target1");
// console.log(querySelection4);
//grouping selector
// const querySelection5 = document.querySelector("#divider1, #divider2, #divider3");
// console.log(querySelection5);//return only first

//querySelectorAll()
// const querySelection6 = document.querySelectorAll("#divider1, #divider2, #divider3");
// console.log(querySelection6);//return all 
// console.log(querySelection6.length);
//can access coz it makes a array like object
// console.log(querySelection6[0]);
// for(let i of querySelection6){
//     console.log(i);
// }

//nodelist vs htmlcollection
//select Element => Htmlcollection => collection of document elements and tags
//select by querySlector => nodeList => collection of document nodes (element nodes, attribute
// , and text nodes)
// const nodeList = document.querySelector(".target");
// const child = nodeList.childNodes;
// console.log(child);

//htmlCollection
// const htmlCollection = document.getElementsByTagName("p");
// console.log(htmlCollection);

//section 2 => Traversing elements
// const note = document.querySelector("#note");
// select parent element
// console.log(note.parentNode);//read-only
// console.log(note.parentElement);
// const child = note.parentNode;
// const child1 = note.parentElement;
// console.log(child1);

//Getting child element of a node
//childNode
// const parent = document.querySelector(".main");
// const child = parent.childNodes;//nodeList
// console.log(child);
//childern
// const child2 = parent.children;//HtmlCollection
// console.log(child2);

//child node return comment, text and other nodes also
//filter chilNodes = return array like nodelist collection
// let childNodes = parent.childNodes;
// console.log(Array.from(childNodes).filter((node) => node.nodeType === Node.ELEMENT_NODE));

//getting elements sibling
// const current = document.querySelector(".noteImportant");
// console.log(current.nextSibling);//nodeList
// console.log(current.nextElementSibling);//html collection
// console.log(current.previousSibling);
// console.log(current.previousElementSibling);
//Question
/*Given the following html code copy that in your ide 
<div class="parent">
        <p class="child">Lorem ipsum dolor sit amet consectetur.</p>
        <p class="child">Lorem ipsum dolor sit amet consectetur.</p>
        <p class="child">Lorem ipsum dolor sit amet consectetur.</p>
        <p class="child">Lorem ipsum dolor sit amet consectetur.</p>
        <p class="child">Lorem ipsum dolor sit amet consectetur.</p>
        <p class="child">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
now use dom methods and properties
1.select all p tag
2.select specialChild p tag
3.select div parent
4.select parent from specialChild p tag
5.select next and previous tag of specialChild
6.get child of parent tag
7.select all tags at once
*/
// const selectByTagName = document.getElementsByTagName("p");
// console.log(selectByTagName);
// const selcetByClassName = document.getElementsByClassName("child");
// console.log(selcetByClassName);
// const selectByQuerySelector = document.querySelectorAll("p");
// console.log(selectByQuerySelector);

// const selectSpecialChild = document.getElementsByClassName("specialChild");
// console.log(selectSpecialChild);
// const querySelector = document.querySelector(".specialChild");
// console.log(querySelector);

// const selectParentdiv = document.querySelector(".parent");
// console.log(selectParentdiv);
// const selectparentdiv2 = document.getElementsByClassName("parent");
// console.log(selectparentdiv2);

const selectParent = document.querySelector(".specialChild");
const parentdivSelect = selectParent.parentElement;
console.log(parentdivSelect);

const selectpreviousNextElement = document.querySelector(".specialChild");
console.log(selectpreviousNextElement.previousElementSibling);
console.log(selectpreviousNextElement.nextElementSibling);

const getchildofParent = document.querySelector(".parent");
console.log(getchildofParent.children);

const selectAllTags = document.getElementsByTagName("*");
console.log(selectAllTags);



