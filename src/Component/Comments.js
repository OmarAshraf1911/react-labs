import React, { Component } from "react";
import axios from "axios";
import "./ProductHome/productCard.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.setState({ comments: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false, error: error.message });
      });
  }

  render() {
    const { comments, loading, error } = this.state;

    if (loading) {
      return <p>Loading comments...</p>;
    }

    if (error) {
      return <p>Error fetching comments: {error}</p>;
    }

    return (
      <div className="comment-list">
        {comments.map((comment) => (
          <div className="shadow-lg shadow-black-500/50 m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {comment.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {comment.body}
            </p>
            <a
              href={comment.email}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Email
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
