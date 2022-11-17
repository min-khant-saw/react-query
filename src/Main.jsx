import React, { useRef, useCallback } from "react";
import { useQueryClient, useInfiniteQuery, useQuery } from "react-query";
import fetchData from "./components/fetchData";
import { Link } from "react-router-dom";

const Main = () => {
  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery(["project"], fetchData, {
  //   getNextPageParam: (lestPage, pages) => {
  //     return lestPage.length ? pages.length + 1 : undefined;
  //   },
  // });

  // const intObserver = useRef();
  // const lastPostRef = useCallback(
  //   (post) => {
  //     if (isFetchingNextPage) return;
  //     if (intObserver.current) intObserver.current.disconnect();
  //     intObserver.current = new IntersectionObserver(
  //       (posts, observer) => {
  //         if (posts[0].isIntersecting && hasNextPage) {
  //           fetchNextPage();
  //         }
  //       },
  //       {
  //         rootMargin: "250px",
  //       }
  //     );

  //     if (post) intObserver.current.observe(post);
  //   },
  //   [isFetchingNextPage, fetchNextPage, hasNextPage]
  // );

  const { data, isLoading, isError, error } = useQuery(["project"], fetchData);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;
  return (
    <div>
      {data.map((post, i) => (
        <div key={i}>
          <h4>{post.title}</h4>
          <p>{post.id}</p>

          <Link to={`post/${post.id}`}>Check</Link>
        </div>
      ))}
      {/* {status === "loading" ? (
        <>Loading</>
      ) : status === "error" ? (
        <>{error.message}</>
      ) : (
        data.pages.map((group, i) => {
          return (
            <div key={i}>
              {group.map((post) => (
                <div key={post.id} ref={lastPostRef}>
                  <h4>{post.title}</h4>
                  <p>{post.id}</p>
                  <Link className="btn btn-primary" to={`post/${post.id}`}>
                    Check
                  </Link>
                </div>
              ))}
            </div>
          );
        })
      )}
      <button onClick={fetchNextPage}>Next</button> */}
    </div>
  );
};

export default Main;
