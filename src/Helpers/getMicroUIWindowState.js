import { Subject } from 'rxjs';

const getMicroUIWindowState = (defaultState, windowName) => {
  window[windowName] = new Subject();
  window[windowName].next(defaultState);
  return window[windowName];
};

export default getMicroUIWindowState;
