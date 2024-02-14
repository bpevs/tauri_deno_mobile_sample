import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";
import { invoke } from "tauri/api/primitives";

const CountingComponent = () => {
  const [count, setCount] = createSignal(0);
  const [invokeResp, setInvokeResp] = createSignal("No Reponse...");
  const interval = setInterval(() => setCount((c) => c + 1), 1000);

  invoke("greet", { name: "Joe" })
    .then((resp) => setInvokeResp(resp));

  onCleanup(() => clearInterval(interval));
  return (
    <div>
      <h1 style="padding: 40px;">Count value is {count()}</h1>
      <div style="padding: 40px;">
        <h4>tauri invoke response:</h4>
        <p>{invokeResp()}</p>
      </div>
    </div>
  );
};

render(() => <CountingComponent />, document.getElementById("root"));
