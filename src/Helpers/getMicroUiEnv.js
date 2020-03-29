const getMicroUiEnv = name => window[`__MicroUI${name}Environment__`] || {};

export default getMicroUiEnv;
