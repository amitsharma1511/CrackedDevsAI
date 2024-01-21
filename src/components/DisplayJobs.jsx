import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchJobs } from '../services/fetchJobs';
import styled from 'styled-components';
import placeholder from '../assets/placeholder.svg';

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

// const Div = styled.div`
//   max-width: 64rem;
// `;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  max-width: 60%;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  /* @media (max-width: 900px) {
    max-width: 90%;
  } */

  @media (min-width: 500px) and (max-width: 700px) {
    /* Styles to apply when the screen width is between 500px and 700px */
    max-width: 100%;
  }

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 30%;
  object-fit: cover;
  padding: 1rem;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.li`
  font-size: 1rem;
  margin-bottom: 10px;
`;

function DisplayJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await fetchJobs();
        setJobs(apiResponse);
      } catch (error) {
        console.error('Error fetching data from API. ', error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetchJobs().then((response) => {
  //     setJobs(response);
  //   });
  // }, []);

  // console.log('JOBS: ', jobs);

  const handleClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  const listJobs = jobs.map((job) => {
    return (
      <Ul key={job.id} onClick={() => handleClick(job.id)}>
        <CardContainer>
          {job.image_url ? (
            <Image src={job.image_url} alt='Company Image' />
          ) : (
            <Image src={placeholder} alt='Company Image' />
          )}
          <Content>
            <Title>{job.company}</Title>
            <Title>{job.title}</Title>
          </Content>
        </CardContainer>
      </Ul>
    );
  });

  return <>{jobs ? <div>{listJobs}</div> : <h2>Loading...</h2>}</>;
}

export default DisplayJobs;
