import { useQuery } from "@tanstack/react-query";
import PostSkeleton from "../skeletons/PostSkeleton";
import Post from "./Post";
import { useEffect } from "react";

const Posts = ({ feedType, username, userId }) => {
  const getPostEndPoint = () => {
    switch (feedType) {
      case "forYou":
        return "/api/posts/all";
      case "following":
        return "/api/posts/following";
      case "posts":
        return `/api/posts/user/${username}`;
      case "likes":
        return `/api/posts/liked/${userId}`;

      default:
        return "/api/posts/all";
    }
  };

  const postEndPoint = getPostEndPoint();
  /********Post functionality Start***********/
  const {
    data: posts,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await fetch(postEndPoint);
        const data = res.json();
        if (!res.ok) throw new Error(data.error || "Post loading failed");
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });
  useEffect(() => {
    refetch();
  }, [feedType, refetch, username]);

  return (
    <>
      {(isLoading || isRefetching) && (
        <div className="flex flex-col justify-center">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && !isRefetching && posts.length === 0 && (
        <p className="text-center my-4">No posts in this tab. Switch 👻</p>
      )}
      {!isLoading && !isRefetching && posts && (
        <div>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
export default Posts;
