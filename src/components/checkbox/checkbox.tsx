import {
  PropsOf,
  Signal,
  Slot,
  component$,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { CheckboxContext } from "./context-id";

export type CheckboxProps = {
  userSig?: Signal<boolean>;
} & PropsOf<"div">;

export const Checkbox = component$<CheckboxProps>((props) => {
  const defaultSig = useSignal(true);
  const appliedSig = props.userSig ?? defaultSig;
  useContextProvider(CheckboxContext, appliedSig);
  return (
    <div {...props}>
      <Slot />
    </div>
  );
});
