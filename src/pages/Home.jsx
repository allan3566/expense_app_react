import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { PostCard } from "../components/PostCard";
export function Home() {
  const posts = [
    {
      user: {
        name: "sosa豪",
        image:
          "https://storage.googleapis.com/thoth-f591c.appspot.com/user/YROQ4nvso3oVTPVHDizJ-1725711346237.jpg",
      },
      content: {
        type: "交換技能",
        location: "中壢 或線上",
        skills: "日文 簡單畫畫指導",
        interests: "房地產知識",
        description:
          "本人有 日檢N2證照 N1差1分合格程度 畫畫在畫室上過一年的課 有一定底子 如頭貼圖是我畫的 最近想好玩研究房地產 算是這個東西來研究的心態 沒有考試等 意者私訊唷",
      },
      metadata: {
        time: "2025/3/5",
      },
    },
    // Add more posts as needed
  ];
  return (
    <div className="flex w-full flex-col">
      <Header />
      <div className="mx-auto flex w-[896px] max-w-[896px] px-4">
        <div className="ml-4">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col gap-4 pb-10">
          <h1 className="flex items-center text-2xl font-semibold leading-10 mt-6 mb-6">
            最新文章
          </h1>
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;