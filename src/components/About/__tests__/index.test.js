import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";
// if component is updated, snapshot becomes stale. write new snapshot, test runner cli u
describe('About component', () => {
    // render.about-test
    // - first-test | renders About component via JSX. (it(...) & test(...) are interchangeable)
    it('renders', () => {
        render(<About />);
    });

    // - second-test
    it('matches snapshot DOM node structure', () => {
        // render about
        const { asFragment } = render (<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

afterEach(cleanup);