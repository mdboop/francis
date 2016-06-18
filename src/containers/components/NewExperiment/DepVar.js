// import React and Redux dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import { bindActionCreators } from 'redux';
import MeasureWrapper from './MeasureWrapper';

// import actions
import DepVarActions from '../../actions/DepVars';
import MeasureActions from '../../actions/Measures';
import NewExperimentActions from '../../actions/NewExperiment';
const Actions = extend(NewExperimentActions, MeasureActions, DepVarActions);

function mapStatetoProps (state, ownProps) {
  return {
    name: state.DepVars.getIn([ownProps.depVarId, 'name'])
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var DepVar = React.createClass({

  setName: function () {
    this.props.actions.setDepVarName(this.refs.depVarName.value, this.props.depVarId);
  },

  render: function () {
    return (
      <div>
        <label>dep Variable Name:
        <input
          type="text"
          ref="depVarName"
          onChange={this.setName}
          value={this.props.name}/>
        </label>
        <div> Name: {this.props.name} </div>
        <MeasureWrapper key={this.props.depVarId} depVarId={this.props.depVarId} />
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(DepVar);
