import { getMovieDetails } from "apis/movies";
import Seo from "components/Seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  const [title, id]: any = router.query.params || [];

  useEffect(() => {
    const getMovieDetail = async () => {
      const data = await getMovieDetails(id);
      console.log(data);
    };
    getMovieDetail();
  }, []);
  return (
    <Container>
      <Seo title={title}></Seo>
      <div>{title}</div>
    </Container>
  );
}

const Container = styled.div``;
