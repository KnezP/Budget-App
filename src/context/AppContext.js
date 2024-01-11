import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let budget = state.budget;
    switch (action.type) {
        case 'SUB_EXPENSES':
    let currentCost = state.expenses.reduce((previousExp, currentExp) => {
        if (currentExp.name === action.payload.name) {
            return previousExp + currentExp.cost;
        }
        return previousExp;
    }, 0);

    currentCost -= action.payload.cost;

    if (currentCost >= 0) {
        state.expenses = state.expenses.map((currentExp) => {
            if (currentExp.name === action.payload.name) {
                currentExp.cost -= action.payload.cost;
                if (currentExp.cost < 0) {
                    currentExp.cost = 0; 
                }
            }
            return currentExp;
        });

        return {
            ...state,
        };
    } else {
        alert("Cannot reduce the expense! Cost cannot go below 0");
        return {
            ...state,
        };
    }

        case 'ADD_EXPENSE':
            let total_budget = 0;
            total_budget = state.expenses.reduce(
                (previousExp, currentExp) => {
                    return previousExp + currentExp.cost
                },0
            );
            total_budget = total_budget + action.payload.cost;
            action.type = "DONE";
            if(total_budget <= state.budget) {
                total_budget = 0;
                state.expenses.map((currentExp)=> {
                    if(currentExp.name === action.payload.name) {
                        currentExp.cost = action.payload.cost + currentExp.cost;
                    }
                    return currentExp
                });
                return {
                    ...state,
                };
            } else {
                alert("Cannot increase the allocation! Out of funds");
                return {
                    ...state
                }
            }
            case 'RED_EXPENSE':
                const { name, cost } = action.payload;
            
                const updatedExpenses = state.expenses.map((currentExp) => {
                    if (currentExp.name === name) {
                        if (currentExp.cost >= cost) {
                            currentExp.cost -= cost / 2;
                            currentExp.cost = Math.max(currentExp.cost, 0);
                        } else {
                            alert(`Cannot reduce the expense! Cost cannot go below ${cost}`);
                        }
                    }
                    return currentExp;
                });
            
                return {
                    ...state,
                    expenses: updatedExpenses,
                };
            
            case 'DELETE_EXPENSE':  
            action.type = "DONE";
            state.expenses.map((currentExp)=> {
                if (currentExp.name === action.payload) {
                    budget = state.budget + currentExp.cost
                    currentExp.cost =  0;
                }
                return currentExp
            })
            action.type = "DONE";
            return {
                ...state,
                budget
            };
            case 'SET_BUDGET':
                const totalExpenses = state.expenses.reduce((total, item) => total + item.cost, 0);
                const newBudget = action.payload;
              
                if (newBudget < totalExpenses) {
                  alert("Budget cannot be set lower than the total expenses!");
                  return {
                    ...state,
                  };
                } else {
                  return {
                    ...state,
                    budget: newBudget,
                  };
                }
              
            
        case 'CHG_CURRENCY':
            action.type = "DONE";
            state.currency = action.payload;
            return {
                ...state
            }

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    budget: 0,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 0 },
        { id: "Finance", name: 'Finance', cost: 0 },
        { id: "Sales", name: 'Sales', cost: 0 },
        { id: "Human Resource", name: 'Human Resource', cost: 0 },
        { id: "IT", name: 'IT', cost: 0 },
    ],
    currency: '£'
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let remaining = 0;

    if (state.expenses) {
            const totalExpenses = state.expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        remaining = state.budget - totalExpenses;
    }

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
