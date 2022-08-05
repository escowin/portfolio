import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

// Nav props
const categories = [
    {
        name: 'solo-work',
        description: "projects built by me",
    }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe ('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
         categories={categories}
         setCurrentCategory={mockSetCurrentCategory}
         currentCategory={mockCurrentCategory}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
           />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts camera emoji into p', () => {
        // arrange
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
           />);
        // assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange query
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
           />);
        // assert
        expect(getByTestId('link')).toHaveTextContent('The react portfolio');
        expect(getByTestId('about')).toHaveTextContent('About');
    });
})

afterEach(cleanup);