export const getMicroUIChild = (props) => {
	// Deconstruct the micro UI component values
	const {
		microUi: { library, name },
	} = props;
	// If the library exists then return the built child
	return window[library] && window[library].Child ? window[library].Child(name, props) : undefined;
};

export default getMicroUIChild;
