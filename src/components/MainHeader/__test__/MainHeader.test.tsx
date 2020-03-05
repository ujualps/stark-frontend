import * as React from 'react';
import {render} from '@testing-library/react';
import {MainHeader} from '../index.tsx';

describe('Testing Mainheader component', () => {

    test('If component renders without crashing', () => {
        const {getByTestId} = render(<MainHeader setUser={1}/>);
        const controlElement = getByTestId("mainheader");
        expect(controlElement).toBeInTheDocument();
    })

})