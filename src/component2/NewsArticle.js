

const NewsArticle = ({ item }) => {

    const { url, title, urlToImage, author, description, publishedAt } = item;

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return (
        <>
            <li>
                <a href={url}>
                    <img src={urlToImage} alt={title}></img>
                    <div>
                        <p>{author === null ? "기자가 없습니다." : author}</p>
                        <p>{publishedAt}</p>
                        <p>{`오늘날짜 : ${year}년 ${month}월 ${day}일`}</p>
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                </a>
                <br />
            </li>
        </>
    )
}

export default NewsArticle;