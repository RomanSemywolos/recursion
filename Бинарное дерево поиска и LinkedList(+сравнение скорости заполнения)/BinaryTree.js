class BinaryTree {
    _root = {};
    constructor(value) {
        this._root = this.createNoda(value);
    }
    createNoda = value => {
        return {
            value: value ? value : null,
            left: null,
            right: null
        };
    };
    push = value => {
        let newNoda = this.createNoda(value);
        let noda = this._root;
        this.toEnd(noda, newNoda);
    };

    toEnd = (noda, newNoda, prevNoda, possition) => {
        if (noda == null) {
            if (possition) prevNoda.right = newNoda;
            else prevNoda.left = newNoda;
            return;
        }
        if (newNoda.value > noda.value) {
            this.toEnd(noda.right, newNoda, noda, true);
        }
        if (newNoda.value < noda.value) {
            this.toEnd(noda.left, newNoda, noda, false);
        }
    };
    search = (value, noda = this._root) => {
        if (noda == null) {
            setText(value + " - число не найдено");
            return;
        }
        if (value == noda.value) {
            setText(value + " - число найдено");
            return;
        }
        if (value > noda.value) {
            noda = noda.right;
            this.search(value, noda);
            return;
        }
        if (value < noda.value) {
            noda = noda.left;
            this.search(value, noda);
            return;
        }
    };
}