import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        {/* Other components will go here */}
      </Layout>
    </Router>
  );
}

export default App;
