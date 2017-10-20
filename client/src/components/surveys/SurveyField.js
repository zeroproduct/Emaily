//SurveyField is contains logic to render single Field
//SurveyNew is container for SurveyForm and SurveyFormReview
import React from 'react';
import './styles.css';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <input className="ifield" {...input} style={{ marginBottom: '4px' }} />
      <div className="red-text" style={{ marginBottom: '12px' }}>
        {touched && error}
      </div>
    </div>
  );
};
