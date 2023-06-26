import { UserInfoType } from "../pages/UserPage";

const UserInfo = ({user}:{user:UserInfoType|undefined}) => {
    console.log('props ',user)
    return (
        <div className="w-full">
            <div className="profile-div w-full bg-UI_user_profile_bg p-6">
                <h2>{user?.name}</h2>
            </div>
            <div className="middle-div w-full flex flex-col gap-4 md:flex-row items-center mt-8 ">
                <div className="resume-div w-1/2 bg-UI_resume_card_bg p-5">
                    <div className="flex justify-between">
                        <h2>이력서</h2>
                        <span>펼쳐보기</span>
                    </div>
                    <div className="content">
                        내용
                    </div>
                </div>
                <div className="coverLetter-div w-1/2 bg-UI_resume_card_bg p-5">
                    <div className="flex justify-between">
                        <h2>자기소개서</h2>
                        <span>펼쳐보기</span>
                    </div>
                    <div className="content">
                        내용
                    </div>
                </div>
            </div>
            <div className="portfolio-div w-full bg-UI_portfolio_card_bg flex flex-col items-center mt-8 py-10 px-16">
                    <h2 className="text-white bg-neutral-400 p-3 rounded-lg font-bold">Portfolio</h2>
                    <div className="protfoilo-group flex flex-col items-center justify-center gap-6 md:flex-row mt-12">
                        <div className="flex flex-col items-center category-clone gap-4">
                            <p>클론코딩</p>
                            <div className="bg-black rounded-full w-40 h-40"></div>
                        </div>
                        <div className="flex flex-col items-center  category-clone gap-4">
                            <p>개인프로젝트</p>
                            <div className="bg-black rounded-full w-40 h-40"></div>
                        </div>
                        <div className="flex flex-col items-center  category-clone gap-4">
                            <p>협업프로젝트</p>
                            <div className="bg-black rounded-full w-40 h-40"></div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default UserInfo;