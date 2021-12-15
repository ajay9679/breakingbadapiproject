import React from 'react';

const FormButton = ({children, type, ...others}) => {
	return <button type={type} {...others} >
		{children}
	</button>
};

export default FormButton;
