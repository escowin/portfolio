import React from "react";
import { render, cleanup } from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import Projects from "..";

const soloWork = {
    name: "solo-work",
    description: "projects built by me"
};

describe('Projects render', () => {
    it('renders', () => {
        render(<Projects currentCategory={portrait}/>)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Projects currentCategory={soloWork}/>)
        expect(asFragment()).toMatchSnapshot()
    })
})

afterEach(cleanup);