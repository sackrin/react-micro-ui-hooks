import { useState, useEffect } from 'react';
import getMicroUIWindowName from '../Helpers/getMicroUIWindowName';
import getMicroUIWindowState from '../Helpers/getMicroUIWindowState';

function useMicroUIState(defaultState, path, prefix = 'MICROUI') {
  const [state, setState] = useState(defaultState);
  const windowName = getMicroUIWindowName('STATE', path, prefix);
  const windowStash = window[windowName] || getMicroUIWindowState(state, windowName);
  windowStash.subscribe(value => {
    setState(value);
  });
  useEffect(() => {
    windowStash.next(state);
  }, [windowStash, state]);
  return [state, setState];
}

export default useMicroUIState;
