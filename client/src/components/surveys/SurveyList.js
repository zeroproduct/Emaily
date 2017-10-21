import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  deletePost(id) {
    this.props.deleteSurvey(id, () => {
      window.location.reload();
    });
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card daarken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">
              {survey.title}
            </span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a className="blue-grey-text lighten-2">
              Yes: {survey.yes}
            </a>
            <a className="blue-grey-text lighten-2">
              No: {survey.no}
            </a>
            <button
              type="submit"
              className="delete-button red darken-1 btn-flat right white-text"
              onClick={this.deletePost.bind(this, survey._id)}
            >
              <i className="material-icons">delete_forever</i>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
