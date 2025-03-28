import React from "react";
import { Search } from "lucide-react";
export function Sidebar() {
  const trendingTopics = [
    "英文",
    "python",
    "鋼琴",
    "日文",
    "健身",
    "攝影",
    "吉他",
    "韓文",
    "javascript",
  ];
  return (
    <div className="flex w-60 flex-shrink-0 flex-col gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="探索"
          className="h-12 w-full rounded-md border border-zinc-200 bg-transparent px-3 text-sm text-zinc-900 shadow-sm transition-colors"
        />
        <Search className="absolute right-3 top-3.5 h-5 w-5 text-zinc-400" />
      </div>
      <div className="rounded-lg border border-zinc-200 bg-white shadow-sm">
        <div className="p-6 pb-2">
          <span className="font-medium text-zinc-900">熱門主題</span>
        </div>
        <div className="px-6 pb-6">
          {trendingTopics.map((topic) => (
            <a key={topic} href={`/search/${topic}`}>
              <button className="flex h-9 w-full items-start justify-start rounded-md px-4 py-2 text-sm text-zinc-900 hover:bg-zinc-50">
                ={topic}=
              </button>
            </a>
          ))}
          <a href="/explore">
            <button className="flex h-9 w-full items-start justify-start rounded-md px-4 py-2 text-sm text-zinc-500 hover:bg-zinc-50">
              探索更多...
            </button>
          </a>
        </div>
      </div>
      <div className="text-xs text-zinc-500">
        <a
          href="https://thoth.tw/policy"
          target="_blank"
          className="hover:underline"
        >
          隱私權政策
        </a>
        <span className="mx-2">·</span>
        <a
          href="https://www.facebook.com/thothtw"
          target="_blank"
          className="hover:underline"
        >
          Facebook 粉絲專頁
        </a>
        <span className="mx-2">·</span>
        <a href="https://thoth.tw" target="_blank" className="hover:underline">
          托特 thoth @ 2025
        </a>
      </div>
    </div>
  );
}


export default Sidebar; 