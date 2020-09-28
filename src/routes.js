import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';

export default [ // each object in this array are a route
  {path: '/', component: showBlogs},
  {path: '/add', component: addBlog},
]