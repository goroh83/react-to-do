import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#fafafa',
			padding: '12px',
			marginLeft: '12px',
			borderBottom: '1px solid #f4f4f4',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
			color: this.props.todo.completed ? '#bdbdbd' : '#333333'
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'   '}
					{title}
				</p>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todos: PropTypes.object.isRequired
};

export default TodoItem;
