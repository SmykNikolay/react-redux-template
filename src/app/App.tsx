import { Provider } from "react-redux";
import { ComposeChildren } from "../shared/lib/react";
import "./App.css";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ComposeChildren>
        <Provider store={store} children={null}>
          {children}
        </Provider>
      </ComposeChildren>
    </>
  );
}

export default App;
