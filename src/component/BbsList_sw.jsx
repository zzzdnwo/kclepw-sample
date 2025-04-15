import React from "react";
import BbsPost from './Bbs_sw';

function BbsList({ type = "notice"}){
  const dataMap = {
    notice: [
      { title: "세무사랑Pro 부가가치세 신고서류 안내", date: "2025-03-01", new: true },
      { title: "2024년 귀속 법인세무조정 업데이트", date: "2025-02-24", new: true },
      { title: "건강보험보수통총액통보서 신규메뉴 안내", date: "2025-02-01" },
      { title: "[근로복지공단] 산재보험법인조정세 수정 안내", date: "2025-01-24" },
      { title: "건강보험보수통총액통보서 신규메뉴 안내", date: "2025-02-01" },
      { title: "[근로복지공단] 산재보험법인조정세 수정 안내", date: "2025-01-24" },
      { title: "건강보험보수통총액통보서 신규메뉴 안내", date: "2025-02-01" },
      { title: "[근로복지공단] 산재보험법인조정세 수정 안내", date: "2025-01-24" },
      { title: "건강보험보수통총액통보서 신규메뉴 안내", date: "2025-02-01" },
      { title: "[근로복지공단] 산재보험법인조정세 수정 안내", date: "2025-01-24" },
      { title: "건강보험보수통총액통보서 신규메뉴 안내", date: "2025-02-01" },
      { title: "[근로복지공단] 산재보험법인조정세 수정 안내", date: "2025-01-24" },
      { title: "건강보험보수통총액통보서 신규메뉴 안내", date: "2025-02-01" },
      { title: "[근로복지공단] 산재보험법인조정세 수정 안내", date: "2025-01-24" },
    ],
    update: [
      { title: "세무사랑Pro 부가가치세 신고서류 안내", date: "2025-03-01" },
      { title: "2024년 귀속 법인세무조정 업데이트", date: "2025-02-24" },      
    ],
    schedule: [
      { title: "세무사랑Pro 부가가치세 신고서류 안내", date: "2025-03-01" },
      { title: "2024년 귀속 법인세무조정 업데이트", date: "2025-02-24" },      
    ]
  }

  const posts = dataMap[type] || [];
  const hasNew = posts.some(post => post.new);

  const titleMap ={
    notice: "공지사항",
    update: "업데이트",
    schedule: "일정"
  };

  return(
    <div className={`bbsCont ${type} ${hasNew ? "hasNew" : ""}`}>
      <h2 className="bbsTitle">{titleMap[type] || "게시판"}</h2>
      <span className="btn_more">+더보기</span>  
      <ul className="bbsList">
        {posts.map((post, idx) => (
          <BbsPost
            key={idx}
            title={post.title}
            date={post.date}
            new={post.new}
          />
        ))}        
      </ul>
    </div>
  );
}

export default BbsList;