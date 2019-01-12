import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

const moment = require("moment");

export class StoryPage extends React.Component {
  id = this.props.match.params.id;
  constructor(props) {
    super(props);
    this.state = { story: null, loading: true };
  }
  componentDidMount() {
    console.log(this);
    fetch(`https://cms.pincanna.com/api/stories/${this.id}.json`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ story: data, loading: false });
      });
  }
  render() {
    return (
      <div className="container">
        <br />
        {this.state.loading && <p>Loading...</p>}
        {!this.state.loading && (
          <div className="story">
            <h2>{this.state.story.title}</h2>
            <hr />
            <p className="text-muted">
              {moment(this.state.story.date).format("D MMM YYYY @ h:mm a")}
              &nbsp;by {this.state.story.author}
            </p>
            <div className="categories">
              {this.state.story.categories.map(category => (
                <span className="badge badge-primary" key={category.slug}>
                  {category.title}
                </span>
              ))}
            </div>
            <div className="images card">
              <div className="card-body">
                {this.state.story.images.length === 0 && <p>No images.</p>}
                <ImageGallery
                  style={{ width: "500px" }}
                  items={this.state.story.images}
                />
              </div>
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: this.state.story.content }}
            />
          </div>
        )}
        <Link className="btn btn-secondary btn-sm" to="/">
          Go Back
        </Link>
      </div>
    );
  }
}
