import React from "react";
import { useAuth } from "../../context/AuthContext";
import LogOut from "../../public/SVG/buttons/LogOut";

export default function Logout() {
	const { logOut } = useAuth();

	function handleLogout() {
		logOut().then(() => {
			router.push("/");
		});
	}
	return (
		<button
			className="flex items-center justify-center w-full gap-2"
			onClick={handleLogout}
		>
			<LogOut></LogOut>
			<div className="text-red-500">Logout</div>
		</button>
	);
}
