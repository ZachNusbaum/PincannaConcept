import React from "react";
import { Link } from "react-router-dom";

export class Post extends React.Component {
  render() {
    return (
      <div className="blog-post">
        <h2 className="blog-post-title">
          <Link to={"/story/" + this.props.slug}>{this.props.title}</Link>
        </h2>
        <p className="blog-post-meta">
          {this.props.date} by <a href="#">{this.props.author}</a>
          <br />
          {this.props.categories.map(category => {
            return (
              <span className="badge badge-primary">{category.title}</span>
            );
          })}
        </p>

        <p dangerouslySetInnerHTML={{ __html: this.props.content }} />
        <hr />
      </div>
    );
  }
}
