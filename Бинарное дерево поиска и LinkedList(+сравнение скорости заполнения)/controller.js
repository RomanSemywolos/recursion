searchBtn.addEventListener("click", () => {
    let size = getSize();
    let value = getValue();

    if (+size != size || +value != value || !value || !size || size < 0) {
        setText("Можно вводить только числа(количество элементов > 0)");
        return;
    }

    let rand = getRandom(-100, 100);
    let Tree = new BinaryTree(rand)
    let time = performance.now();
    setTextTree(rand);
    for (let i = 0; i < size - 1; i++) {
        rand = getRandom(-100, 100);
        Tree.push(rand);
        setTextTree(getTextTree() + ",  " + rand);
    }
    time = performance.now() - time;
    Tree.search(value);
    setText(getText() + ".  Время заполнения  = " + time + " милисекунд");
});
resetBtn.addEventListener("click", () => {
    setText("");
    setTextTree("");
    setValue("");
    setSize("")
});
resetBtn_ll.addEventListener("click", () => {
    setText_ll("");
    setSizeLinkedList("")
})

generLl.addEventListener("click", () => {
    setText_ll("");
    let size = getSizeLinkedList();
    if (+size != size || size < 0) {
        setText_ll("Можно вводить только числа(количество элементов > 0)");
        return;
    }
    let time = performance.now();
    const List = new LinkedList();
    for (let i = 0; i < size; i++) {
        rand = getRandom(-100, 100);
        List.push(rand);
        setText_ll(getText_ll() + rand + ",  ");
    }
    time = performance.now() - time;
    setText_ll("Время заполнения  = " + time + " милисекунд <br>" + getText_ll());

})

function getRandom(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}