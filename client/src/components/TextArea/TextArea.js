import React from 'react';


const TextArea = props => {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export default TextArea;
