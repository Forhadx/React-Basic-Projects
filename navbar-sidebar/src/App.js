import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";

import "./App.css";

function App() {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

  const sidebarClosedHandler = () => {
    setSidebarIsVisible(false);
  };

  const sidebarToggleHandler = () => {
    setSidebarIsVisible(!sidebarIsVisible);
    console.log('clicked? ', sidebarIsVisible)
  };

  return (
    <div className="App">
      <Navbar 
        drawerToggleClicked={sidebarToggleHandler} />
      <Sidebar
        open={sidebarIsVisible}
        closed={sidebarClosedHandler} />
      <main>
        <h1>Fixed Top Navigation Bar</h1>
        <h2>Scroll this page to see the effect</h2>
        <h2>The navigation bar will stay at the top of the page while scrolling</h2>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text 111111 some text some text..</p>
        <p>Some text some text 11111111 some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text 1111111111 some text some text..</p>
        <p>Some text some text some text some text..</p>
      </main>
    </div>
  );
}

export default App;
