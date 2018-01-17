const init = [
    { id: 1, text: "Mow the lawn" },
    { id: 2, text: "Do the laundry" },
    { id: 3, text: "Watch Netflix" }
];

const todos = (state = init, action) => {
    switch (action.type) {
        case "ADD TODO":
            return [...state, { id: action.id, text: action.text }];
        default:
            return state;
    }
};

export default todos;