import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

const GhForm: React.FC = () => {
  const [txt, setValue] = useState('');
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('form sent', txt);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className={'form-inline'}>
      <div className='form-group mx-sm-3 mb-2'>
        <label className='sr-only'>Username</label>
        <input
          onChange={handleInputChange}
          type='text'
          className='form-control'
          placeholder='username'
        />
      </div>
      <button type='submit' className='btn btn-primary mb-2'>
        Request
      </button>
    </form>
  );
};

export default GhForm;
