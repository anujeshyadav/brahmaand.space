import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// import "../../css/topBar.css";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

function DemoPaginate() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      console.log(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  // console.log("indexOfLastPost: ", indexOfLastPost);

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // console.log("indexOfFirstPost: ", indexOfFirstPost);

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log("currentPosts: ", currentPosts);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mn-3">My Posts</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        breakLabel="..."
        nextLabel="next >"
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DemoPaginate />, rootElement);

export default DemoPaginate;
