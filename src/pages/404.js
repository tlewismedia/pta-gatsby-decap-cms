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
      <h1>Oh, the saddness.</h1>
      <p>I scream. You scream. We all scream over broken web pages. We'll get this cleaned up soon.</p>
      <div img src="/img/404" alt="f"></div>
    </div>  
  </Layout>
);

export default NotFoundPage;
