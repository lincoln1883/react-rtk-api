import { useSelector,useDispatch } from "react-redux"
import { orderCake ,addCake } from "./cakeSlice"
import { useState } from "react"

export const CakeView = () => {
	const [value, setValue] = useState(0)
	const cakeCount = useSelector((state) => state.cake.cakeCount)
	const dispatch = useDispatch()
	return (
		<div>
			<h2>Number of cakes:{cakeCount}</h2>
			<button onClick={()=>dispatch(orderCake(value))} >Buy cake</button>
			<input
			type="number"
			value={value}
			onChange={(e)=>setValue(parseInt(e.target.value))}
			/>
			<button onClick={()=>dispatch(addCake(value))} >Restock cakes</button>
		</div>
	)
}
