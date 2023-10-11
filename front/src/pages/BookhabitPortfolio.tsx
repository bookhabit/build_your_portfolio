import {  useNavigate, useParams } from 'react-router';
import { PortfolioDetailType, PortfolioType } from '../Types/PortfolioType';
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

const schoolTradeProject:PortfolioDetailType = {
    author_name:"이현진",
    PortfolioDoc:{
        title:"대학교 중고거래 플랫폼", 
        purpose:"대학교에서는 교양과목의 필요한 물품 또는 책 , 전공책 또는 자취나 기숙사 생활을 하면서 필요한 물품들이 다양하게 있습니다. 하지만 이러한 물품들은 학교를 시작할 때 구하게 되지만 생활비도 부족한 대학생들에게는 비용이 만만치 않습니다. 그럼에도 불구하고 이렇게 학기 초에 구한 물품들은 학기를 종강하게 되면 버리게 되기 일쑤입니다. 그래서 이러한 물품들을 중고로 필요한 사람들과 가지고 있는 사람을 연결하여 물품을 가지고 있는 사람은 버리게 되는 물품을 통해 용돈을 얻을 수 있게되고 물품이 필요한 사람은 대학교의 학우들을 통해서 간편하게 구할 수 있으므로 시간적으로 비용적으로 판매자와 구매자 서로에게 이득이 될 수 있습니다. 이러한 아이디어에 착안해서 이러한 프로젝트를 기획하게 되었습니다. 중고거래 플랫폼 프로젝트의 목적은 사용자들이 중고 상품을 쉽고 안전하게 거래할 수 있는 플랫폼을 제공하는 것입니다.",
        introduce:"이 서비스에서는 상품을 등록하고 다른 사람들의 상품들을 보면서 원하는 물품이 있으면 판매자와 채팅을 통해서 중고물품들을 거래할 수 있습니다. 아직은 결제기능은 없어서 채팅을 통해서 약속을 해서 만나서 주고받아야하는 형식입니다.  또한 이 서비스는 같은 대학교를 다니는 학생들로 이루어져 있어서 신뢰성이 있고 소속감을 느낄 수 있습니다",
        process:["사용자가 상품을 누르고 관심목록을 클릭하고 난 뒤 마이페이지로 이동 후 관심목록 페이지로 들어갈 수 있는 구조로 초기개발을 진행했습니다. 그렇지만 사용자가 하트색깔이 변경이 된 것으로 알 수는 있었지만 사용자의 관심목록 페이지가 궁금할 때 두번이나 더 이동을 해야 하는 불편함을 겪었습니다. 따라서 관심목록을 추가할 때마다 관심목록페이지로 바로 이동할 수 있는 모달창을 만들어서 페이지 이동의 불편함을 해결했습니다.","스켈레톤 UI구현 - 메인페이지는 어떠한 필터링 없이 해당대학교의 등록된 상품이 최신순으로 모든 데이터가 정렬되는 구조입니다. 따라서 로그인 후 또는 페이지 이동 시 사용자는 상품들 목록을 보게 되는데 그때 로딩시간동안 상품이 보이지 않을 경우 상품목록에 대한 스켈레톤 UI를 구현하여 사용자에게 기다리는 시간을 적게 느끼게 하고자 노력하였습니다.","거래희망장소 설정 - 중고거래를 할 때는 주로 거래위치를 설정하게 되는데 거래상품을 등록할 때마다 거래희망장소를 입력하는 불편함을 없애기 위해서 회원가입할 때 주거래희망장소를 입력받아서 상품을 등록할 때 기본 주소로 지정을 해두고 희망장소를 사용자가 기본주소 또는 희망장소를 변경할 수 있도록 하였습니다.","스크롤 복원기능 - 무한스크롤 기능을 구현해두었는데 스크롤을 쭉 내리다가 원하는 상품이 나와서 상세페이지로 들어갔다가 뒤로가기 클릭 시 맨 위 또는 중간으로 이동하는 불편함을 겪게 되었습니다. 따라서 로컬스토리지로 스크롤위치를 기억해두고 이전페이지 이동 시 스크롤 복원기능을 구현해서 불편함을 해결했습니다.","오픈api변경문제 - 지도 API를 사용하여 판매자와 구매자가 어디서 만날지 장소를 정하기 위해서나 주로 거래를 하는 위치를 저장하기 위해서 지도와 주소api를 사용하였다. 처음에는 구글 지도 api를 사용했는데 일정기간이 지나니 유료로 변경되어 서비스 이용이 안되었다. 그래서 카카오 주소 api를 사용하게 되었는데 처음에 구글지도 api를 구현하는게 시간이 엄청 오래걸렸다. 하지만 그때 공식문서를 보면서 구현해본 경험으로 개발흐름을 이해하게 되었고 구현해놓은 코드가 있어서 카카오 주소api로 변경하는데는 시간이 오래 걸리지 않았다. 이러한 경험으로 코드의 유지보수성이 왜 중요한지 알게 되었다.","오픈 API를 사용하면서 환경변수 env파일을 그대로 깃허브에 올렸다가 구글에서 경고메일이 온 적이 있다. 그래서 git 레퍼지토리에서 env파일을 삭제하고 다시 clone을 받아서 env파일을 .gitignore에서 처리해주고 새로 push해서 해결했다. 그 메일을 본 후로 오픈api를 사용하면서 API키나 private한 것의 보안이 중요하다는 것을 깨닫게 되었다."], 
        learned:["백엔드 공부의 필요성 : 데이터베이스를 공부하면서 MySQL의 관계형데이터베이스를 알게 되었고 처음 백엔드 담당자와 소통할 때 데이터의 타입과 response 타입들로 의견이 안맞았는데 내가 관계형데이터베이스의 개념을 잘 알지 못했기 떄문에 발생한 일이었다. 특히 프론트 엔드는 백엔드나 디자이너, 그리고 프론트 모두와의 소통이 필요한데 자신의 기술,배경지식만 알고 그들의 배경지식을 알지 못하면 소통하는데 어려움을 겪을 수 있다는 것을 알게되었다","디자인을 해보기 위해 2주동안 피그마를 공부했고 여러 웹사이트들을 벤치마킹해서 1주일동안 디자인을 만들었다. 기획과 디자인을 함으로써 실제로 개발하는데 있어서 가이드역할이 되고 지금와서 느끼는 건 기획과 디자인은 꼭 필요하고 기획과 디자인에 투자를 많이 함으로써 개발시간이 단축될 수 있다라는 것을 몸소 느끼게 되었다.","기획 : 하나의 웹사이트를 만들기 위해 아이디어를 떠올리고 그 아이디어에 대한 타깃을 정하고 좁히고 목적을 정하고 사용자들에게 어떤 가치와 이점을 제공해줄 것인지 그리고 그에 맞게 기능들을 정해보는 시간을 가지면서 개발자의 입장과 사용자의 입장 모두를 생각해보고 이러한 웹사이트를 만들기 위해 어떤 것들이 필요한지 생각해보면서 웹사이트를 만드는 과정을 정리하였고 무엇을 배우고 무엇을 해야할지 알게 되었다. 이렇게 글로 정리를 했는데 추상적으로 생각하며 개발을 하려니 손이 떨어지지 않아서 이 구조를 시각화하기 위해 디자인을 해야겠다고 생각했다"],
        photos: ["photo1697019285936.png","photo1697019285931.png","photo1697019285919.png","photo1697019285922.png","photo1697019285926.png"],
        important_functions:[
            {
                important_function_desc:"거래후기 : 중고거래에서는 신뢰가 가장 중요합니다. 거래후기는 상품이나 서비스의 품질을 평가하는 데 사용됩니다. 다른 사용자들은 이러한 후기를 통해 어떤 상품을 구입할지 결정할 때 도움을 받을 수 있습니다. 부정적인 거래후기는 사용자들이 나쁜 품질의 상품이나 서비스를 피하도록 도울 수 있습니다. 판매자는 거래후기를 통해 자신의 서비스나 제품에 대한 피드백을 얻을 수 있습니다. 이를 통해 개선할 점을 파악하고 서비스 품질을 향상시킬 수 있습니다. 거래후기는 판매자와 구매자 간의 상호 신뢰를 구축하는데 도움을 줍니다. 다른 사용자들은 거래 후 경험을 통해 어떤 판매자와 거래하는 것이 안전하고 신뢰할 만한지를 판단할 수 있습니다. 긍정적인 거래후기는 판매자나 구매자의 신뢰성을 강화시키며, 거래의 원활한 진행을 지원합니다.",
                important_function_photo:["photo1697019152319.png"]
            },
            {
                important_function_desc:"알림기능 : 알림기능을 통해서 누가 나에게 거래후기를 남겼는지 채팅을 남겼는지 바로 알 수 있으므로 서비스를 이용하는데 있어서 사용자가 직접 찾아다니지 않고 편하게 이용할 수 있게 만들었습니다.",
                important_function_photo:["photo1697019142979.png"]
            },
            {
                important_function_desc:"관심목록 : 관심목록 기능을 통해 사용자는 자신만의 관심 목록을 작성할 수 있습니다. 이는 각 사용자의 개별 관심사나 필요에 맞게 상품을 모아두는 데 도움을 줍니다. 사용자는 관심 있는 상품을 한눈에 볼 수 있으므로 검색 시간을 절약하고 더 효율적으로 원하는 상품을 찾을 수 있습니다.",
                important_function_photo:["photo1697019129583.png"]
            },
            {
                important_function_desc:"채팅서비스 : 채팅을 통해서 판매자와 구매자 모두 원하는 날짜와 시간을 정하여 만나서 중고물품을 확인하고 거래를 할 수 있습니다. 채팅서비스를 구현하면서 상대방에게 채팅이 왔을 때 채팅알림을 알려주는 모달창도 구현하고 알림창에도 1표시를 해주면서 사용자경험을 더 좋게 이끌어내기 위해 노력했습니다. 그리고 소켓연결상태를 통해서 상대방이 읽지 않은 상태면 1표시를 보여주고 상대방이 읽게 되면 1표시를 지워주었습니다. 그리고 채팅데이터는 보통 많기 때문에 화면에 보여지는 부분으로만 가져오도록 페이지네이션을 구현하고 역방향 무한스크롤을 통하여 위로 올리면서 이전 채팅데이터를 가져오는 방식으로 구현했습니다.",
                important_function_photo:["photo1697018517823.png"]
            },
            {
                important_function_desc:"모바일 웹앱 : 모바일 웹앱 중고거래를 할 때는 주로 모바일을 통해서 진행되기 때문에 모바일화면을 메인으로 개발을 진행하였습니다. 그리고 PC화면에서는 모바일 화면을 그대로 두고 서비스를 진행하고 그 주변 배경은 카테고리 태그와 검색창을 통해서 PC화면에서도 모바일화면과 같이 중고거래를 진행할 수 있도록 하였습니다.",
                important_function_photo:["photo1697018230422.png"]
            },
        ],
        usedTechnology:["Next.js","React","javascript","html","css","node.js","typescript","redux","styled-components","socket.io"],
        developPeriod:{
            start:"2023-02-20",
            end:"2023-10-11",
        },
        demoLink:{
            projectURL:"",
            githubURL:"https://github.com/bookhabit/Next_school_trade",
            designURL:"https://www.figma.com/file/yOHo0OGNR4RRm4pdHTmPX9/중고거래플랫폼(모바일)?type=design&mode=design&t=SAwMLUHUqTEww490-0",
            documentURL:"https://splendid-double-e68.notion.site/4b22f4d554ef40eb93045a0c83c8a08b?pvs=4",
        },
        category:"cooperation",
        selectedUI:"D",
        _id:"6526763253b879944514caf8",
        author:"649060df8f0c8613f7649b1c",
    },
}

