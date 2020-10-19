import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
import Nav from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //first test
    it('renders', () => {
        render(<About />);
      });
    //second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();

      })
      describe('Nav component', () => {
        // baseline test
        it('renders', () => {
          render(<Nav />);
        });
      
        // snapshot test
        it('matches snapshot', () => {
          const { asFragment } = render(<Nav />);
          // assert value comparison
          expect(asFragment()).toMatchSnapshot();
        });
      })

    });

    describe('emoji is visible', () => {
      it('inserts emoji into the h2', () => {
      // Arrange
      const { getByLabelText } = render(<Nav />);
      // Assert  
      expect(getByLabelText('camera')).toHaveTextContent('📸');
      })
    });
    describe('links are visible', () => {
      it('inserts text into the links', () => {
        // Arrange
        const { getByTestId }= render(<Nav /> );
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');

      });
    })  



  