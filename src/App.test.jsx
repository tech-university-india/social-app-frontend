import { render } from '@testing-library/react';
import App from './App';

test('renders properly', () => {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});
