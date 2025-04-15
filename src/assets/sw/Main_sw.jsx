import "../styles/main_sw.scss";
import BbsList from './BbsList_sw';
import Memo from './Memo';
import VodList from './VodList_sw';
import SearchBtn from './SearchBtn_sw';
import TabList from './TabList_sw';
import MainBtn from './MainBtn_sw';

function Main(props){
  return (
    <div className="main">
      <header>
        <span className="btn_menu">햄버거 버튼</span>
        <h1 className="main_logo">세무사랑W</h1>
        <ul className="header_menu">
          <li className="header_menu_list">회계관리</li>
          <li className="header_menu_list">부가가치</li>
          <li className="header_menu_list">인사급여</li>
          <li className="header_menu_list">법인조정</li>
          <li className="header_menu_list">개인조정</li>
          <li className="header_menu_list">물류관리</li>
        </ul>
        <SearchBtn />
        <div className="go_coun">
          <MainBtn name="고객센터"/>
        </div>
      </header>
      <div className="main_top fb">
        <div className="main_top_left">
          <div className="main_top_logo">
            <p>중소기업 No.1 세무 비즈니스 솔루션</p>
            <h2>세무사랑<strong>W</strong></h2>
          </div>
          <div className="clock">
            <p><span>오전</span>10:20</p>
            <p>11월 3일 화요일</p>
          </div>
        </div>
        <div className="main_top_right">
          <MainBtn name="회사선택"/>
          <div className="mainTag">
            <div className="nameBox">
              <div className="left">
                <span className="name">김직원님</span>
                <span className="userId">Newzen123</span>
              </div>
              <div className="right">
                <span className="btn_more"></span>
              </div>
            </div>
            <ul className="mainTag_btnBox">
              <li><span>마이페이지</span></li>
              <li><span>타임라인</span></li>
              <li><span>로그아웃</span></li>
            </ul>
            <div className="profileImg">
              <img src="#" alt="프로필 이미지" />
            </div>
            
          </div>
        </div>
      </div>
      <div className="main_middle fb">
        <div className="main_middle_left">
          <BbsList type="notice"/>
          <BbsList type="update"/>
          <div className="tabCont">
              <span className="tab_setting"></span>
          <TabList tabs={['업무일정', '작업내역', '알림', '업무요청']} contents={[<BbsList type="update"/> ,'2페이지','3페이지','4페이지']} />
          </div>
        </div>
        <div className="main_middle_right">
          <Memo />
        </div>
      </div>
      <div className="main_bottom fb">
        <div className="main_bottom_left">
          <span className="recVod_title">추천영상</span>
          <VodList/>
        </div>
        <div className="main_bottom_right"></div>
      </div>      
    </div>  
  );
}

export default Main;