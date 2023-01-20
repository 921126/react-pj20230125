import axios from "axios";
import { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";

import styled from "./NewList.module.css";
import { useParams } from "react-router-dom";


const NewsList = () => {

    //1. API 가져오기
    //apikey : 878b50d756a2439681b44dae711850ca

    //5. 라우터로 들어오는 값의 처리
    const {category} = useParams();

    //category가 없거나 undefined이면 all로 할당
    const quary = (category || 'all')=== 'all'? '' : `&category=${category}` 
    // console.log(quary);

    //2. useEffect에서 화면로딩시 데이터처리
    const [data, setData] = useState();

    useEffect(() => {
        //useEffect는 내장함수이므로 async의 사용이 어렵다. 그러므로 내부에 함수를 하나 더 만들어서 await을 사용해준다.
        //즉시실행함수 만들어주기
        (async () => {
            
            const url = `https://newsapi.org/v2/top-headlines?country=kr${quary}&apiKey=878b50d756a2439681b44dae711850ca`;
            console.log(url);
            let { data: { articles } } = await axios.get(url);
            setData(articles);
            setLoading(true); //로딩완료
        })();
    }, [quary])

    // console.log(data);

    //3. 데이터 로딩처리 (데이터가 오기 전에 state는 undefined)
    const [loding, setLoading] = useState(false);

    if(loding === false){
        return <div>로딩중...</div>
    }

    //4. li태그를 컴포넌트로 변경
    return (
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    data &&
                    // 1. url, title, urlToImage, author, description, publishedAt
                    data.map((item, index) =><NewsArticle key={index+1} item={item}/>)
                }
            </ul>
        </div>
    )
}

export default NewsList;