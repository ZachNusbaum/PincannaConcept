import React from "react";
import { Post } from "../components/Post";

const moment = require("moment");

export class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], loading: true };
  }
  componentDidMount() {
    fetch("https://cms.pincanna.com/api/stories.json")
      .then(response => response.json())
      .then(data => this.setState({ posts: data, loading: false }));
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="blog-header">
            <h1 className="blog-title">The Pincanna Blog</h1>
            <p className="lead blog-description">
              The official example template of creating a blog with Bootstrap.
            </p>
            <hr />
          </div>

          <div className="row">
            <div className="col-sm-8 blog-main">
              {this.state.loading && <p className="lead">Loading...</p>}
              {this.state.posts.map(post => {
                return (
                  <div>
                    <Post
                      title={post.title}
                      content={post.summary}
                      date={moment(post.date).format("D MMM YYYY @ h:mm a")}
                      author={post.author}
                      categories={post.categories}
                      slug={post.slug}
                      key={post.id}
                    />
                  </div>
                );
              })}
            </div>

            <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
              <div className="sidebar-module sidebar-module-inset" />
              <div className="sidebar-module">
                <h4>Categories</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">Announcements</a>
                  </li>
                </ol>
              </div>
              <div className="sidebar-module">
                <h4>Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
