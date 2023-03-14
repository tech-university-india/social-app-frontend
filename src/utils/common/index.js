export const formatErrorMessage = (errorMessage) => {
	// remove double quotes from message
	const newErrorMessage = errorMessage.replace(/"/g, '');

	switch (newErrorMessage) {
	case 'User not found':
		return 'Incorrect Email or Password';
	case 'userName length must be at least 3 characters long':
		return 'Username must be at least 3 characters long';
	}

	return newErrorMessage;
};