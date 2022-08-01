import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

describe ('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav/>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts camera emoji into p', () => {
        // arrange
        const { getByLabelText } = render(<Nav/>);
        // assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange query
        const { getByTestId } = render(<Nav/>);
        // assert
        expect(getByTestId('link')).toHaveTextContent('The react portfolio');
        expect(getByTestId('about')).toHaveTextContent('About');
    });
})

afterEach(cleanup);