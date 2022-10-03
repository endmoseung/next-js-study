import { getMovies } from "apis/Movies";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  // next js에서 파일명 index.ts는 홈이다.
  type Movies = {
    poster_path: string;
    overview: string;
    title: string;
    popularity: number;
  };
  const [movieDatas, setMovieDatas] = useState<Movies[]>([]);
  useEffect(() => {
    const getMovie = async () => {
      const data = await getMovies();
      setMovieDatas(data.results);
    };
    getMovie();
  }, []);
  // const handleCounter = ()=>{
  //   setCounter(counter+1)
  // }
  console.log(movieDatas);
  return (
    <Container>
      <MainText>hello</MainText>
      <HomeTitle>실험인데용</HomeTitle>
      <MovieContainer>
        {movieDatas?.map((movies: any) => {
          return (
            <MovieWrapper key={movies.id}>
              <div>{movies.title}</div>
            </MovieWrapper>
          );
        })}
      </MovieContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: mintcream;
  width: 100%;
  text-align: center;
`;

const MainText = styled.div`
  color: red;
`;

const HomeTitle = styled.div`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

const MovieContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MovieWrapper = styled.div`
  width: 200px;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: ${({ theme }) => theme.colors.BLACK};
`;
