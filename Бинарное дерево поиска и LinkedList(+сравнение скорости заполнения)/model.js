let text = document.getElementById("text")
let text_ll = document.getElementById("text_ll")
let textBox = document.getElementById("result");
let sizeInput = document.getElementById("size");
let searchValue = document.getElementById("value");
let sizeLinkedList = document.getElementById("size_ll")

let generLl = document.getElementById("gener");
let resetBtn = document.getElementById("reset");
let searchBtn = document.getElementById("search");
let resetBtn_ll = document.getElementById("reset_ll");


const getText = () => textBox.innerHTML;
const getSize = () => sizeInput.value;
const getValue = () => searchValue.value;
const getText_ll = () => text_ll.innerHTML;
const getTextTree = () => text.innerHTML;
const getSizeLinkedList = () => sizeLinkedList.value;

const setText = (value) => {
    textBox.innerHTML = value
}
const setSize = (value) => {
    sizeInput.value = value
}
const setValue = (value) => {
    searchValue.value = value
}
const setText_ll = (value) => {
    text_ll.innerHTML = value
}
const setTextTree = (value) => {
    text.innerHTML = value
}
const setSizeLinkedList = (value) => {
    sizeLinkedList.value = value
}