import { getMicroUiEnv } from '../Helpers';

export const getMicroUIChild = props => {
  // Deconstruct the micro UI component values
  const {
    microUi: { library, name },
  } = props;
  // Retrieve the current env setting for this micro UI
  const env = getMicroUiEnv(library);
  // If the library exists then return the built child
  return window[library] && window[library].Child ? window[library].Child(name, { ...props, env }) : undefined;
};

export default getMicroUIChild;
