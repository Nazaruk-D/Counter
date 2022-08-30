import {
    ChangeMinValueAC,
    counterPropsType,
    countReducer,
    IncrAC,
    setChangeCounterAC, setCounterAC, setCounterDisableAC, setDisableAC, setErrorAC,
    setMaxValueAC,
    setMinValueAC
} from "./counterReducer";

let initialState: counterPropsType

beforeEach(()=>{
    initialState = {
        minValue: 0,
        maxValue: 5,
        counter: 1,
        error: "",
        disable: false,
        counterDisable: false,
        changeCounter: true
    }
})

test("Counter should be increase by one", () => {
    const endState = countReducer(initialState, IncrAC())
    expect(endState.counter).toBe(2);
})

test("changeCounter should be false", () => {
    const endState = countReducer(initialState, setChangeCounterAC(false))
    expect(endState.changeCounter).toBe(false);
})

test("Counter should be set minValue", () => {
    const endState = countReducer(initialState, setMinValueAC())
    expect(endState.counter).toBe(0);
})

test("Should be changed maxValue", () => {
    let num = 5;
    const endState = countReducer(initialState, setMaxValueAC(num))
    expect(endState.maxValue).toBe(5);
})

test("Should be changed text Error", () => {
    let textErr = "Incorrect min value";
    const endState = countReducer(initialState, setErrorAC(textErr))
    expect(endState.error).toBe("Incorrect min value");
})

test("Disable status should be changed", () => {
    let disable = true;
    const endState = countReducer(initialState, setDisableAC(disable))
    expect(endState.disable).toBe(true);
})

test("CounterDisable status should be changed", () => {
    let disable = true;
    const endState = countReducer(initialState, setCounterDisableAC(disable))
    expect(endState.counterDisable).toBe(true);
})

test("Counter should be equals minValue", () => {
    const endState = countReducer(initialState, setCounterAC())
    expect(endState.counter).toBe(0);
})

test("MinValue should be changes", () => {
    let inputValue = 3;
    const endState = countReducer(initialState, ChangeMinValueAC(inputValue))
    expect(endState.minValue).toBe(3);
})
