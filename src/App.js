import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

function App() {
  const routing = useRoutes(Themeroutes);
  return <div className>{routing}</div>;
}

export default App;
