import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import "../../style/contact.sass";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <iframe
          className="con__mail_chimp_frame"
          src="https://us13.list-manage.com/contact-form?u=e39eb7fc9ebf88377dd826f2d&form_id=9a806b59f1ee2b3b3d7e3caf7a0b55d5"
          title="google"
        ></iframe>

        <div className="con__address">
          Creston School 4701 SE Bush St. Portland, OR 97206
        </div>

        <div className="con__phone">503.916.6340</div>
      </Layout>
    );
  }
}
