import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PortfolioDetailType, PortfolioType } from '../Types/PortfolioType';
import BasicUI from '../components/PortfolioUI/BasicUI';
import ScrollParallaxUI from '../components/PortfolioUI/ScrollParallaxUI';
import SlideUI from '../components/PortfolioUI/SlideUI';
import UI_3D from '../components/PortfolioUI/UI_3D';
import BookhabitBasicUI from '../components/PortfolioUI/bookhabit/BookhabitBasicUI';
import BookhabitUI_3D from '../components/PortfolioUI/bookhabit/BookhabitUI_3D';

const cloneCodingPlatform:PortfolioDetailType = {
    author_name:"이현진",
    PortfolioDoc:{
        title:"번개장터 클론코딩", 
        purpose:"번개장터의 UI를 직접 하나하나식 따라쳐보면서 css를 익히고 퍼블리싱의 개념을 잡는데 익숙해지기 위해서 클론코딩을 혼자서 진행해보았습니다",
        introduce:"번개장터의 웹사이트에서 element 개발자도구에서 div하나하나씩 다 파보면서 직접 제 프로젝트에 하나하나 모두 구현하였습니",
        process:["element탭을 보고 하나하나씩 모두 뜯어가다보니 한번 헷갈리기 시작하면 div의 영역이나 css의 작은 부분들까지 모두 헷갈리면서 에러를 잡기 힘들게 되었습니다. 그래서 그냥 따라치는 것이 아닌 div영역을 제가 직접 컴포넌트 나누듯이 나누고 flex를 따로 공부하면서 레이아웃에 대해서 개념을 잡고 나니 점점 클론코딩이 쉬워졌고 큰 부분들은 제가 직접 작성해보고 나중에 코드를 보는 식으로 개발했습니다"], 
        learned:["제가 직접 디자인한 것이 아니라 있는 그대로를 퍼블리싱한 것이라서 디자인을 직접 해보지 못한게 아쉽습니다","퍼블리싱하면서 css와 레이아웃 그리고 어떻게 웹사이트의 구조를 잡아나가는지 배우는 뜻깊은 시간이었습니"],
        photos: ["photo1687944819864.png","photo1688466046513.png","photo1688466360373.jpg"],
        important_functions:[
            {
                important_function_desc:"번개장터를 만들면서 메인 UI의 슬라이드기능을 구현했을 때 가장 인상깊었고 배너를 어떨 때 사용할 지 알게되었습니",
                important_function_photo:["photo1687944937871.png"]
            }
        ],
        usedTechnology:["react","javascript","html","css"],
        developPeriod:{
            start:"2022-11-01",
            end:"2022-12-11",
        },
        demoLink:{
            projectURL:"",
            githubURL:"https://github.com/bookhabit/build_your_portfolio",
            designURL:"https://www.figma.com/file/njTdqOOdQ8t6mHfPc9L0cB/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EA%B4%80%EB%A6%AC-%EC%82%AC%EC%9D%B4%ED%8A%B8?type=design&node-id=0-1&mode=design&t=XdObjeiUPsZmuC4T-0",
            documentURL:"https://www.notion.so/8f36464ecd574df8a6f34e637fefb602",
        },
        category:"clone",
        selectedUI:"A",
        _id:"649bff04b8e47edd49b16e5d",
        author:"649060df8f0c8613f7649b1c",
    }
}

