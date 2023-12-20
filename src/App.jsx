import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTopBar from "./components/TopBar";
import MyFooter from "./components/Footer";
import MyAlert from "./components/Welcome";
import MyCard from "./components/AllTheBooks";
import BookList from "./components/BookList";
import scifi from "./data/scifi.json";

function App() {
	return (
		<div>
			<MyTopBar />
			<MyAlert />
			<MyCard genere="Fantasy" />
			<BookList genere="Sci-Fi" genre={scifi} />
			<MyFooter />
		</div>
	);
}

export default App;
