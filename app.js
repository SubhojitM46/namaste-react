/**const heading=document.createElement("h1");
heading.innerHTML="Hello World from JavaScript";
const root = document.getElementById("root");
root.appendChild(heading);**/
// first react program
const heading=React.createElement(
    "h1",
    {id:"head"},
    "hello world from react!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);