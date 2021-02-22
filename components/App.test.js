import React from 'react';
import App from './App';

import { render } from '@testing-library/react';

test('hey', () => {
	const { debug } = render(<App />);
	//debug();
});
