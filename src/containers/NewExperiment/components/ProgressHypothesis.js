import React from 'react';

const NewExperimentProgress = (props) => (
  <div>
    <div className="definition-set">
      <span className="definition-label">Hypothesis: </span>
      <span className="definition">{props.hypothesis}</span>
    </div>
    <div className="definition-set">
      <span className="definition-label">Cause: </span>
      <span className="definition">{props.cause}</span>
    </div>
    <div className="definition-set">
      <span className="definition-label">Effect: </span>
      <span className="definition">{props.effect}</span>
    </div>
  </div>
);

NewExperimentProgress.propTypes = {
  hypothesis: React.PropTypes.string.isRequired,
  cause: React.PropTypes.string.isRequired,
  effect: React.PropTypes.string.isRequired,
};

export default NewExperimentProgress;
