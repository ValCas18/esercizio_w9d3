import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTopBar from "./components/TopBar";
import MyFooter from "./components/Footer";
import MyAlert from "./components/Welcome";
import MyCard from "./components/AllTheBooks";
import BookList from "./components/BookList";
import scifi from "./data/scifi.json";
import history from "./data/history.json";
import horror from "./data/horror.json";

function App() {
	return (
		<div>
			<MyTopBar />
			<MyAlert />
			<MyCard genere="Fantasy" />
			<BookList genere="Sci-Fi" genre={scifi} />
			<BookList genere="History" genre={history} />
			<BookList genere="Horror" genre={horror} />
			<MyFooter />
		</div>
	);
}

export default App;
