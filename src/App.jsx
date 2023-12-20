import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTopBar from "./components/TopBar";
import MyFooter from "./components/Footer";
import MyAlert from "./components/Welcome";
import MyCard from "./components/AllTheBooks";

function App() {
	return (
		<div>
			<MyTopBar />
			<MyAlert />
			<MyCard />
			<MyFooter />
		</div>
	);
}

export default App;
