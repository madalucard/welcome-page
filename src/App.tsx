import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="flicker">
          <div>
            W<span className="flicker-fast">h</span>at
          </div>
          <div>
            &nbsp;will yo
            <span className="flicker-medium">u&nbsp;</span>
          </div>
          <div>
            cho
            <span className="flicker-fast">os</span>e&nbsp;
          </div>
          <div>Mr.&nbsp;</div>
          <div>
            <span className="flicker-medium">A</span>nderso
            <span className="flicker-slow">n</span>
          </div>
          <div>
            ..
            <span className="flicker-fast">.</span>
          </div>
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
