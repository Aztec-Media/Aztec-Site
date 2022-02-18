import { forwardRef, useState } from 'react';

export default forwardRef(function FormRow(
  { label, type, name, id, placeholder },
  ref
) {
  const [inputError, setInputError] = useState('');

  function handleInputChange(e) {
    if (e.target.value === '') {
      setInputError('Please fill out this field');
    } else {
      setInputError('');
    }
  }

  return (
    <div className='row'>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        ref={ref}
        onChange={handleInputChange}
        onFocus={handleInputChange}
      />
      <div className='slide'></div>
      <div className='error'>{inputError}</div>
    </div>
  );
});
