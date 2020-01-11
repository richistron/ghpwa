import {ChangeEvent} from 'react';

const handleInputChange = (setValue: (str: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

export default handleInputChange;
