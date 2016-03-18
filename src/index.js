import React from 'react';
import ReactDOM from 'react-dom';
import TauChart from 'taucharts-react';
import { api } from 'taucharts';
import { times, identity } from 'lodash';

const chartOptions = {
	type: 'line',
	x: ['x'],
	y: ['y'],
	color: 'type',

	guide: [
		{
			x: { autoScale: false },
			y: { autoScale: false, min: -1.5, max: 1.5 },
			interpolate: 'basis'
		}
	],

	plugins: [
		api.plugins.get('trendline')({ showPanel:false })
	]
};

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.options = chartOptions;
		this.state.data = times(100, identity).reduce((memo, i) => {
			let x = i * (Math.PI / 100);
			return memo.concat([
				{
					x: x,
					y: Math.sin(x),
					type: 'sin'
				},
				{
					x: x,
					y: Math.cos(x),
					type: 'cos'
				}
			]);
		}, []);

		setInterval(() => {
			const data = this.state.data;
			const last = data[data.length - 1];
			const newX = last.x + (Math.PI / 100);
			data.shift();
			data.shift();
			data.push({x: newX, y: Math.sin(newX), type: 'sin'});
			data.push({x: newX, y: Math.cos(newX), type: 'cos'});
			this.setState({ data });
		}, 200);
	}

	render() {
		return (
			<TauChart data={this.state.data} options={this.state.options} />
		);
	}

}

ReactDOM.render(<App />, document.getElementById('container'));
