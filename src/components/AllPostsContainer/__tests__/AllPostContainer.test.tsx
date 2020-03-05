import * as React from 'react';
import {render} from '@testing-library/react';
import {AllPostContainer} from '../index.tsx'

describe('Testing AllPostContainer is rendered or not', () => {
    
    test('If renders without crashing', () => {
        const {getByTestId} = render(<AllPostContainer/>);
        const controlElement = getByTestId("allpost");
        expect(controlElement).toBeInTheDocument();
    })

})