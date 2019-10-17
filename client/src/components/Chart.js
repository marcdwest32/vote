import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ poll }) => {
	const chartData = {
		labels: [poll.option1, poll.option2, poll.option3],
		datasets: [
			{
				label: poll.question,
				data: [
					poll.option1votes,
					poll.option2votes,
					poll.option3votes,
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
				],
				borderWidth: 1,
			},
		],
	}

	return (
		<div className='chart'>
			<Doughnut
				data={chartData}
				options={{
					title: {
						display: false,
						text: poll.question,
						fontSize: 25,
					},
					legend: {
						display: true,
						position: 'right',
					},
				}}
			/>
		</div>
	);
}

export default Chart;
