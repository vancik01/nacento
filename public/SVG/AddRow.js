import React from "react";

export default function AddRow({ color }) {
	return (
		<svg
			width="100%"
			height="auto"
			viewBox="0 0 15 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.29 11.71L9.71 16.29C9.32 16.68 8.68 16.68 8.29 16.29C7.9 15.9 7.9 15.26 8.29 14.87L11.17 12H1C0.45 12 0 11.55 0 11V1C0 0.45 0.45 0 1 0C1.55 0 2 0.45 2 1V10H11.17L8.29 7.13C7.9 6.74 7.9 6.1 8.29 5.71C8.68 5.32 9.32 5.32 9.71 5.71L14.29 10.29C14.68 10.68 14.68 11.32 14.29 11.71Z"
				fill={color}
			/>
		</svg>
	);
}
