export const initialState = [
  {
    item: 'Morning Lectures',
    completed: false,
    id: 1
  },
  {
    item: 'Projects',
    completed: false,
    id: 2
  },
  {
    item: 'Standup',
    completed: false,
    id: 3
  }
];

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'AddTodo':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];

    case 'Toggle':
      let Clicktoggle = state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });
      return Clicktoggle;

    case 'RemoveTodo':
      let Remove = state.filter(item => {
        if (item.completed === true) {
          return !item.completed;
        } else {
          return item;
        }
      });
      return Remove;

    default:
      return state;
  }
};
