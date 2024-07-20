"use client";

import { ImMusic } from "react-icons/im";
import Link from "next/link";
import { useEffect } from "react";
import PostMainLikes from "./PostMainLikes";
import useCreateBucketUrl from "../hooks/useCreateBucketUrl";
import { PostMainCompTypes } from "../types";
import { useRouter } from "next/navigation";

export default function PostMain({ post }: PostMainCompTypes) {
  const router = useRouter();

  useEffect(() => {
    const video = document.getElementById(
      `video-${post?.id}`
    ) as HTMLVideoElement;
    const postMainElement = document.getElementById(`PostMain-${post.id}`);

    if (postMainElement) {
      let observer = new IntersectionObserver(
        (entries) => {
          entries[0].isIntersecting ? video.play() : video.pause();
        },
        { threshold: [0.6] }
      );

      observer.observe(postMainElement);
    }
  }, []);

  return (
    <>
      <div id={`PostMain-${post.id}`} className="flex border-b py-6">
        <div className="cursor-pointer">
          <img
            className="rounded-full max-h-[60px]"
            width="60"
            src={useCreateBucketUrl(post?.profile?.image)}
          />
        </div>

        <div className="pl-3 w-full px-4">
          <div className="flex items-center justify-between pb-0.5">
            <Link href={`/profile/${post.profile.user_id}`}>
              <span className="font-bold hover:underline cursor-pointer">
                {post.profile.name}
              </span>
            </Link>
          </div>
          <p className="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">
            {post.text}
          </p>
          <p className="mt-[6px] text-[14px] pb-0.5 flex items-center font-semibold">
            <ImMusic size="17" />
            <span className="px-1">original sound</span>
          </p>

          <div className="mt-2.5 flex">
            <div className="relative md:min-h-[480px] md:max-h-[580px] min-h-[280px] max-h-[280px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">
              <video
                onClick={() =>
                  router.push(`/post/${post?.id}/${post?.profile?.user_id}`)
                }
                id={`video-${post.id}`}
                loop
                controls={false}
                muted
                className="rounded-xl object-cover mx-auto h-full"
                src={useCreateBucketUrl(post?.video_url)}
              />
            </div>

            <PostMainLikes post={post} />
          </div>
        </div>
      </div>
    </>
  );
}
