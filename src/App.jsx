import { useSelector, useDispatch } from "react-redux"
import { pressSquare } from "./reactionSlice"

export default function App() {
    const { squares, record } = useSelector((state) => state.reaction)
    const dispatch = useDispatch()

    console.log(squares)

    return (
        <div className="bg-red-500">
            <div className="bg-orange-500 grid grid-cols-5 gap-3 w-[500px] h-[500px]">
                {squares.map((number, index) => (
                    <div
                        onClick={() => dispatch(pressSquare(index))}
                        key={index}
                        className={
                            number === 0 ? "bg-blue-500" : "bg-green-500"
                        }
                    ></div>
                ))}
            </div>
            {record.map((time) => (
                <h1>{time}</h1>
            ))}
        </div>
    )
}
