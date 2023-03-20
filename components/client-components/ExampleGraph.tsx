import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import {GradientTealBlue, LinearGradient} from '@visx/gradient';
import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
import { scaleBand, scaleLinear } from '@visx/scale';
import {ParentSize, ScaleSVG} from "@visx/responsive";

const data = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]
const verticalMargin = 64;

export default function ExampleGraph() {

	return <ParentSize debounceTime={25}>

		{({width, height}) => {

		let xMax = width;
		let yMax = height - verticalMargin;

		// scales, memoize for performance
		const xScale = useMemo(
			() =>
				scaleBand<number>({
					range: [0, xMax],
					round: true,
					domain: data,
					padding: 0.35,
				}),
			[xMax],
		);

		const yScale = useMemo(
			() =>
				scaleLinear<number>({
					range: [yMax, 0],
					round: true,
					domain: [0, Math.max(...data)]
				}),
			[yMax],
		);

		return <ScaleSVG width={width} height={height}>

		<LinearGradient id="grayscale" from={"#e7e7e7"} to={"#9a9a9a"} />
		<rect width={width} height={height} fill="black" rx={14} />
		<Group top={verticalMargin / 2}>
		{data.map((d) => {
			const barWidth = xScale.bandwidth();
			const barHeight = yMax - yScale(d);
			const barX = xScale(d)
			const barY = yMax - barHeight
			return (
				<Bar
					key={`bar-${d}`}
			x={barX}
			y={barY}
			width={barWidth}
			height={barHeight}
			fill="url(#grayscale)"
				/>
		);
		})}
		</Group>
		</ScaleSVG>

	}}

	</ParentSize>
}
