const solutions = [
  {
    id: 1,
    name: 'pushchair',
    level: 'easy',
    size: { rows: 5, columns: 5 },
    solution: [
      [false, true, true, false, false],
      [true, true, false, false, true],
      [true, true, true, true, false],
      [false, true, true, false, false],
      [true, false, false, true, false],
    ],
  },
  {
    id: 2,
    name: 'heart',
    level: 'easy',
    size: { rows: 5, columns: 5 },
    solution: [
      [false, true, false, true, false],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [false, true, true, true, false],
      [false, false, true, false, false],
    ],
  },
  {
    id: 3,
    name: 'cockerel',
    level: 'easy',
    size: { rows: 5, columns: 5 },
    solution: [
      [false, true, false, false, false],
      [true, true, false, true, true],
      [false, true, true, true, false],
      [false, true, true, true, false],
      [false, false, true, false, false],
    ],
  },
  {
    id: 4,
    name: 'camel',
    level: 'easy',
    size: { rows: 5, columns: 5 },
    solution: [
      [false, false, false, true, true],
      [true, true, false, true, false],
      [true, true, true, true, false],
      [true, false, true, false, false],
      [true, false, true, false, false],
    ],
  },
  {
    id: 5,
    name: 'tetris',
    level: 'easy',
    size: { rows: 5, columns: 5 },
    solution: [
      [false, false, true, false, false],
      [false, true, true, false, false],
      [true, false, true, false, true],
      [true, false, false, true, true],
      [true, true, false, true, true],
    ],
  },
  {
    id: 6,
    name: 'cat',
    level: 'medium',
    size: { rows: 10, columns: 10 },
    solution: [
      [false, false, false, false, false, false, true, true, true, false],
      [true, false, false, false, true, false, true, false, true, true],
      [true, true, false, true, true, false, false, false, false, true],
      [true, true, true, true, true, false, false, false, false, true],
      [true, false, true, false, true, false, false, false, false, true],
      [true, true, true, true, true, false, false, true, true, true],
      [false, true, true, true, false, false, true, true, true, true],
      [false, false, true, true, true, true, true, true, true, true],
      [false, false, true, true, true, true, true, true, true, true],
      [false, false, false, true, true, true, true, false, true, true],
    ],
  },
  {
    id: 7,
    name: 'dog',
    level: 'medium',
    size: { rows: 10, columns: 10 },
    solution: [
      [true, true, false, false, true, true, false, false, false, false],
      [false, false, true, true, true, false, false, false, false, false],
      [false, true, true, false, true, true, true, true, false, false],
      [false, true, true, true, true, true, true, false, false, false],
      [false, false, true, true, false, false, false, false, false, false],
      [false, true, true, true, true, true, false, false, false, true],
      [true, true, true, true, true, true, true, true, false, true],
      [true, false, true, true, true, true, true, true, true, false],
      [false, false, true, false, false, true, true, true, false, false],
      [false, true, true, false, true, true, true, false, false, false],
    ],
  },
  {
    id: 8,
    name: 'rabbit',
    level: 'medium',
    size: { rows: 10, columns: 10 },
    solution: [
      [false, false, true, true, false, true, true, true, false, false],
      [false, true, false, false, true, false, false, false, true, false],
      [true, false, true, false, false, true, true, true, false, false],
      [true, true, false, false, true, true, false, false, false, false],
      [false, true, true, true, false, true, true, false, true, true],
      [true, false, false, false, true, false, false, true, false, true],
      [false, true, true, true, false, false, false, true, true, false],
      [false, false, false, true, true, false, true, true, false, false],
      [false, false, true, false, false, false, true, false, false, false],
      [false, false, true, true, true, true, true, false, false, false],
    ],
  },
  {
    id: 9,
    name: 'duckling',
    level: 'medium',
    size: { rows: 10, columns: 10 },
    solution: [
      [false, false, false, true, true, true, false, false, false, false],
      [false, false, true, false, false, false, true, false, false, false],
      [false, false, true, false, true, false, true, false, false, false],
      [false, true, true, true, false, false, true, false, false, false],
      [true, true, true, true, true, false, true, false, false, false],
      [false, false, false, true, false, true, false, false, false, true],
      [false, false, true, false, false, false, true, true, true, true],
      [false, true, false, false, true, false, false, false, false, true],
      [false, true, false, false, true, true, false, false, true, true],
      [false, true, true, false, false, true, true, true, false, true],
    ],
  },
  {
    id: 10,
    name: 'jellyfish',
    level: 'medium',
    size: { rows: 10, columns: 10 },
    solution: [
      [false, false, false, true, true, true, true, false, false, false],
      [false, false, true, true, false, false, true, true, false, false],
      [false, true, false, false, false, false, false, false, true, false],
      [true, false, false, true, false, false, true, false, false, true],
      [true, false, false, false, false, false, false, false, false, true],
      [true, true, true, true, true, true, true, true, true, true],
      [false, false, true, false, true, false, true, false, true, false],
      [false, true, false, false, true, false, false, true, false, true],
      [false, true, false, true, false, false, false, true, false, true],
      [true, true, false, true, false, false, false, true, false, true],
    ],
  },
  {
    id: 11,
    name: 'bunny',
    level: 'hard',
    size: { rows: 15, columns: 15 },
    solution: [
      [
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        false,
      ],
      [
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
      ],
      [
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
      ],
    ],
  },
  {
    id: 12,
    name: 'umbrella',
    level: 'hard',
    size: { rows: 15, columns: 15 },
    solution: [
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
      ],
      [
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
      ],
      [
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        false,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        true,
        true,
        false,
      ],
    ],
  },
  {
    id: 13,
    name: 'puppy',
    level: 'hard',
    size: { rows: 15, columns: 15 },
    solution: [
      [
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
      ],
      [
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        true,
      ],
      [
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
      ],
      [
        true,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
      ],
      [
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        false,
      ],
      [
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
      ],
      [
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
      ],
      [
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
      ],
      [
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        false,
      ],
      [
        true,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
      ],
    ],
  },
  {
    id: 14,
    name: 'mermaid',
    level: 'hard',
    size: { rows: 15, columns: 15 },
    solution: [
      [
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
      ],
      [
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        false,
      ],
      [
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
      ],
      [
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
      ],
      [
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
      ],
      [
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
      ],
      [
        true,
        false,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
      ],
      [
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
      ],
      [
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
      ],
      [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
      ],
    ],
  },
  {
    id: 15,
    name: 'bull',
    level: 'hard',
    size: { rows: 15, columns: 15 },
    solution: [
      [
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        true,
        false,
      ],
      [
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        true,
      ],
      [
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
      ],
      [
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
      ],
      [
        false,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
      ],
      [
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
      ],
      [
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
      ],
      [
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
      ],
      [
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
    ],
  },
];

export default solutions;