import * as React from 'react';
import {render} from '@testing-library/react';
import {LoginPage} from '../index.tsx';

describe('Testing LoginPage component', () => {

    test('If component renders without crashing', () => {
        const {getByTestId} = render(<LoginPage setUser={1}/>);
        const controlElement = getByTestId("loginpage");
        expect(controlElement).toBeInTheDocument();
    })

})