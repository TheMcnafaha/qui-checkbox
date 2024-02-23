import {
  Signal,
  component$,
  useContext,
  useContextProvider,
  useSignal,
  PropsOf,
  Slot,
  sync$,
} from "@builder.io/qwik";
import { CheckboxContext } from "./context-id";

export type CheckboxIndicatorProps = {} & PropsOf<"div">;

export const CheckboxIndicator = component$<CheckboxIndicatorProps>((props) => {
  const checkSig = useContext(CheckboxContext);
  const handleKeyDownSync$ = sync$((e: KeyboardEvent) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  });

  return (
    <div {...props} tabIndex={0} onKeyDown$={[handleKeyDownSync$]}>
      <Slot />
    </div>
  );
});
