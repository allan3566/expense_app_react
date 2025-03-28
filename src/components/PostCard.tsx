import React from "react";
import {
  MessageCircle,
  Heart,
  Share2,
  Flag,
  MoreHorizontal,
} from "lucide-react";
interface PostCardProps {
  user: {
    name: string;
    image: string;
    subtitle?: string;
  };
  content: {
    type: string;
    location: string;
    skills?: string;
    interests?: string;
    studyGoal?: string;
    description: string;
    tags?: string[];
  };
  metadata: {
    time: string;
  };
}
export function PostCard({ user, content, metadata }: PostCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <a href="#" className="flex-shrink-0">
            <img
              src={user.image}
              alt={user.name}
              className="h-10 w-10 rounded-full object-cover shadow"
            />
          </a>
          <div className="flex flex-1 items-center">
            <div>
              <div className="font-medium">{user.name}</div>
              {user.subtitle && (
                <div className="text-sm text-zinc-500">{user.subtitle}</div>
              )}
            </div>
            <div className="ml-auto flex flex-col items-center gap-1">
              <div className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-semibold text-zinc-50">
                {content.type}
              </div>
              <div className="text-xs text-zinc-500">{metadata.time}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="space-y-1">
          <div className="flex items-center">
            <div className="flex items-center rounded bg-zinc-100 px-2 py-1 text-sm font-medium text-zinc-900">
              地點
            </div>
            <div className="ml-2">{content.location}</div>
          </div>
          {content.skills && (
            <div className="flex items-center">
              <div className="flex items-center rounded bg-zinc-100 px-2 py-1 text-sm font-medium text-zinc-900">
                擅長科目
              </div>
              <div className="ml-2">{content.skills}</div>
            </div>
          )}
          {content.interests && (
            <div className="flex items-center">
              <div className="flex items-center rounded bg-zinc-100 px-2 py-1 text-sm font-medium text-zinc-900">
                想學科目
              </div>
              <div className="ml-2">{content.interests}</div>
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="leading-7">{content.description}</div>
        </div>
        {content.tags && content.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1">
            {content.tags.map((tag) => (
              <a
                key={tag}
                href={`/search/${tag}`}
                className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-900 hover:bg-zinc-200"
              >
                #{tag}
              </a>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center gap-2">
          <button className="flex h-[26px] items-center justify-center rounded border border-zinc-200 px-3 text-xs text-zinc-900">
            <MessageCircle className="mr-1 h-4 w-4" />
          </button>
          <button className="flex h-[26px] items-center justify-center rounded border border-zinc-200 px-3 text-xs text-zinc-900">
            <Heart className="mr-1 h-4 w-4" />
          </button>
          <button className="flex h-[26px] items-center justify-center rounded border border-zinc-200 px-3 text-xs text-zinc-900">
            <Share2 className="h-4 w-4" />
          </button>
          <button className="flex h-[26px] items-center justify-center rounded border border-zinc-200 px-3 text-xs text-zinc-900">
            <Flag className="h-4 w-4" />
          </button>
          <button className="flex h-[26px] items-center justify-center rounded border border-zinc-200 px-3 text-xs text-zinc-900">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;