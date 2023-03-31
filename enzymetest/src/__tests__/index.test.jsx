import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from '../pages/index';

import * as React from 'react';

describe('Sample Test', () => {
    it('should test that true is true', () => {
        render(<Home />)
        expect(screen.getByTestId("thisIsATest")).toBeInTheDocument();
        expect(screen.getByTestId("testing")).toBeInTheDocument();
        expect(screen.getByTestId("HelloWorld")).toBeInTheDocument();
    });
});