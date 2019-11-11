function ArrayList() {
    this.aList = [];
    this.length = 0;
}
ArrayList.prototype = Object.create(List.prototype)
ArrayList.prototype.constructor = ArrayList;
ArrayList.prototype.getList = function () {
    return this.aList;
}
ArrayList.prototype.push = function (element) {
    this.aList[this.length] = element;
    this.length++;
    return element;
}
ArrayList.prototype.clear = function () {
    this.length = 0;
    this.aList = [];
}
ArrayList.prototype.pop = function () {
    let element = this.aList[this.length - 1];
    let a = [];
    for (let i = 0; i < this.length - 1; i++) {
        a[i] = this.aList[i];
    }
    this.aList = a;
    this.length--;
    return element;
}
ArrayList.prototype.size = function () {
    return this.length;
}
ArrayList.prototype.shift = function () {
    const a = [];
    let j = 0;
    for (let i = 1; i < this.length; i++) {
        a[j] = this.aList[i];
        j++;
    }
    this.aList = a;
    this.length--;
    return this.length;
}
ArrayList.prototype.unshift = function (element) {
    const a = [];
    a[0] = element;
    let j = 1;
    for (let i = 0; i < this.length; i++) {
        a[j] = this.aList[i];
        j++;
    }
    this.aList = a;
    this.length++;
    return this.length;
}
ArrayList.prototype.toString = function () {
    let string = String(this.aList[0]);
    for (let i = 1; i < this.length; i++) {
        string += ", " + String(this.aList[i]);
    }
    return string;
}
ArrayList.prototype.sort = function (commit) {
    if (commit) {
        if (typeof commit == "function") {
            for (let i = 0; i < this.length; i++) {
                for (let j = 0; j < this.length; j++) {
                    if (j == this.length - 1)
                        break;
                    if (commit(this.aList[j], this.aList[j + 1]) > 0) {
                        let easy = this.aList[j + 1];
                        this.aList[j + 1] = this.aList[j];
                        this.aList[j] = easy;
                    }
                }
            }
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (j == this.length - 1)
                    break;
                if (String(this.aList[j]) > String(this.aList[j + 1])) {
                    let easy = this.aList[j + 1];
                    this.aList[j + 1] = this.aList[j];
                    this.aList[j] = easy;
                }
            }
        }
    }
}
ArrayList.prototype.get = function (index) {
    if (index >= this.length || index < 0)
        return false;
    return this.aList[index];
}
ArrayList.prototype.toLinkedList = function () {
    const linked = new LinkedList();
    linked.clear();
    for (let i = 0; i <= this.size() - 1; i++) {
        linked.push(this.get(i));
    }
    return linked;
}
ArrayList.prototype.map = function (MyFunction) {
    if (!MyFunction) return false;
    const arraylist = new ArrayList();
    if (typeof MyFunction == "function")
        for (let i = 0; i < this.size(); i++) {
            arraylist.push(MyFunction(this.aList[i], i, this.aList));
        }
    return arraylist;
}
ArrayList.prototype.reduce = function (MyFunction, initValue) {
    if (!MyFunction) return 0;
    let result = 0;
    if (initValue) result = initValue;
    else result = 0;
    const newArray = this.getList();
    if (typeof MyFunction == "function") {
        for (let i = 0; i < this.size(); i++) {
            result = MyFunction(result, newArray[i], i, newArray);
        }
    }
    return result;
}
ArrayList.prototype.reverse = function () {
    const array = new ArrayList();
    this.getList().map(item => array.unshift(item))
    this.aList = array.aList;
    return this;
}


