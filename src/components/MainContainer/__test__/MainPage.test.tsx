import * as React from 'react';
import {render} from '@testing-library/react';
import {MainPage} from '../index.tsx';

const setUser = (id: number) => {}

describe('Testing MainPage component', () => {

    test('If component renders without crashing', () => {
        const {getByTestId} = render(<MainPage setUser={setUser} userId={2}/>);
        const controlElement = getByTestId("mainpage");
        expect(controlElement).toBeInTheDocument();
    })

})