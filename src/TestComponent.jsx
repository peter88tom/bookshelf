function TestComponent(){

	const name = "Solid";
	const style = "background-color:black; color:red";
	return (
		<div style={style}>
		Testing {name}
		</div>
	)
		

}

export default TestComponent;

/*
A valid must return a single  element

something like this is valid
<div> </div>

or <> </>

*/