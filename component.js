// Define your component 
myComponent = {
	template: 'I have loaded asynchronously <button on-click="foo">foo!</button>',
	on: {
		foo: function(){
			alert('this is foo button!');
		}
	}
}

function init(){
	// 1. Serialize the component 
	console.log("serialized component: ");
	console.log(serialize(myComponent)); 

	// Copy the output to the receiver
}

init();
