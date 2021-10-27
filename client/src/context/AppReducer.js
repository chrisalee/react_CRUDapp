export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_EMPLOYEE":
        return {
          ...state,
          employees: [...state.employees, action.payload],
        };
  
      case "EDIT_EMPLOYEE":
        const updatedEmployee = action.payload;
  
        const updatedEmployees = state.employees.map((employee) => {
          if (employee.id === updatedEmployee.id) {
            return updatedEmployee;
          }
          return employee;
        });
  
        return {
          ...state,
          employees: updatedEmployees,
        };
  
      case "REMOVE_EMPLOYEE":
        return {
          ...state,
          employees: state.employees.filter(
            (employee) => employee.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };

//   ADD_EMPLOYEES will take a payload value containing new employees and return the updated employee state.

// EDIT_EMPLOYEE will take a payload value and compare the id with the employees - if it finds a match, it will use the new payload values and return the updated employee state.

// REMOVE_EMPLOYEE will take a payload value and compare the id with the employees - if it finds a match, it will remove that employee and return the updated employee state.