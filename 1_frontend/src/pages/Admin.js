import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Admin.css';
import { AuthenticationConext } from '../App';
import Button from '../components/Button';

function Admin() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [button, setButton] = useState('Submit post');
  const [isError, setIsError] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [added, setAdded] = useState(false);

  const [posts, setPosts] = useState([]);

  const URI = 'http://localhost:5000/posts';

  const authentication = useContext(AuthenticationConext);

  useEffect(() => {
    axios.get(URI).then((res) => {
      console.log(res.data);
      setPosts(res.data);
      console.log(132);
    });
  }, [URI, isUpdate, added]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isUpdate) {
      axios.put(`${URI}/${id}`, { title, body }).then((response) => {
        setIsUpdate(false);
        setTitle('');
        setBody('');
      });
    } else {
      axios.post(URI, { title, body }).then(() => {
        setAdded(true);
        setTitle('');
        setBody('');
      });
    }
  }

  // DELETE
  function handleDelete(id) {
    axios
      .delete(`${URI}/${id}`)
      .then((res) => {
        let newPosts = posts.filter((post) => post._id !== id);
        setPosts(newPosts);
      })
      .catch((err) => setIsError('Unable to delete'));
  }
  // UPDATE
  function handleUpdate(id) {
    axios.get(`${URI}/${id}`).then((res) => {
      setId(id);
      setTitle(res.data.title);
      setBody(res.data.body);
      setButton('Update post');
      setIsUpdate(true);
    });
  }

  function handleStopUpdate() {
    setIsUpdate(false);
    setButton('Submit posts');
    setTitle('');
    setBody('');
  }

  function handleLogout() {
    authentication.setAutheticated(false);
    localStorage.removeItem('authenticated');
  }

  return (
    <main className='admin'>
      <div className='container'>
        <h1>Admin panel</h1>
        <div className='edit-post'>
          <h2>Edit Posts</h2>
          <div className='posts'>
            {posts.map((post) => (
              <div className='post' key={post._id}>
                <h3>{post.title}</h3>
                <div className='post__cta'>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className='btn'
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(post._id)}
                    className='btn'
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
            {isError && <p>{isError}</p>}
          </div>
        </div>
        <div className='add-post'>
          <h2>Add Post</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label>Post title</label>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Post body</label>
              <textarea
                cols='30'
                rows='5'
                type='text'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className='form-control'>
              <button type='submit' className='btn'>
                {button}
              </button>
              {isUpdate && (
                // <button className='btn btn-new-post' onClick={handleStopUpdate}>
                //   Add new post
                // </button>
                <Button className="btn btn-new-post" func={handleStopUpdate} text={"Add new post"}/>
              )}
            </div>
          </form>
        </div>
        <div className='logout'>
          <Button func={handleLogout} text={'Logout'}/>
        </div>
      </div>
    </main>
  );
}

export default Admin;
