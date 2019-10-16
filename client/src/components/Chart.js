import React, { Component, useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chartData: {
				labels: [props.poll.option1, props.poll.option2, props.poll.option3],
				datasets: [
					{
						label: props.poll.question,
						data: [
							props.poll.option1votes,
							props.poll.option2votes,
							props.poll.option3votes,
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
			},
		};
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right',
	};

	render() {
		return (
			<div className='chart'>
				<Doughnut
					data={this.state.chartData}
					// width={100}
					// height={150}
					options={{
						title: {
							display: false,
							text: this.props.poll.question,
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
}

export default Chart;
