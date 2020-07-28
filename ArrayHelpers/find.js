var users = [{
    name: 'Jill'
  },
  {
    name: 'Alex'
  },
  {
    name: 'Bill'
  }
];

const ans = users.find(function (user) {
  return user.name === 'Alex';
});

console.log(ans);

// complex problem
var posts = [{
    id: 1,
    title: 'New post'
  },
  {
    id: 2,
    title: 'Old post'
  }
];

var comment = {
  postId: 1,
  content: 'Great Post'
};

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}
var ans2 = postForComment(posts, comment);

console.log(ans2);