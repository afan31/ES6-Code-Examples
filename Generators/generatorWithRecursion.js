// tree data structure

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    // array helpers, like map or forEach do not work with generators, so we have to use for-of loop again
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []), // node with no child nodes
  new Comment('bad comment', []),
  new Comment('meh', [])
];

// root node
const tree = new Comment('great post!', children);

console.log(tree);

const values = [];

for (let value of tree) {
  values.push(value);
}
console.log(values);