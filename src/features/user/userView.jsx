import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "./userSlice"

export const UserView = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	
	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	return (
		<div>
			<h2>List of users</h2>
			{user.loading && <div>Loading...</div>}
			{!user.loading && user.error ? <div>Error:{user.error}</div> : null}
			{!user.loading && user.user.length > 0 ? (
			<ul>
			{user.user.map((user) => (
			<li key={user.id}>{user.name} - {user.email}</li>
			))}
			</ul>
			) : null}
		</div>
	)
}
