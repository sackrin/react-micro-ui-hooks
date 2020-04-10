import { useReducer, useCallback } from 'react';
import getMicroUIWindowName from '../Helpers/getMicroUIWindowName';
import getMicroUIWindowState from '../Helpers/getMicroUIWindowState';

function useMicroUIReducer(reducer, defaultState, path, prefix = 'MICROUI') {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const windowName = getMicroUIWindowName('REDUCER', path, prefix);
  const windowStash = window[windowName] || getMicroUIWindowState(state, windowName);
  windowStash.subscribe(action => {
    dispatch(action);
  });
  const _dispatch = useCallback(
    action => {
      dispatch(action);
      windowStash.next(action);
    },
    [windowStash, dispatch],
  );
  return [state, _dispatch];
}

export default useMicroUIReducer;
