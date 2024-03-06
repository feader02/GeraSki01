import MainSection from "./components/MainSection.jsx";
import ServicePage from "./components/ServicePage.jsx";
import AboutUs from "./components/AboutUs.jsx";
import About_skate from "./components/About_skate.jsx";
import Galerey from "./components/Galerey.jsx";
import React from "react";

function MainPage() {
    return (
        <main>
            <section className='main-section'>
                <MainSection />
            </section>
            <section>
                <AboutUs />
            </section>
        </main>
    )
}

export default MainPage