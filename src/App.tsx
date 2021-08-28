import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
};

export default App;
