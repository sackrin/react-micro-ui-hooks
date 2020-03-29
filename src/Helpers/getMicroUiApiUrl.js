const getMicroUiApiUrl = name => window[`__MicroUI${name}URL__`];

export default getMicroUiApiUrl;
