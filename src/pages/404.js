import * as React from "react";
import Layout from "../components/Layout";


const style = {
  height: '200px', 
  width: '300px', 
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  border: '1px dotted lightgray',
  margin: '200px auto',
  textAlign: 'center',
}

const NotFoundPage = () => (
  <Layout>
    <div style={style}>
      <h1>Sorry</h1>
      <p>The page requested does not exist.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
