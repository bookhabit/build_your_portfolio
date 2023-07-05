import { useNavigate } from "react-router";
import { UserInfoType } from "../../Types/userType";
import { useEffect } from "react";



const UserScrollParallaxUI = ({user}:{user:UserInfoType|null|undefined}) => {
    const router = useNavigate();

    // scroll 애니메이션
    const fadeIn = (element:Element) =>{
        gsap.to(element,1,{
            opacity:1,
            y:-30,
            ease:"power4.out",
            duration:5,
        })
    }
    
    const moveToLeft = (element:Element, distance:number) => {
        gsap.fromTo(element,{x:0},{x:-100})
      };
    
    const moveToRight = (element:Element, distance:number) => {
        gsap.fromTo(element,{x:0},{x:100})
    };
    
    const increaseTextSize = (element:Element, size:number) => {
    gsap.to(element, {
        fontSize: `+=${size}px`,
        duration: 1,
        ease: "power4.out",
    });
    };
    const decreaseTextSize = (element:Element, size:number) => {
        gsap.to(element, {
            fontSize: `-=${size}px`,
            duration: 1,
            ease: "power4.out",
        });
    };
    
    const increaseImageSize = (element:Element, scale:number) => {
        gsap.to(element, {
            scale: `${scale}`,
            duration: 1,
            ease: "power4.out",
        });
    };
    const decreaseImageSize = (element:Element, scale:number) => {
        gsap.to(element, {
            scale: `${scale}`,
            duration: 1,
            ease: "power4.out",
        });
    };

    useEffect(()=>{
        // 관찰자 생성
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
        };

        const translateOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const increaseOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1,
        };

        const fadeObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                }
                if (entry.isIntersecting) {
                    fadeIn(entry.target);
                    fadeObserver.unobserve(entry.target)
                }
            });
        }, options);

        const leftObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                }
                if (entry.isIntersecting) {
                    moveToLeft(entry.target,100);
                    leftObserver.unobserve(entry.target)
                }
            });
        }, translateOptions);

        const rightObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                }
                if (entry.isIntersecting) {
                    moveToRight(entry.target,100);
                    rightObserver.unobserve(entry.target)
                }
            });
        }, translateOptions)

        const textObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    decreaseTextSize(entry.target,25)
                    return
                }
                if (entry.isIntersecting) {
                    increaseTextSize(entry.target,25)
                    textObserver.unobserve(entry.target)
                }
            });
        }, increaseOptions)

        const imageObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    decreaseImageSize(entry.target,1.5)
                }
                if (entry.isIntersecting) {
                    increaseImageSize(entry.target,1.5)
                    imageObserver.unobserve(entry.target)
                }
            });
        }, increaseOptions)

        // 반복문을 돌려 모든 DOM에 적용
        const fadeList = document.querySelectorAll(".fadeInContainer");
        const leftList = document.querySelectorAll(".leftMoveContainer");
        const rightList = document.querySelectorAll(".rightMoveContainer");
        const textList = document.querySelectorAll(".textContainer");
        const imageList = document.querySelectorAll(".imageContainer");
        fadeList.forEach((el) => fadeObserver.observe(el));
        leftList.forEach((el) => leftObserver.observe(el));
        rightList.forEach((el) => rightObserver.observe(el));
        textList.forEach((el) => textObserver.observe(el));
        imageList.forEach((el) => imageObserver.observe(el));

    },[])

    // 애니메이션 적용할 요소에 위에 있는 className 적용

    return (
        <div>
            안녕
            {user?.name}
            {user?.email}
        </div>
    );
};

export default UserScrollParallaxUI;