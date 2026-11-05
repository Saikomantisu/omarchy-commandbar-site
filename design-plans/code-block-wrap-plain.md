# Wrap long lines in the plain CodeBlock

Written against: unavailable (the repository has no commits yet). Re-check the cited lines before editing; `src/pages/index.astro` and `src/components/interactive/CodeBlock.astro` were read on 2026-11-05.

## Evidence chain

- Surface: home page `/`, sections `#configure` and `#faq`, at 1280px and 390px wide.
- Problem: the `plain` CodeBlock never wraps (`white-space: pre`), so text longer than the box is hidden behind a sideways scroll with no visible scrollbar. Measured on the rendered page (visible width / content width):
  - Configure JSON at 1280px: 557 / 643. The end of `"open": "https://wiki.archlinux.org/index.php?search={q}"` is cut off, so the `{q}` placeholder cannot be seen. The end of the `"favorites"` line is cut off too.
  - Configure JSON at 390px: 352 / 576.
  - FAQ "How do I remove it?" at 1280px: 580 / 794. At 390px: 352 / 712. That box holds `rm -rf ~/.cache/omarchy-commandbar ~/.config/omarchy/extensions/commandbar.json`, a deletion command the reader should see in full before copying.
- Design evidence: `src/components/interactive/CodeBlock.astro`. The base `.code-block_pre` rule (lines ~128-136) already uses `white-space: pre-wrap` and `overflow-wrap: anywhere`. Only `.code-block_wrap.plain .code-block_pre` (lines ~138-141) turns wrapping off. No `LUMOS.md` rule requires unwrapped code, so this plan follows the component's own default.
- Owner: `src/components/interactive/CodeBlock.astro`.
- Scope and affected surfaces: the only consumers are `src/pages/index.astro` line ~237 (Configure sample, `variant="plain"`) and line ~290 (FAQ removal command, `variant="plain"`). The default `command` variant at line ~185 (Install) already wraps and does not change.
- Uncertainty: when a JSON line wraps, the continuation starts at the left edge with no hanging indent. Confirm in the browser that this still reads clearly (see Stop conditions).

## Design decision

Make the `plain` variant wrap like the `command` variant, so every character is visible at any width. This resolves all clipped samples in one place and needs no content edits. The Copy button reads `code.textContent`, so copied text is unchanged.

## Reuse

- The existing base rule `.code-block_pre` (`white-space: pre-wrap`, `overflow-wrap: anywhere`). No new CSS, token or variant is needed.
- Exemplar: the `command` variant of the same component, used for the Install command on the same page.

## Changes

1. `src/components/interactive/CodeBlock.astro`, stylesheet
   - Change: delete the `.code-block_wrap.plain .code-block_pre { white-space: pre; overflow-wrap: normal; }` rule. Leave `.code-block_pre` and the `:not(.plain)` prompt rule as they are.
   - Preserve: the `$ ` prompt on `command` blocks only. The `plain` variant still shows no prompt. Keep `overflow-x: auto` on `.code-block_pre`.
   - Verify: no `white-space: pre` remains on `.code-block_pre` for `plain`.
2. `src/components/interactive/CodeBlock.astro`, `variant` prop tooltip (line ~11)
   - Change: reword `/** Code kind. A command shows a prompt and keeps to one line of text. */` to `/** Code kind. A command shows a prompt. */`. The old sentence is untrue today (a command already wraps) and would stay untrue after step 1.
   - Preserve: the prop name, its two values and the default.
   - Verify: the tooltip describes only what differs between the variants.

## Scope

- Inherit: both `plain` blocks on the home page.
- Verify: the `command` block in `#install` is unchanged.
- Exclude: reformatting the JSON sample, the `#configure` layout, adding a fade or scroll cue, and `src/pages/index.astro`.

## Validation

- Product: a visitor can read the whole config sample and the whole removal command without scrolling sideways.
- Interface: at 1280px and 390px, open `/#configure` and `/#faq`. In the FAQ, open "How do I remove it?". For each `.code-block_pre`, `scrollWidth` should be at most `clientWidth`. The `{q}` placeholder, the end of the `"favorites"` line and the full `rm -rf` command should all be visible. Press Copy on each block and paste. The text should match the source with its original line breaks.
- System: `git diff` shows only `CodeBlock.astro`, with one rule removed and one tooltip changed. No new class, variant or token.
- Repository: `npm run check` → no new errors. `npm run build` → completes.

## Stop conditions

- Stop if wrapped JSON at 390px is hard to read. Report it instead of choosing a hanging-indent, reformatting or layout fix. Those are separate decisions.
- Stop if another page or component now uses `plain` and needs the old no-wrap behavior.
- Stop if the cited lines no longer match the source.

## Design documentation

- After acceptance and validation: none. There is no design document. If a `DESIGN.md` is added later, it can record that code samples wrap rather than scroll sideways.
