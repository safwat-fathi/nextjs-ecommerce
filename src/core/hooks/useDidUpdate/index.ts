import { DependencyList, EffectCallback, useEffect, useRef } from "react";

const useDidUpdate = (effect: EffectCallback, deps?: DependencyList) => {
  // a flag to check if the component did mount (first render's passed)
  // it's unrelated to the rendering process so we don't useState here
  const didMountRef = useRef<boolean | null>(null);

  // effect callback runs when the dependency array changes, it also runs
  // after the component mounted for the first time.
  useEffect(() => {
    // subsequent useEffect callback invocations will execute the effect as normal
    if (didMountRef.current) {
      return effect();
    }

    // if so, mark the component as mounted and skip the first effect call
    didMountRef.current = true;
  }, deps);
};

export default useDidUpdate;
