import { render } from "preact";
import { useEffect } from "preact/hooks";
import { invoke } from "@tauri-apps/api/tauri";
import { signal } from "@preact/signals";
const greetingText = signal("Did not yet greet")

function App() {
  useEffect(async () => {
    greetingText.value = await invoke("greet", { name: "Joe" });
  }, [])

  return <div>{greetingText.value}</div>;
}

const mountPoint = document.getElementById("root") as HTMLElement;
if (mountPoint) render(<App />, mountPoint);
