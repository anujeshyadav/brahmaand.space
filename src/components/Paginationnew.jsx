import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "../components/Paginate.css";
import { Link, useParams } from "react-router-dom";

function Paginationnew() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  // fix three for three content in one time
  const endOffset = itemOffset + 3;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data?.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data?.length / 3);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % data?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <>
        {currentItems?.map((item) => {
          return (
            <div>
              <h3>Item #{item.title}</h3>
            </div>
          );
        })}
      </>

      <div className="container paginatediv d-flex">
        <ReactPaginate
          itemsPerPage={4}
          activeClassName="activeclassofpagination"
          pageClassName="pageclassforpage"
          className=" paginationsclass"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

{
  /* <Paginationnew itemsPerPage={4} />; */
}

export default Paginationnew;
