import Pre from '../ui/Pre';

function InterviewQuestions({ questions, heading }) {
  return (
    <div>
      <h1>{heading}</h1>
      <Pre>{questions}</Pre>
    </div>
  );
}

export default InterviewQuestions;
