// const parent = React.createElement("div",{id: "parent"} ,
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{}, "I am an h1 tag"),
//         React.createElement("h2",{}, "I am an h1 tag")
//     ]),

//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{}, "I am an h1 tag"),
//         React.createElement("h2",{}, "I am an h1 tag")
//     ])
//  );

// const heading = React.createElement("h1", {id:"heading"} ,"Hello world from react");

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const  heading = React.createElement("h1",{id : "heading"}, "my name is virat");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


