import { Fragment, useEffect, useState } from "react";

const App = () => {

    /*
     Ajax를 이용해서 외부데이터 가져오기
     1.Promise = fetch() 
     */

    const [raw, setRaw] = useState();

    const handleClick = () => {

        //then은 구문을 연결시켜주는 느낌 그리고 데이터를 어떻게 변형할건지 이어가는??
        let Promise = fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
            .then(response => response.json())
            .then(data => setRaw(data))
    }

    //화면이 mount이후 데이터 가져오기 useEffect()
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])


    console.log(raw); //초기값을 위에서 주지 않았기 떄문에 undefined
    //그러므로 아래의 조건식을 만들어준다.
    return (
        <Fragment>
            <button onClick={handleClick}>데이터가져오기</button>

            {
                raw === undefined ?
                    <div>
                        "데이터 준비 중"
                    </div>
                    :
                    <div>
                        아이디 :{raw.userId}<br />
                        비밀번호 :{raw.userPw}<br />
                        이름 :{raw.userName}<br />
                    </div>
            }

            <h3>mount이후 데이터 가져오기</h3>
            {
                data && <div>

                    아이디 : {data.userId}
                    패스워드 : {data.userPw}
                    이름 : {data.userName}
                </div>
            }

        </Fragment>
    )
}

export default App;