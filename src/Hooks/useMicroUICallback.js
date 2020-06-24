import { useCallback, useEffect, useState } from 'react';
import getMicroUIWindowName from '../Helpers/getMicroUIWindowName';
import getMicroUIWindowState from '../Helpers/getMicroUIWindowState';

function useMicroUICallback(callback, deps, path, prefix = 'MICROUI') {
  const _callback = useCallback(callback, deps);
  const [cb, setCb] = useState(() => _callback);
  const windowName = getMicroUIWindowName('CALLBACK', path, prefix);
  const windowStash = window[windowName] || getMicroUIWindowState(callback, windowName);
  windowStash.subscribe(_cb => {
    setCb(() => _cb);
  });
  useEffect(() => {
    windowStash.next(callback);
    setCb(() => _callback);
  }, [windowStash, _callback]);
  return cb;
}

export default useMicroUICallback;
