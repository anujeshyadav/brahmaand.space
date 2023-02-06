import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

// import "../../css/topBar.css";
import Posts from "../../src/components/Posts";
import Pagination from "../../src/components/Pagination";

function DemoPaginate() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [input, setInput] = useState("");

  const [categry, setCategry] = useState([]);
  let Params = useParams();
  // useEffect(() => {
  //   allsearchproduct();
  // }, [Params]);
  const allsearchproduct = () => {
    // axios;
    // .get(`http://15.207.117.200:9000/admin/listbysubcategory/${Params.id}`)
    // .then((response) => {
    //   setCategry(response.data.data);
    // })
    // .catch((error) => {
    //   console.log(error.response.data);
    // });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // console.log(posts);
  const handleUrl = () => {
    var expression =
      /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
    var regex = new RegExp(expression);

    var res = "";
    if (input.match(regex)) {
      res = "Valid URL";
      console.log(res);
    } else {
      res = "Invalid URL";
    }
  };
  const indexOfLastPost = currentPage * postsPerPage;
  // console.log("indexOfLastPost: ", indexOfLastPost);

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // console.log("indexOfFirstPost: ", indexOfFirstPost);

  // const currentPosts = categry.slice(indexOfFirstPost, indexOfLastPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // console.log("currentPosts: ", currentPosts);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-primary mn-3">My Posts</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          previousLabel="< previous"
          paginate={paginate}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
        />
      </div>
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleUrl}>submit</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DemoPaginate />, rootElement);

export default DemoPaginate;
