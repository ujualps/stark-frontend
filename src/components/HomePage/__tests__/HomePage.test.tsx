import * as React from 'react';
import {render} from '@testing-library/react';
import {HomePage} from '../index.tsx';

describe('Testing HomePage component', () => {

    test('If component renders without crashing', () => {
        const {getByTestId} = render(<HomePage userId={2}/>);
        const controlElement = getByTestId("home");
        expect(controlElement).toBeInTheDocument();
    })

})