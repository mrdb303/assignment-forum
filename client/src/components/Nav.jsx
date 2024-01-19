import { Link } from 'react-router-dom';

export default function Nav(){


  return (
    <>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </>
  );


}