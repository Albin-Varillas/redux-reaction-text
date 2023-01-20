import { useSelector } from "react-redux"

export default function App() {
    const squares = useSelector((state) => state.reaction.squares)
    console.log(squares)

    const arr = Array(25).fill(0)

    return (
        <div className="bg-red-500">
            App
            <div className="bg-orange-500 grid grid-cols-5 gap-3 w-[500px] h-[500px]">
                {squares.map((number, index) => (
                    <div key={index} className="bg-blue-500"></div>
                ))}
            </div>
        </div>
    )
}
