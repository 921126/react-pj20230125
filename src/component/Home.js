import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <div>
                <h3>Home페이지..</h3>
                <ul>
                    <li><Link to="/user">회원페이지</Link></li>
                    <li><Link to="/user?id=aaa123&age=1">회원페이지</Link></li>
                    
                    <li><Link to="/info/1">회원정보페이지</Link></li>
                    <li><Link to="/info/2">회원정보페이지</Link></li>
                    <li><Link to="/info/3">회원정보페이지</Link></li>

                    {/* 중첩라우터 */}
                    <li><Link to="/board">board페이지</Link></li>

                    {/* 네비게이트컴포넌트 */}
                    <li><Link to="/mypage">마이페이지</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Home;