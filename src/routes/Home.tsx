import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useQuery } from "react-query";
import { fetchCoins } from "./api/api";
import { isDarkAtom } from "../atoms";
import LogIn from "./Login/Login";
import axios from 'axios';
import React, { useCallback, useEffect } from 'react'
import { Session } from "inspector";


const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`

const Container = styled.div`
  padding: 1px 20px;
  width: 460px;
  margin: 0 auto;
`;

const Aside = styled.aside`
  padding: 0px 20px;
  max-width: 300px;
  margin-left 15%;
  position: fixed
  
`;

const Loggedinuser = styled.ul`
`;
const Loggedin = styled.li`
background-color: ${(props) => props.theme.cardBgColor};
color: ${(props) => props.theme.textColor};
border-radius: 15px;
margin-bottom: 10px;
border: 1px solid white;
a {
  padding: 20px;
  transition: color 0.2s ease-in;
  display: flex;
  justify -content: center;
}
&:hover {
  a {
    color: ${(props) => props.theme.accentColor};
  }
}
`;

const Watchlist = styled.div`
  width: 280px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;

  
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: gold;
  font-weight: 700;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Button = styled.button`
background-color: ${(props) => props.theme.cardBgColor};
color: ${(props) => props.theme.textColor};
border-radius: 15px;
margin-bottom: 10px;
border: 1px solid white;
padding: 20px;
transition: color 0.2s ease-in;
display: flex;
align-items: center;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface RouteState {
  name: string;
}
interface Props {
  type: any;
}


function Home() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const { isLoading, data } = useQuery<CoinInterface[]>("allcoins", fetchCoins)
  const {} = useQuery<[]>("", )
  /*  const [coins, setCoins] = useState<CoinInterface[]>([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
       (async () => {
           const response = await axios.get("https://api.coinpaprika.com/v1/coins");
           setCoins(response.data.slice(0, 100));
           setLoading(false);
       })();
   }, []); */
   const onClickHandler = () => {
    axios.get(`/api/users/logout`)
        .then(response => {
            if (response.data.success) {
                props.history.push("/login")
            } else {
                alert('로그아웃 하는데 실패 했습니다.')
            }
        })
}
   
   
  return (
    <Wrapper>
      <Header>
        <Title>SKYROKET</Title>
      </Header>

      <Aside>
        <Loggedinuser >
          <Loggedin >
            <Link to= {`/Login`}>
              로그인
            </Link>
          </Loggedin>
          <Button onClick={toggleDarkAtom}>Dark Mode</Button>
        </Loggedinuser>
        <Watchlist>
        </Watchlist>
      </Aside>

      <Container>
        <Helmet>
          <title>SKYROKET</title>
        </Helmet>
        {isLoading ? (
          <Loader>코인떡상중</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <Img
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
    </Wrapper>


  );
}
export default Home;