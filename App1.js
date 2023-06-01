import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, 
                [
                    React.createElement("div", { id: "child" }, 
                    [
                        React.createElement("h2", { id: "heading" }, "I'm an h2 tag of child1 !!"),
                        React.createElement("h3", {}, "I'm an h3 tag of child1 !!")
                    ]),
                    React.createElement("div", { id: "child2" }, 
                    [
                        React.createElement("h2", { id: "heading" }, "I'm an h2 tag of child2 !!"),
                        React.createElement("h3", {}, "I'm an h3 tag of child2 !!")
                    ])
                ]);


const heading2 = React.createElement("h2", { id: "heading" }, "Hello World from React !!");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root1.render(heading2);

root2.render(parent);

