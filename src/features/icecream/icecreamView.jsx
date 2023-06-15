import { useSelector,useDispatch } from "react-redux"
import { orderIceCream ,addIceCream } from "./icecreamSlice"
import { useState } from "react"

export const IceCreamView = () => {
	const [value, setValue] = useState(0)
	const iceCreamCount = useSelector((state) => state.iceCream.iceCreamCount)
	const dispatch = useDispatch()
	
	return (
		<div>
			<h2>Number of ice creams: {iceCreamCount}</h2>
			<button onClick={()=> dispatch(orderIceCream(value))}>Buy ice cream</button>
			<input
			type="number"
			value={value}
			onChange={(e)=>setValue(parseInt(e.target.value))} />
			<button onClick={()=> dispatch(addIceCream(value))}>Restock ice cream</button>
		</div>
	)
}