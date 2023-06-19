//to render some code in jsx 
//put a class is by use of ClassName example
ReactDOM.render(<h1 className="header">Hello use className to add class in react</h1>,document.getElementById("root"))
//u can use variables to store more item :
const page =(
    <ul>
        <h1>name</h1>
        <li>james .</li>
        <li>obara .</li>
        <li>Omwoyo.</li>
    </ul>
);
console.log(page)
ReactDOM.render(page,document.getElementById("root"));
    