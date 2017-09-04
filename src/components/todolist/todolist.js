export default {
  name: 'TodoList',
  data() {
    return {
      todos: [{
        id: 1,
        title: 'Todo A',
        priority: 'md-default',
        date: '01/02/0123',
        done: false,
      }, {
        id: 2,
        title: 'Todo B',
        priority: 'md-primary',
        date: '01/02/0123',
        done: true,
      }, {
        id: 3,
        title: 'Todo C',
        priority: 'md-warn',
        date: '01/02/0123',
        done: false,
      }, {
        id: 4,
        title: 'Todo D',
        priority: 'md-warn',
        date: '01/02/0123',
        done: false,
      }],
    };
  },
  methods: {
    checkItem(todo) {
      todo.done = !todo.done;
    },
    deleteItem(todo) {
      delete todos.todo;
    }
  }
};
