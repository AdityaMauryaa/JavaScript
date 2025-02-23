let h1 = React.createElement('h1', null, "Hello from React");
var parent=document.querySelector("#parent")
console.log(parent)
var root=ReactDOM.createRoot(parent)
root.render(h1)