const BookhabitPortfolio = () => {
    const {id:portfolioId} = useParams();
    const router = useNavigate();

    return (
        <div>
            {/* id값에 따라서 중고거래포트폴리오 3d */}
            {portfolioId === "6526763253b879944514caf8" &&
                <>
                    <BookhabitUI_3D portfolio={schoolTradeProject} userPage={false} />
                    <button className='fixed bottom-10 right-10 bg-slate-50 w-60 h-10 rounded-md text-xl text-slate-950 hover:bg-slate-600 hover:text-slate-50 p-1' onClick={()=>router(`/bookhabit/portfolio/function/6526763253b879944514caf8`)}>기능설명 보러가기</button>
                </>
              }

            {/* id값에 따라서 포트폴리오 공유사이트 3d */}
            {portfolioId === "64b418a826eb678cc0763263" &&
                <>
                    <BookhabitUI_3D portfolio={portfolioProject} userPage={false} />
                    <button className='fixed bottom-10 right-10 bg-slate-50 w-60 h-10 rounded-md text-xl text-slate-950 hover:bg-slate-600 hover:text-slate-50 p-1' onClick={()=>router(`/bookhabit/portfolio/function/64b418a826eb678cc0763263`)}>기능설명 보러가기</button>
                </>
              }

            {/* id값에 따라서 mern 보일러 프로젝트 basic */}
            {portfolioId === "64b41af326eb678cc07632db" &&  <BookhabitBasicUI portfolio={mernStartProject} userPage={false} />}

            {/* id값에 따라서 번개장터 클론코딩 프로젝트 basic */}
            {portfolioId === "649bff04b8e47edd49b16e5d" &&  <BookhabitBasicUI portfolio={cloneCodingPlatform} userPage={false} />}
        </div>
    );
};

export default BookhabitPortfolio;