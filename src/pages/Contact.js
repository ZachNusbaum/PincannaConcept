import React from "react";

export class ContactPage extends React.Component {
  componentDidMount() {
    (function(f, o, r, m) {
      r = f.createElement("script");
      r.async = 1;
      r.src = o + "js/mf.js";
      m = f.getElementById("mf_placeholder");
      m.parentNode.insertBefore(r, m);
    })(document, "//forms.pincanna.com/");
  }
  render() {
    return (
      <div className="container">
        <h1>Contact Pincanna</h1>
        <div
          id="mf_placeholder"
          data-formurl="//forms.pincanna.com/embed.php?id=12192"
          data-formheight="618"
          data-formtitle="Contact Pincanna"
          data-paddingbottom="10"
        />
      </div>
    );
  }
}
