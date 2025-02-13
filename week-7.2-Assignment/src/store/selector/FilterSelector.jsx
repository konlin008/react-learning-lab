import { selector } from "recoil";
import { todosAtom } from "../atoms/Atoms";
import { FilterTodoAtoms } from "../atoms/FilterAtoms";

export const filterTodos = selector({
    key: 'filterTodos',
    get: (props) => {
        const originalTodos = props.get(todosAtom)
        const filtertodoAtom = props.get(FilterTodoAtoms)
        if (!filtertodoAtom) return originalTodos;
        return originalTodos.filter(x => x.title.includes(filtertodoAtom) || x.description.includes(filtertodoAtom))
    }
})