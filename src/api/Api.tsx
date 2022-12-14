import '../App.css';
import { useEffect } from 'react';
import useApi from './useApi';
import posts from './posts';
import comments from './comments';


const Api: React.FC = () => {

    const getPostsApi = useApi(posts.getPosts());
    const getCommentsApi = useApi(comments.getComments());
 


    useEffect( () => {  
        getPostsApi.request();   
        getCommentsApi.request();
              }, []);



    return (
            <div className='react-scrollable-list'>
                
                <div>
        <h1>Posts</h1>
        {getPostsApi.loading && <p>Posts are loading!</p>}
        {getPostsApi.error && <p>{getPostsApi.error}</p>}
        <ul>
          {getPostsApi.data?.map(
                (post) => (
                    <li key={post.id}>{post.body}</li>
          ))}
        </ul>
      </div>
      {/* Comment List */}
      <div>
        <h1>Comments</h1>
        {getCommentsApi.loading && <p>Comments are loading!</p>}
        {getCommentsApi.error && <p>{getCommentsApi.error}</p>}
        <ul>
          {getCommentsApi.data?.map(
            (comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </div>
            
                           
            </div>
      
    )
};


export default Api;