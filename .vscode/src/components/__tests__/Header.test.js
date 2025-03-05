import { Provider } from "react-redux";
import { render, screen} from "@testing-library/react";
import Header from "../Header";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";


it("should load header component with login button", () => {
    render(
     <BrowserRouter>  
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
    
});