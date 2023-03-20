import React from "react";
import Image from "next/image";
import {FaGithub} from "react-icons/fa";

export const Header: React.FC = () => {

	return <div className="max-w-full h-32 mx-[10%] flex justify-between items-center">

		<div className="w-36 h-5 relative">
			<Image
				src="/algo-logo.svg"
				alt="algo-logo-svg"
				fill
			/>
		</div>


		{/*<h6 className="w-auto*/}
		{/*text-black text-[1.5rem] font-normal font-iceland"*/}
		{/*>*/}
		{/*	Github*/}
		{/*</h6>*/}

		<FaGithub size={24}/>
	</div>
}
