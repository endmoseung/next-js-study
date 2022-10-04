import { getMovies } from "apis/movies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home({ results }: { results: any }) {
  // next js에서 파일명 index.ts는 홈이다.

  const router = useRouter();
  type Movies = {
    poster_path: string;
    overview: string;
    title: string;
    popularity: number;
  };

  console.log(results);

  // const [movieDatas, setMovieDatas] = useState<Movies[]>([]);
  // useEffect(() => {
  //   const getMovie = async () => {
  //     const {results} = await getMovies();
  //     setMovieDatas(results);
  //   };
  //   getMovie();
  // }, []);

  // console.log(movieDatas);

  const moveDetailPage = (id: number, title: string): void => {
    router.push(
      `/movies/${title}/${id}`

      // `/movies/${id}`//as인자로는 url로 본인이 원하는 부분만 보이도록
    );
  };
  return (
    <Container>
      <MainText>hello</MainText>
      <HomeTitle>실험인데용</HomeTitle>
      <MovieContainer>
        {results?.map((movies: any) => {
          return (
            <MovieWrapper
              onClick={() => moveDetailPage(movies.id, movies.title)}
              key={movies.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
                alt=""
              />
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
  flex-wrap: wrap;
`;

const MovieWrapper = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: all 300ms ease-in-out;
  }
  cursor: pointer;
  width: 230px;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: ${({ theme }) => theme.colors.BLACK};
  img {
    width: 100%;
    height: 200px;
  }
`;

export async function getServerSideProps() {
  const data = await getMovies();
  const results = data?.results;
  return {
    props: {
      results,
    },
  };
}
