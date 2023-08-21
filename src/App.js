import Header from "./components/layout/Header";
import Board from "./components/board/Board";
import Footer from "./components/layout/Footer";
import TrelloProvider from "./context/TrelloProvider";
function App() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <Header />
      <TrelloProvider>
        <Board />
      </TrelloProvider>
      <Footer />
    </div>
  );
}

export default App;