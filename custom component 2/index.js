function Reason(){
    return(
        <div>
            
            <header>
                <nav>
               <img src="react.svg" width="40px"/>
               </nav>
            </header>
            <h1>Why i study react</h1>
            <ol>
                <li>I is simple to understand.</li>
                <li>I is a marketable language.</li>
                <li>I is good for people like me.</li>
            </ol>
            <footer>
            © 2021 James development. All rights reserved.
            </footer>
        </div>
    )
}
ReactDOM.render(<Reason/>, document.getElementById("root"))