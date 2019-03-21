import React from "react";
import "./style.css";

export function Form(props) {
	return (
		<div className="jumbotron">
			<h1 className="lead" id='enterSearch'>Enter the book you'd like to find!</h1>
			{props.children}
		</div>
	)
}

export function Input(props) {
	return (
		<div className="form-group">
			<input className="form-control" {...props} />
		</div>
	)
}

export function FormBtn(props) {
	return (<button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-dark">
		{props.children}
	</button>)
}