function LinkedList() {
    this.root = {
        next: null,
        prev: null,
        lenght: 0
    }
}
LinkedList.prototype = Object.create(List.prototype);
LinkedList.prototype.constructor = LinkedList;
LinkedList.prototype.createNode = function (el) {
    return {
        el: el ? el : null,
        next: null,
        prev: null
    };
}
LinkedList.prototype.push = function (el) {
    let newNoda = this.createNode(el);
    let Noda = this.root;
    while (Noda.next && Noda.next.el != null) {
        Noda = Noda.next;
        newNoda.prev = Noda;
    }
    Noda.next = newNoda;
    this.root.lenght = Number(this.root.lenght) + 1;
    return el;
}
LinkedList.prototype.size = function () {
    return this.root.lenght;
}
LinkedList.prototype.clear = function () {
    this.root.next = null;
    this.root.prev = null;
    this.root.lenght = 0;
}
LinkedList.prototype.pop = function () {
    let Noda = this.root;
    while (Noda.next && Noda.next.el != null) {
        Noda = Noda.next;
    }
    let el = Noda.el;
    Noda.el = null;
    Noda.next = null;
    Noda.prev = null;
    this.root.lenght--;
    return el;
}
LinkedList.prototype.unshift = function (el) {
    let Noda = this.root;
    let newNoda = this.createNode(el);
    newNoda.next = Noda.next;
    Noda.next.prev = newNoda;
    Noda.next = newNoda;
    newNoda.prev = null;
    this.root.lenght++;
    return el;
}
LinkedList.prototype.shift = function () {
    let Noda = this.root;
    let secondNoda = Noda.next;
    let el = secondNoda.el;
    secondNoda.next.prev = null;
    Noda.next = secondNoda.next;
    this.root.lenght--;
    return el;
}
LinkedList.prototype.toString = function () {
    let Noda = this.root;
    Noda = Noda.next;
    let string = String(Noda.el);
    while (Noda.next && Noda.next.el != null) {
        Noda = Noda.next;
        string += ", " + String(Noda.el);
    }
    return string;
}
LinkedList.prototype.sort = function (commit) {
    if (commit) {
        if (typeof commit != "function") return false;
        for (let i = 0; i < this.size() + 1; i++) {
            let Noda = this.root;
            let first = Noda.next;
            if (!first.next) return;
            let second = first.next;
            for (let j = 0; j < this.size() + 1; j++) {
                if (commit(first.el, second.el) > 0) {
                    let easy = second.el;
                    second.el = first.el;
                    first.el = easy;
                }
                if (!first.next) break;
                else first = first.next;
                if (!first.next) break;
                second = first.next;
            }
        }
    } else {
        for (let i = 0; i < this.size() + 1; i++) {
            let Noda = this.root;
            let first = Noda.next;
            if (!first.next) return;
            let second = first.next;
            for (let j = 0; j < this.size() + 1; j++) {
                if (String(first.el) > String(second.el)) {
                    let easy = second.el;
                    second.el = first.el;
                    first.el = easy;
                }
                if (!first.next) break;
                else first = first.next;
                if (!first.next) break;
                second = first.next;
            }
        }
    }
};
LinkedList.prototype.toArrayList = function () {
    const array = new ArrayList();
    let Noda = this.root;
    while (Noda.next && Noda.next.el != null) {
        Noda = Noda.next;
        array.push(Noda.el);
    }
    return array;
}
LinkedList.prototype.map = function (myFunction) {
    if (typeof MyFunction != "function") return this;
    const newList = new LinkedList();
    let Noda = this.root;
    let i = 0;
    while (Noda.next) {
        Noda = Noda.next;
        newList.push(myFunction(Noda.el, i, LinkedList));
        i++;
    }
    return newList;
}
LinkedList.prototype.reduce = function (myFunction, initValue) {
    if (typeof MyFunction != "function") return 0;
    let result = 0;
    if (initValue) result = initValue;
    let Noda = this.root;
    let i = 0;
    while (Noda.next && Noda.next != null) {
        Noda = Noda.next;
        result = myFunction(result, Noda.el, i, LinkedList)
        i++;
    }
    return result;
}

LinkedList.prototype.reverse = function () {
    const newList = this;
    let size = this.size();
    newList.map(item => this.unshift(item));
    let i = 0;
    while (i <= size - 1) {
        this.pop();
        i++;
    }
    return this;
}