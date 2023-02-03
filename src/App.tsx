import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="flicker">
          W<span className="flicker-fast">h</span>at&nbsp;will yo
          <span className="flicker-medium">u&nbsp;</span>cho
          <span className="flicker-fast">os</span>e Mr.&nbsp;
          <span className="flicker-medium">A</span>nderso
          <span className="flicker-slow">n</span> ..
          <span className="flicker-fast">.</span>
        </h1>
      </div>
      <div className="hands">
        <a
          href="https://martin.lapihuska.sk/"
          className="left glowRed">
          <h2 className="name">
            Martin Lapihuska <br />
            portfolio{" "}
          </h2>
        </a>

        <a
          href="https://jakub.lapihuska.sk/"
          className="right glowBlue">
          <h2 className="name">
            Jakub Lapihuska <br />
            portfolio
          </h2>
        </a>
      </div>
    </div>
  );
}

export default App;
