import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneJob } from '../services/fetchJobs';
import callGemini from '../services/callGemini';
import InterviewQuestions from './InterviewQuestions';
import LearningPlan from './LearningPlan';
import Button from '../ui/Button';
import ButtonGroup from '../ui/ButtonGroup';
import Pre from '../ui/Pre';

function Job() {
  const [jobDetails, setJobDetails] = useState({});
  const [interviewQuestions, setInterviewQuestions] = useState('');
  const [learningPlan, setLearningPlan] = useState('');
  const [displayInterviewQuestions, setDisplayInterviewQuestions] =
    useState(false);
  const [displayLearningPlan, setDisplayLearningPlan] = useState(false);
  const { jobId } = useParams();

  useEffect(() => {
    fetchOneJob(jobId).then((response) => {
      // console.log('One JOB Response: ', response[0]);
      setJobDetails({ ...jobDetails, ...response[0] });
    });
  }, [jobId]);

  const handleInterviewQuestionsClick = async (jobDescription) => {
    setDisplayInterviewQuestions(true);
    setDisplayLearningPlan(false);
    const prompt = `Can you help me with the interview questions for below Job description ? 
    Job description:  ${jobDescription}`;
    const questionsData = await callGemini(prompt);
    setInterviewQuestions(questionsData);
  };
  const handleLearningPlanClick = async (jobDescription) => {
    setDisplayLearningPlan(true);
    setDisplayInterviewQuestions(false);
    const prompt = `Can you help me create a 30 days learning plan to become eligible to apply for below job.
    Job description:  ${jobDescription}`;
    const learningData = await callGemini(prompt);
    setLearningPlan(learningData);
  };

  return (
    <div>
      <h3>{jobDetails.title}</h3>
      <Pre>{jobDetails.description}</Pre>
      <ButtonGroup>
        <Button
          onClick={() => handleInterviewQuestionsClick(jobDetails.description)}
        >
          Help me with interview questions
        </Button>
        <Button onClick={() => handleLearningPlanClick(jobDetails.description)}>
          Create a learning plan for this role
        </Button>
      </ButtonGroup>
      {displayInterviewQuestions && (
        <InterviewQuestions
          questions={interviewQuestions}
          heading={`Interview questions for ${jobDetails.title}`}
        />
      )}
      {displayLearningPlan && <LearningPlan learning={learningPlan} />}
    </div>
  );
}

export default Job;
