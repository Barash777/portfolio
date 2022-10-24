import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Freelance from './components/Freelance/Freelance';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import {ReactNotifications} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {

    return (
        <div className="main theme-light fixed-header">
            <ReactNotifications/>
            <Header/>
            <div className={'main-left'}>
                <About/>
                <Skills/>
                <Projects/>
                <Freelance/>
                <Contacts/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
