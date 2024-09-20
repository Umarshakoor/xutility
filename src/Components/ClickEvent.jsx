function ClickEvent() {
    let firstname = "xpro";
    function sayHello() {
        firstname = "Umar";
        alert(firstname)
    }
    return (
        <div>
            <h2>{firstname}</h2>
            <button onClick={() => sayHello()}>Click me</button>
        </div>
    )
}
export default ClickEvent