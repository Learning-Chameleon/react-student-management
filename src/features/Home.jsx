import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
    const [pageName, setPageName] = useState();
    const handleClick = (pageName) => setPageName(pageName);
    return (
        <div >
            <Header handleClick={handleClick} />
            <Body pageName={pageName} />
            <Footer />
        </div>
    )
}

export default Home;