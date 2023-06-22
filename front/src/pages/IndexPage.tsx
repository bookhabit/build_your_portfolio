import { useNavigate } from "react-router"
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import { PostData } from "../Types/PostType";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../components/testRestAPI/Image";

export default function IndexPage() {
  const router = useNavigate();
  const {user} = useContext(UserContext)
  const [posts,setPosts] = useState<PostData[]>([]);
  useEffect(()=>{
    axios.get('/posts').then(response=>{
      setPosts(response.data)
    })
  },[])
  console.log(user)
  // 포트폴리오 작성이 처음이라면 이력서 form페이지로 리다이렉션 시키기
  const handleClick = ()=>{
    // api 요청 : 데이터베이스에 유저의 포트폴리오 정보가 있는지 확인
    if(user?.userResumeDoc){
      router('/protfolio/create')
    }else{
      alert('아직 이력서가 작성되지 않았습니다\n이력서를 작성해주세요')
      router('/resume/create')
    }
  }

  return (
    <div className="relative h-screen">
      <div className="mt-8 grid gap-x-6 gap-y-8 xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.length > 0 && posts.map(post => (
        <Link to={'/post/'+post._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {post.photos?.[0] && (
              <Image className="rounded-2xl object-cover aspect-square" src={post.photos?.[0]}/>
            )}
          </div>
          <h3 className="text-md text-gray-800">{post.title.length>15 ? post.title.slice(0,15)+' ...' :post.title}</h3>
        </Link>
      ))}
      </div>
      {user && (
        <div className="absolute w-48 bottom-5 right-5">
          <button className="w-full bg-header_bg text-header_element p-2 rounded-full" onClick={handleClick}>
            포트폴리오 등록하기
          </button>
        </div>
      )}
    </div>
  )
}
