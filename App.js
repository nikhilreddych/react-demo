import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="heading">React demo Title using functional component</h1>

const HeadingComponent = () => {
    return (
        <>
            <div id="title">
                <Title />
                {Title()}
                <Title></Title>
            </div>
            <div id="container">
                <h1>React demo using functional component</h1>
            </div>
        </>
    );
}

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(<HeadingComponent />);
//root1.render(HeadingComponent());