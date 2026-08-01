<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Props } from "..";

  let {
    children, // currently unused
    class: className,

    // --- Default Classes
    inputClass = $bindable(
      "dark:bg-[#3E3E55] dark:text-white dark:border-[0px] border-[1px] border-[#e0e0e2] rounded-3 px-3 py-4 w-full text-[14px] rounded-[12px]",
    ),
    labelClass = $bindable("text-[#b8b8d2] text-[14px]"),

    // --- User Defined Classes
    classLabel = $bindable(""),

    // --- Textarea Props
    label = $bindable(undefined),
    cap = $bindable(undefined),

    ...rest
  }: Props = $props();

  let inputCls = $derived(cn(inputClass, className));
  let labelCls = $derived(cn(labelClass, classLabel));
  let width = $state(0);
</script>

{#if label !== undefined}
  <label class={labelCls} for={rest.id}>{label}</label>
{/if}

<textarea
  class={inputCls}
  maxlength={cap}
  oninput={(e) => (width = (e.target as HTMLTextAreaElement)?.value.length)}
  {...rest}
></textarea>

{#if cap !== undefined}
  <p class="dark:text-white text-right text-[12px]">{width}/{cap}</p>
{/if}

<!--
    @component
		  - Created by Amaan Dhanani, Inspired by Input component.
      - Special Thanks to TreltaSev
 
    @file Textarea.svelte
    @description
    A styled multi-line text input with an optional label and an optional live character counter.
    When a `cap` (max length) is provided, a small "current/cap" counter is rendered below the
    textarea and updates as the user types.
 
    @props
    Extends `HTMLTextareaAttributes`, so you can pass any native `<textarea>` attribute (`id`,
    `name`, `placeholder`, `rows`, `required`, `disabled`, etc.) via `...rest`.
 
    ### Core Class Props:
    - `inputClass`: Base styling for the `<textarea>` element.
    - `labelClass`: Base styling for the `<label>` element.
 
    ### User-Overridable Class Props:
    - `classLabel`: Optional user-defined classes to enhance or override the default `labelClass`.
    - `class`: Native Svelte `class` prop, merged with `inputClass`.
 
    ### Functional Props:
    - `label`: Optional label text rendered above the textarea. No label is rendered if left `undefined`.
    - `cap`: Optional max character length. When set, it's applied as the native `maxlength`
      attribute and enables the "current/cap" counter below the textarea.
 
    @behavior
    - No `<label>` is rendered unless `label` is explicitly provided.
    - Character count (`width`) is tracked on every `input` event and reflects the current
      `value.length` of the textarea.
    - The counter paragraph is only rendered when `cap` is defined; without a `cap`, there's no
      length limit and no counter.
    - Relies on `for={rest.id}` to associate the label with the textarea, so pass an `id` via
      `...rest` if you need the label to be clickable/accessible.
 
    @rendered
    An optional `<label>`, followed by a `<textarea>`, followed by an optional "current/cap"
    character counter `<p>`.
 
    @usage
    ```svelte
    <Textarea label="Bio" placeholder="Tell us about yourself" />
 
    <Textarea label="Tweet" cap={280} bind:value={tweetText} />
    ```
-->