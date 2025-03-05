import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import "@testing-library/jest-dom";

// test and it are the same function 

describe("Contact us component", () => {

it("Should load contact us component ",  () => {
   render(<Contact />);

    const heading  = screen.getByText(/Contact Us/i);
    expect(heading).toBeInTheDocument();
    
}); 

it("Should load button contact us component ",  () => {
    render(<Contact />);
 
     const button  = screen.getByText("Submit");
     expect(button).toBeInTheDocument();
     
 }); 

it("Should load input name contact us component ",  () => {
    render(<Contact />);
 
     const inputName = screen.getByPlaceholderText("Enter your name");
     expect(inputName).toBeInTheDocument();
     
}); 

test("Should load input boxes contact us component ",  () => {
    render(<Contact />);
 
     const inputBoxes = screen.getAllByRole("textbox"); // get all input boxes

        expect(inputBoxes).toHaveLength(3);
     
 }); 

});