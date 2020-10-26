import uuid from 'uuid/v1';

export default  [
  {
    courseTitle: "DM I",
    courseTitleSlug: "dm-1",
    criteria: [
      { id: uuid(), name: "Advisor", ratio: 20, isDone: false },
      { id: uuid(), name: "Progress 1", ratio: 15, isDone: true },
      { id: uuid(), name: "Progress 2", ratio: 15, isDone: false },
      { id: uuid(), name: "Final Present", ratio: 20, isDone: true },
      { id: uuid(), name: "Report", ratio: 20, isDone: false }
    ]
  },
  {
    courseTitle: "DM II",
    courseTitleSlug: "dm-2",
    criteria: [
      { id: uuid(), name: "Advisor", ratio: 20, isDone: true },
      { id: uuid(), name: "Progress 1", ratio: 15 , isDone: true},
      { id: uuid(), name: "Progress 2", ratio: 15 , isDone: true},
      { id: uuid(), name: "Final Present", ratio: 20 , isDone: true},
      { id: uuid(), name: "Report", ratio: 20 , isDone: false},
      { id: uuid(), name: "External", ratio: 10, isDone: true }
    ]
  }
];
