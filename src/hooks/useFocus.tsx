import { useEffect, RefObject} from 'react';
import {useBoolean} from "@/hooks/useBoolean";

type RefType = RefObject<HTMLElement>;
export function useFocus(ref: RefType) {
  const [isFocused, setIsFocusedActions] = useBoolean(false);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener('focus', setIsFocusedActions.setTrue);
      element.addEventListener('blur', setIsFocusedActions.setFalse);

      return () => {
        element.removeEventListener('focus', setIsFocusedActions.setTrue);
        element.removeEventListener('blur', setIsFocusedActions.setFalse);
      };
    }
  }, [ref]);

  return isFocused;
}