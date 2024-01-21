import Pre from '../ui/Pre';

function LearningPlan({ learning }) {
  return (
    <div>
      <h1>Learning plan for this role</h1>
      <Pre>{learning}</Pre>
    </div>
  );
}

export default LearningPlan;
