// import React and Redux dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { bindActionCreators } from 'redux';
import MeasureWrapper from './MeasureWrapper';

// import actions
import DepVarActions from '../../actions/DepVars';
import MeasureActions from '../../actions/Measures';
import NewExperimentActions from '../../actions/NewExperiment';
const Actions = _.extend(NewExperimentActions, MeasureActions, DepVarActions);

function mapStatetoProps(state, ownProps) {
  return {
    measures: state.DepVars.getIn([ownProps.dependentVariableId, 'measures']).toJS(),
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

class DependentVariable extends React.Component {
  componentWillMount() {
    this.props.actions.setDepVarName(this.props.name, this.props.dependentVariableId);
  }

  setName() {
    // this is all for supporting multiple depvars and measures
    // this.props.actions.setDepVarName(this.refs.depVarName.value, this.props.dependentVariableId);
    // for now this just sets the measure name to the DependentVariable name
    //   -- change once multi-measures per DependentVariable
    // this.props.actions.setMeasureName(this.refs.depVarName.value, this.props.measures[0]);
  }

  render() {
    return (
      <div>
        <h3 className="subsection-title">Dependent Variable</h3>
        <p className="guide">The dependent variable is the outcome you will measure, and it
        may be as simple as your effect, but it needs to be related.</p>
        <MeasureWrapper
          key={this.props.dependentVariableId}
          dependentVariableId={this.props.dependentVariableId}
        />
      </div>
      );
  }
}

DependentVariable.propTypes = {
  actions: React.PropTypes.object,
  name: React.PropTypes.string.isRequired,
  dependentVariableId: React.PropTypes.number.isRequired,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(DependentVariable);
