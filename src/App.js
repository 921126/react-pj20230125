import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import User from './component/User';
import Info from './component/Info';
import BoardContent from './component/BoardContent';
import Board from './component/Board';
import Header from './component/layout/Header';
import MyPage from './component/MyPage';

function App() {
  /*
  1. index.js에서 브라우저 라우터로 app을 감싸준다.

  2. 각각의 컴포넌트를 만든다.

  3. Route를 이용해서 주소별로 컴포넌트 연결합니다,


  Link컴포넌트
  - a태그를 대체합니다.
  - to속성에 "라우터주소" 적어서 이동하면 됩니다.

  쿼리스트링 ? 키=값
  - useLocation()
  - useSearchParam()

  URL파라미터
  -라우터를 설정 /경로:값
  -useParams() 값을 받습니다.

   */

  return (
    <Routes>
      {/* 중첩라우터 - 헤더부분처리 (Header에 가서 Outlet컴포넌트 표기) */}
      <Route element={<Header />}>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/info/:num' element={<Info />} />
      </Route>
      {/* 각각 다른화면을 구현한 예시 */}
      {/* <Route path='/board' element={<Board />} />
      <Route path='/board/:num' element={<BoardContent />} /> */}

      {/* 중첩라우터 - 공통부분처리 (Board에 가서 Outlet컴포넌트 표기) */}
      <Route path='/board' element={<Board />}>
        <Route path=':num' element={<BoardContent />} />
      </Route>

      {/* Navigate컴포넌트 */}
      <Route path='/mypage' element={<MyPage />}>

      </Route>

    </Routes>
  );
}

export default App;
