import React from "react";
import VodItem from './VodItem_sw';

function VodList(props){
  const dataMap =[
    { "title": "[2022][레시피2][세무편]","subtitle": "국세청사업용(복지) 신용카드 및 현금영수증자동분개","platform": "YouTube",},
    { "title": "[2022][레시피2][세무편]","subtitle": "_심화편","platform": "뉴젠에듀 ㆍ이장원 세무사",},
    { "title": "[2022][레시피2][세무편]","subtitle": "국세청사업용(복지) 신용카드 및 현금영수증자동분개","platform": "YouTube",},
    { "title": "[2022][레시피2][세무편]","subtitle": "국세청사업용(복지) 신용카드 및 현금영수증자동분개","platform": "YouTube",},
    { "title": "[2022][레시피2][세무편]","subtitle": "_심화편","platform": "YouTube",},
    { "title": "[2022][레시피2][세무편]","subtitle": "국세청사업용(복지) 신용카드 및 현금영수증자동분개","platform": "YouTube",},
  ]
  return(

      <ul className="vodList">        
        {dataMap.map((item, index) => (
          <VodItem 
            key={index} title={item.title} subtitle={item.subtitle} platform={item.platform}
          />
      )
        )}
      </ul>
  );
}

export default VodList;