const mernStartProject:PortfolioDetailType = {
    author_name:"이현진",
    PortfolioDoc:
    {
        title:"MERN 보일러플레이트", 
        purpose:"프로젝트 개발을 시작할 때 프로젝트 세팅이 가장 오래걸리고 반복되는 작업이라고 느꼇습니다. 그래서 이 반복적인 작업과 새로운 프로젝트를 시작할 때 시간과 노동을 줄이기 위해서 기본적인 auth기능과 기본CRUD 및 필요 라이브러리 설치 및 라우팅을 구현해두고자 이 프로젝트를 시작했습니다",
        introduce:"express를 공부하면서 프론트,백 풀스택으로 웹사이트를 만드는데 회원가입,인증,로그인유지,cors에러,데이터베이스연동,기본CRUD는 로직이 항상 똑같은데 프로젝트 시작할때마다 반복되는 작업이 시간이 너무오래걸리기 때문에 아이디어 1개를 떠올렸을 때  미리 라이브러리를 설치하고 기본기능들을 구현함으로써 새로운 프로젝트를 시작할 때 바로 기능개발에만 집중할 수 있도록 정리한 프로젝트입니다.",
        process:["이 프로젝트를 하게 되면서 tailwindcss, recoil , 백엔드의 express,몽고DB를 모두 처음 다루어봐서 생소했지만 프로젝트를 진행하면서 공식문서,유튜브,블로그,챗GPT 등을 참고하면서 개발을 조금씩 진행하니 해당 기술들에 익숙해지게 되었습니다."], 
        learned:["이 프로젝트를 만들고 새로운 아이디어가 생겨서 프로젝트를 시작했는데 정말 초기세팅이 되어 있고 기본 기능들의 로직이 있으니 프로젝트를 시작하는데 수월하게 진행되었습니다. 앞으로도 개발을 하면서 반복적인 작업이 있다면 자동화시킬 것이 있는지 생각을 하면서 개발을 진행해보려고 합니다.","처음에 작성한 코드가 충분하다고 생각했지만 다른 프로젝트가 확장되어가면서 부족한 부분들이 많았다고 느껴서 다음 보일러 플레이트를 만들 때는 좀 더 코드를 재사용가능한 컴포넌트들을 만들고 밸리데이션이나 커스텀 hook들을 만들어서 유지보수하기 쉽게 가다듬으려고 합니다"],
        photos: ["photo1689525032081.png"],
        important_functions:[
            {
                important_function_desc:"auth 인증을 미리 구현해놓음으로써 회원가입,로그인 , 쿠키를 활용한 로그인 유지 , 소셜로그인을 프로젝트를 시작할 때 쉽게 바로 구현해볼 수 있다",
                important_function_photo:["photo1689524957026.png"]
            }
        ],
        usedTechnology:["react","javascript","html","css","node.js","MongoDB","express","recoil","tailwindcss","typescript"],
        developPeriod:{
            start:"2023-06-14",
            end:"2023-07-15",
        },
        demoLink:{
            projectURL:"",
            githubURL:"https://github.com/bookhabit/MERN_Start_Project",
            designURL:"",
            documentURL:"https://www.notion.so/MERN-start-81f5b7cf4d9943d19fdc1039a850d3db",
        },
        category:"individual",
        selectedUI:"A",
        _id:"64b41af326eb678cc07632db",
        author:"649060df8f0c8613f7649b1c",
    }
}


