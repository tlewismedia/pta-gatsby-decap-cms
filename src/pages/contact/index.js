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
          src="https://us12.list-manage.com/contact-form?u=2bd93e9ab8c3bf54499b19d27&form_id=caa0ed4720aa3807797e1c9b91c26899"
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
