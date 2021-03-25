# nextjs-drabbable-modal-calculator-project

a small sample project which contain all real project need. (with redux)

![image](https://github.com/sky790312/nextjs-reactive-dragable-project/blob/main/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202021-03-26%20%E4%B8%8A%E5%8D%883.46.09.png)

## How to use

check the package.json.

## feature

- Should have Fold/Unfold when click on the right-rectangle at the left side of the track name
- Should be able to drag the transition bar, left transition handler and right transition handler to change delay and duration.
- When dragging the transition bar, it should change delay only.
- When dragging the left transition handler, it should change delay and duration.
- When dragging the right transition handler, it should change duration only.
- When changing delay and duration, you should also update other tracks which are related to the selected one.
- If transition bars are too long, you need to have scroll for it. But the track name panel should be fixed.
- When a track is selected/hovered, we should highlight both Track Name block and Transition Bar block. (The whole row)

## Checklist

- [ ] Implement page switching
- [ ] Implement element selecting
- [ ] Implement property updating
- [ ] Implement Drag-and-drop on Canvas
- [ ] Implement doublie-click to rename (Element and Page)
- [ ] Write test cases
- [ ] Have no performance issue
- [ ] Nested element list (optional)
