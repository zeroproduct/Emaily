import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveys: [],
      sortValue: 'date'
    };
  }

  componentDidMount() {
    this.props.fetchSurveys();
  }

  deletePost(id) {
    this.props.deleteSurvey(id, () => {
      window.location.reload();
    });
  }

  renderCard(survey) {
    return (
      <div className="card darken-1" key={survey._id}>
        <div className="card-content">
          <span className="card-title">
            {survey.title}
          </span>
          <p>
            {survey.body}
          </p>
          <p className="right">
            Sent on: {new Date(survey.dateSent).toLocaleDateString()} at{' '}
            {new Date(survey.dateSent).toLocaleTimeString()}
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
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return this.renderCard(survey);
    });
  }

  sortListByTitle() {
    const { surveys } = this.props;

    surveys.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

    this.setState({
      surveys: surveys
    });

    return surveys.reverse().map(survey => {
      return this.renderCard(survey);
    });
  }

  sortListByDate() {
    const { surveys } = this.props;

    surveys.sort((a, b) => {
      return new Date(b.dateSent) - new Date(a.dateSent);
    });

    this.setState({
      surveys: surveys
    });

    return surveys.reverse().map(survey => {
      return this.renderCard(survey);
    });
  }

  render() {
    return (
      <div>
        <label>Sort by: </label>
        <button
          className="waves-effect waves-light btn blue darken-1"
          onClick={this.sortListByDate.bind(this)}
        >
          Date
        </button>
        <button
          className="waves-effect waves-light btn blue darken-1"
          onClick={this.sortListByTitle.bind(this)}
        >
          Title
        </button>
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
