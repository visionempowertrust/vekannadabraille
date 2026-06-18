# Accessibility and Refreshable Braille

This site targets WCAG 2.2 Level AA. Automated checks help find structural problems, but they do not certify conformance. Keyboard, screen-reader, zoom, language, and real refreshable-Braille testing are still required before a formal accessibility claim.

## How Braille displays work with the site

The browser should not connect directly to an Orbit or Focus display through WebUSB. The supported path is:

1. Connect the display by USB or Bluetooth.
2. Configure it in the operating system screen reader.
3. Open the site in a browser supported by that screen reader.
4. Let the screen reader send the page's accessible text to the display.

Each visual Braille cell on this site has an accessibility-tree equivalent containing the Unicode Braille character and its dot numbers. This lets a learner feel the cell on the display and also review an explicit dot description.

Writing exercises use six toggle buttons per cell. They can be operated with Tab plus Space/Enter, or with the display's navigation, routing, and activation commands. Feedback is announced through polite status regions.

## Recommended test matrix

- Windows: JAWS + Chrome or Edge + Freedom Scientific Focus display.
- Windows: NVDA + Firefox or Chrome + Orbit Reader display.
- macOS/iOS: VoiceOver + Safari + a supported Braille display.
- Android: TalkBack + Chrome + a supported Braille display.

Test at least one device from each hardware family used by learners. Screen readers and Braille tables can handle Unicode Braille differently, so a real-device pass is essential.

## Manual acceptance checks

- Reach all content and controls with the keyboard alone.
- Use the skip link and navigate by headings, landmarks, links, form controls, and buttons.
- Confirm each lesson cell appears correctly on the physical display.
- Confirm Reading questions expose the Braille prompt before the answer choices.
- Confirm Writing dot toggles retain focus and announce pressed state.
- Confirm Proof reading identifies dot controls for one cell and cell controls for multiple cells.
- Confirm feedback, question changes, and sandbox output are announced once without excessive repetition.
- Confirm the lesson summary traps focus while open and returns focus to its trigger when closed.
- Confirm English and regional modes set the correct document language.
- Test at 200% and 400% zoom, high contrast, reduced motion, and a 320 CSS-pixel viewport.

## Standards references

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/
