import React, { useContext, useState } from 'react';
import handleInputChange from './actions/handleInputChange';
import handleSubmit from './actions/handleSubmit';
import AppContext from './AppContext';

const GhForm: React.FC = () => {
  const context = useContext(AppContext);
  const [txt, setValue] = useState(
    (context && context.state.currentUser) || ''
  );
  return (
    <form onSubmit={handleSubmit(txt, context)} className={'form-inline'}>
      <div className='form-group mx-sm-3 mb-2'>
        <label className='sr-only'>Username</label>
        <input
          onChange={handleInputChange(setValue)}
          type='text'
          className='form-control'
          placeholder='username'
        />
      </div>
      <button type='submit' className='btn btn-primary mb-2'>
        Submit
      </button>
    </form>
  );
};

export default GhForm;
