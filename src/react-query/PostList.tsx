import React from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
  const pageSize = 10;

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className='list-group'>
        {data.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.map((post) => (
              <li key={post.id} className='list-group-item'>
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className='btn btn-primary my-3 ms-1'
      >
        {isFetchingNextPage ? 'Loading...' : 'Load more'}
      </button>
    </>
  );
};

export default PostList;
