/* @jsx h */
import { h, render } from "preact";

function App() {
  return (<div>hello!</div>);
}

const mountPoint = document.getElementById("root") as HTMLElement;
if (mountPoint) render(<App />, mountPoint);
