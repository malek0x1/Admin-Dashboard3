import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

import '../../App.css';
import Main from "../../components/Main/Main";
import RightBar from "../../components/RightBar/RightBar";
function Home() {
    return (
        <div className="App">
            <Header />
            <div className="body">
                <SideBar />
                <Main />
                <RightBar />
            </div>
        </div>
    );
}

export default Home;
