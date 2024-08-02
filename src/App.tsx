import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import "./App.css";
import "./css/grid.css";

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
