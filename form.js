function MyForm() {
    return (
        <form>
            <label>
                Enter your name:
                <input type = "text" />
            </label>
        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementByUd('root'));
root.render(< Myform />)

function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
}