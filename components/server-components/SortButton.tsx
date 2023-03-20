"use client";

import React from "react";
export const SortButton: React.FC<{title: string, onClick: ()=> void}> = ({title, onClick}) => {

	return <>

		<button title={title} className="w-auto mb-2
		text-black text-[0.8rem] font-normal font-mono

		hover:translate-x-3
		hover:scale-110 duration-300"

			onClick={onClick}
		>
			{title}
		</button>

	</>
}
