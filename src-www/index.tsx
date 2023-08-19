import { render } from "preact";
import { invoke } from "@tauri-apps/api/tauri";

(async function () {
  const result = await invoke("greet", { name: "Hello!" });
  console.log(result);
})();

function App() {
  return <div>hello!</div>;
}

const mountPoint = document.getElementById("root") as HTMLElement;
if (mountPoint) render(<App />, mountPoint);
