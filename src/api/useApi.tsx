import { AxiosResponse } from 'axios';
import { useState } from 'react';

type CommentsDataType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}[]

type PostsDataType = {
    userId: number,
    id: number,
    title: string,
    body: string,
}[]

//  useApi(apiFunc)
//(apiFunc = parameter => 'getComments' is passed as an argument)
export default (apiFunc: Promise<AxiosResponse<any, any>>) => {


    const [data, setData] = useState<PostsDataType | CommentsDataType>();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    const request = async () => {
      setLoading(true);
      try {
        const result = await apiFunc;
        setData(result.data);
      } catch (err: any) {
        setError(err.message || "Unexpected Error!");
      } finally {
        setLoading(false);
      }
    };
  
    return {
      data,
      error,
      loading,
      request
    };
  };