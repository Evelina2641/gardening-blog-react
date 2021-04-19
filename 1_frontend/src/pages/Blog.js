import './Blog.css';
import Posts from '../components/Posts';

function Blog() {
  return (
    <main className='blog'>
      <div className='container'>
        <h1>Blog</h1>
        <Posts />
      </div>
    </main>
  );
}

export default Blog;
