import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Freelance from './components/Freelance/Freelance';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Test from './components/Test/Test';

// import Loading from './components/Loading/Loading';

function App() {
    return (
        <div className="main theme-light">
            {/*<div className="main theme-light fixed-header vsc-initialized">*/}
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Freelance/>
            <Contacts/>
            <Footer/>
            <Test/>
        </div>
    );
}

export default App;
