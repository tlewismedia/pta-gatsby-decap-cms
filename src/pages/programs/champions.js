import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }



  render() {
    return (
      <Layout>
        Champions
      </Layout>
    );
  }
}
