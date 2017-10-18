//SurveyField is contains logic to render single Field
//SurveyNew is container for SurveyForm and SurveyFormReview
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <input {...input} style={{ marginBottom: '4px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
