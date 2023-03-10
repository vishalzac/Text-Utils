import React,{useState} from "react"

export default function TextForm( props ) {
	const handelUpClick = () => {
		console.log( "uppercase was clicked" );
		setText("you have clicked an handelUpClick" + text)
		let newText = text.toUpperCase();
		setText( newText )
		props.showAlert('converted to upper case','success')
		
	}
	const handelDownClick = () => {
		setText("you have clicked an handelUpClick" + text)
		let newText = text.toLowerCase();
		setText( newText )
		props.showAlert('converted to Lower case','success')
	}
	const clearText = () => {
		setText("you have clicked an handelUpClick" + text)
		let newText = ''
		setText( newText )
		props.showAlert('clear Text','success')
	}
	const handelOnChange = (e) => {
    console.log("On Change");
    e.persist();
    setText(e.target.value);
  };
	const [ text, setText ] = useState( '' );

return(
	<>
		<div className="container">
		<h1>{ props.heading }</h1>
		</div>
		<br />
		<div className="mb-3">
		<textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
		</div>
		<button className="btn btn-primary mx-1" onClick={ handelUpClick }>Convert To Uppercase</button>
		<button className="btn btn-primary mx-1" onClick={ handelDownClick }>Convert To Lower Case</button>
		<button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
		<div className="container my-3" style={ {
			color: props.mode === 'dark'?'white':'black'
		}}>
			<h2>Your text Summary</h2>
			<p>{ text.split( " " ).length } words and {text.length} characters</p>
			<p>{ 0.008 * text.split( " " ).length } Minutes to read</p>
			<h4>Preview</h4>
			<p>{ text }</p> 
		</div>
		
</>
)
}
