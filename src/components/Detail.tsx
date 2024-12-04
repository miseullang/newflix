import { useEffect, useState } from "react";
import { getMoviesDetail } from "../utils/utils";

interface DetailType {
 title: string;
 overview: string; 
 poster_path: string;
 vote_average: number;
 runtime: number;
 release_date: string;
 genres: {
   id: number;
   name: string;
 }[];
}

const Detail = () => {
 const [detail, setDetail] = useState<DetailType>();
 
 useEffect(() => {
   const fetchDetail = async () => {
     // URL에서 id 파라미터 가져오기
     const id = window.location.pathname.split("/")[2];
     const data = await getMoviesDetail(Number(id));
     setDetail(data);
   };
   fetchDetail();
 }, []);

 if (!detail) return <div>Loading...</div>;

 return (
   <div className="p-8 text-white">
     <div className="flex gap-8">
       <img 
         src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
         alt={detail.title}
         className="w-80 rounded"
       />
       <div className="space-y-4">
         <h1 className="text-4xl font-bold">{detail.title}</h1>
         <div className="flex gap-2">
           {detail.genres.map(genre => (
             <span key={genre.id} className="px-2 py-1 bg-gray-700 rounded">
               {genre.name}
             </span>
           ))}
         </div>
         <p className="text-lg">{detail.overview}</p>
         <div className="space-y-2">
           <p>평점: ⭐️ {detail.vote_average.toFixed(1)}</p>
           <p>러닝타임: {detail.runtime}분</p>
           <p>개봉일: {detail.release_date}</p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Detail;