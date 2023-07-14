import ImageUI from '../../common/ImageUI';
import { styles } from '../../UserInfoUI/UserUI_3D';

type IProps={
    title:string;
    src:string;
    portfolioTitle:string;
    desc:string;
}

const IntroduceCard = ({title,src,portfolioTitle,desc}:IProps) => {
    return (
        <div className={'sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto flex flex-col items-center'}>
                <h2 className={`${styles.sectionHeadText} mb-10`}>
                    {title}
                </h2>
                <div className='bg-tertiary p-5 rounded-2xl sm:w-[900px] h-full w-full'>
                        <div className='relative w-full h-[380px] flex items-center justify-center'>
                            {src && 
                                <ImageUI
                                    src={src}
                                    className='w-full h-[380px] object-fill rounded-2xl'
                                    alt="포트폴리오 이미지"
                                />
                            }
                            {!src && 
                                <div
                                    className='bg-gray-300 w-full h-[380px] object-fill rounded-2xl flex justify-center items-center'
                                >등록된 이미지가 없습니다</div>
                            }
                        </div>

                        <div className='mt-5 w-full p-5'>
                            <h3 className='text-secondary font-bold text-[20px]'>{portfolioTitle}</h3>
                            <p className='mt-2 text-white text-[18px] leading-10'>{desc}</p>
                        </div>
                </div>

            </div>
    );
};

export default IntroduceCard;