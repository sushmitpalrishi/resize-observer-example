import React, { useState, useRef } from "react";
import { useResizeObserver } from "./useResizeObserver";
import { render } from "react-dom";
import "./styles.css";

function App() {
  const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
  const ref = useRef(null);

  // Optional callback to access the full DOMRect object if required.
  const optionalCallback = (entry: DOMRectReadOnly) =>
    setDimensions({ top: entry.x, left: entry.left });

  // Access the width and the height returned from the observed element.
  const [width, height] = useResizeObserver(ref, optionalCallback);
  return (
    <>
      <h2>useResizeObserver</h2>
      <p>
        React hook that utilizes the resizeObserver API. Resize the element!
      </p>
      <div
        ref={ref}
        className="refel"
        style={{ resize: "both", overflow: "auto" }}
      >
        {width} x {height}
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
