import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Checkbox } from "~/components/checkbox/checkbox";
import { CheckboxIndicator } from "~/components/checkbox/checkbox-indicator";

export default component$(() => {
  const userSig = useSignal(false);
  return (
    <>
      <Checkbox class="bg-slate-900 p-7" userSig={userSig}>
        <div class="flex items-center gap-3">
          <CheckboxIndicator class="w-fit bg-slate-600 p-2">
            ✅
          </CheckboxIndicator>
          <p>No other stuff is needed here</p>
        </div>
      </Checkbox>
      <div>{`${userSig.value}`}</div>
      <div class="h-[1900px] bg-black"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
