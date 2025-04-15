// import "../css/test.css";
// import BbsList from '../assets/sw/BbsList_sw';
// import Memo from '../assets/sw/Memo';
// import VodList from '../assets/sw/VodList_sw';
// import SearchBtn from '../assets/sw/SearchBtn_sw';
// import TabList from '../assets/sw/TabList_sw';
// import MainBtn from '../assets/sw/MainBtn_sw';
import '../assets/styles/main.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function Main(props){
  return (
    <div className="main">
      <Header />
      <div className="main_contents">
        <Footer/>
      </div>      
    </div>  
  );
}

export default Main;