const portfolioProject:PortfolioDetailType = {
    author_name:"이현진",
    PortfolioDoc:{
        title:"포트폴리오 공유 플랫폼", 
        purpose:"포트폴리오 1개를 만들 떄마다 반복되는 작업을 줄이기 위해서 등록FORM양식을 만들고 프로젝트마다 내용만 다르게 등록을 하면 포트폴리오 UI를 여러개만들고 그에 맞춰서 UI를 적용하면 준비기간을 단축키시고 시간을 줄일 수 있을 것 같다고 생각했습니다. 그리고 이러한 작업을 ‘나’만이 아닌 다른 사람들에게 공유해서 누군가에게 도움이 된다면 많은 사람들의 시간을 줄여줄 수 있을 거라고 생각했습니다",
        introduce:"My Portfolio는 사용자가 이력서를 등록하고 하나씩 만들어가는 포트폴리오를 등록하면 자신만의 포트폴리오를 관리하기 쉽게 만들어주는 웹사이트입니다. 사용자이름을 검색하고 해당사용자 프로필을 보면 이력서와 사용자가 등록한 포트폴리오를 쉽게 볼 수 있습니다. 그리고 사용자는 프로필과 포트폴리오의 디자인을 자신이 직접 선택을 할 수 있습니다. 사용자 프로필은 2가지유형, 포트폴리오 디자인은 4가지 유형이 있습니다.",
        process:["제가 생각하는 이 프로젝트의 핵심은 사용자가 등록한 포트폴리오 데이터를 여러 개의 디자인 시안을 보여주고 사용자가 원하는 디자인을 선택해서 쉽게 포트폴리오를 구성할 수 있는 점이라고 생각합니다 .따라서 css로 여러가지의 디자인을 구현해야 해서 이번 프로젝트를 하면서 애니메이션을 다뤄보고 스크롤 패럴렉스기능과 3d 기능까지 디자인을 구현해보면서 css에 많이 익숙해진 것 같습니다.","1. 개발을 시작하기 전에 처음에 기획을 하고 디자인을 먼저 해두고  포트폴리오Form과 사용자Form을 미리 설계하고 개발을 진행했습니다. 데이터베이스를 다루는 게 처음이었지만 제가 필요하다고 생각하는 데이터들을 나열하고 데이터들의 타입을 생각해보고 그에 맞게 form UI를 구현하고 api를 만들고 데이터베이스를 연결해보았습니다. 그렇게 초기 form을 구현하고 개발을 진행하면서 데이터의 타입을 바꿔야 하는 상황도 생기고 새로운 데이터를 추가해야 하는 상황도 생겼습니다. 처음에는 어떻게 다시 구현해야 할 지 막막했지만 1개씩 기능을 나누어서 (프론트,백엔드,데이터베이스) 조금씩 진행했습니다. 프론트 UI는 재사용컴포넌트들로 금방 구현하게 되었고 그렇게 api에 form을 잘 요청하면 그에 맞게 백엔드와 데이터베이스의 타입을 바꿔주니 금방 해결하게 되었습니다."], 
        learned:["제가 만든 프로젝트를 처음으로 배포하려니 정말 막막했는데 이 또한 유튜브,블로그,공식문서들을 참고해가면서 어떤 방식들이 있는지 알게 되었고 프론트서버와 백엔드 서버 2개를 배포하면서 로컬에서 개발하던 환경에서 배포URL을 바꾸면서 프로젝트의 유지보수가 왜 중요한지 알게 되었고 리다이렉트 개념과 API에 대해서 많이 배우게 되었습니다.","처음으로 백엔드를 함께 구현해보면서 왜 진작 시도해보지 않았을 까 하는 마음이 들었습니다. 프론트의 새로운 기술을 익히듯이 똑같이 백엔드도 조금씩 공부를 해보고 프로젝트를 하면서 적용을 해보고 새로운 기능들을 구현해보니 금방 익숙해지고 REST API와 데이터베이스에 대한 개념이 좀 더 확실하게 잡아가는 느낌이 들었습니다.","구글로그인과 깃허브로그인 (Oauth)기능을 직접 구현해보면서 Oauth가 어떻게 동작하는 지 구조를 정확히 알게 되었고 오픈API를 어떻게 사용하면 되는 지 이해하게 되었습니다. 그리고 Oauth를 프론트에서 엑세스토큰을 얻기 위한 code를 얻고 백엔드 서버에 api를 요청하여 code를 얻은후에 액세스 토큰을 얻고 사용자의 정보를 받아서 우리 프로젝트에 맞게 회원가입 또는 로그인시키고 쿠키에 액세스토큰을 설정하는 기능을 구현하면서 express에 좀 더 익숙해졌습니다","타입스크립트를 사용하면서 정말 유용하고 꼭 필요하다는 생각이 많이 들었습니다. 프론트와 백엔드의 타입을 맞추고 그에 맞게 api통신을 하니 프로젝트의 오류가 확실히 많이 줄었고 유지보수하기 쉬웠습니다. 특히 데이터베이스,스키마가 변경되었을 때나 코드를 리팩토링할 때 기존의 정해진 데이터의 타입만 바꾸니 오류가 뜨면서 바꿔야할 곳들이 자동으로 다 보이게 되었고 그에 맞게 오류들을 해결하니 정말 너무 유용하다고 생각되었습니다."],
        photos: ["photo1689524193041.png","photo1689524193044.png","photo1689524193046.png","photo1689524193036.png","photo1689524193038.png"],
        important_functions:[
            {
                important_function_desc:"사용자의 이름과 닉네임을 통한 검색기능으로 사용자의 프로필과 포트폴리오를 쉽게 확인할 수 있습니다.",
                important_function_photo:["photo1689524689283.png"]
            },
            {
                important_function_desc:"이 프로젝트의 핵심기능은 사용자가 등록한 1가지의 데이터에 대한 여러가지의 UI입니다. 사용자가 똑같은 데이터로 여러가지의 UI를 선택하고 등록하기 전에 미리보기 기능을 통해서 자신이 입력한 데이터가 어떠한 형태로 나올 지 확인할 수 있고 어떠한 디자인들이 잘 어울리는 지 확인하고 등록할 수 있습니다",
                important_function_photo:["photo1689524330454.png"]
            }
        ],
        usedTechnology:["react","javascript","html","css","node.js","MongoDB","express","recoil","tailwindcss","three.js","typescript"],
        developPeriod:{
            start:"2023-06-13",
            end:"2023-07-16",
        },
        demoLink:{
            projectURL:"https://build-your-portfolio.netlify.app/",
            githubURL:"https://github.com/bookhabit/build_your_portfolio",
            designURL:"https://www.figma.com/file/njTdqOOdQ8t6mHfPc9L0cB/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EA%B4%80%EB%A6%AC-%EC%82%AC%EC%9D%B4%ED%8A%B8?type=design&node-id=0-1&mode=design&t=XdObjeiUPsZmuC4T-0",
            documentURL:"https://splendid-double-e68.notion.site/s-635cf1a28ee64e85b28d5b5e07aad76f?pvs=4",
        },
        category:"individual",
        selectedUI:"D",
        _id:"64b418a826eb678cc0763263",
        author:"649060df8f0c8613f7649b1c",
    }
}


const BookhabitPortfolio = () => {
    const {id:portfolioId} = useParams();

    return (
        <div>
            {/* id값에 따라서 중고거래포트폴리오 3d */}
            {/* {portfolioId === "649bff04b8e47edd49b16e5d" &&  <BookhabitBasicUI portfolio={portfolio} userPage={false} />} */}

            {/* id값에 따라서 포트폴리오 공유사이트 3d */}
            {portfolioId === "64b418a826eb678cc0763263" &&  <BookhabitUI_3D portfolio={portfolioProject} userPage={false} />}

            {/* id값에 따라서 mern 보일러 프로젝트 basic */}
            {portfolioId === "64b41af326eb678cc07632db" &&  <BookhabitBasicUI portfolio={mernStartProject} userPage={false} />}

            {/* id값에 따라서 번개장터 클론코딩 프로젝트 basic */}
            {portfolioId === "649bff04b8e47edd49b16e5d" &&  <BookhabitBasicUI portfolio={cloneCodingPlatform} userPage={false} />}

        </div>
    );
};

export default BookhabitPortfolio;