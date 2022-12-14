import React from "react";
import "./Main.css"
// import TodoCard from "./Card/Card"

const Main = () => {

    let [Todo, setTodo] = React.useState([]);
    let [ComplateTodo, setComplateTodo] = React.useState(0);
    let [value, setValue] = React.useState("");

    // const knowAllTodo = () => {
    //     setAllTodo(AllTodo = Todo.length)
    // }



    const knowComplateTodo = () => {
        const complateTodo = Todo.filter(item => item.isComplate === true)
        return complateTodo.length;
    }

    const AddTodo = (evt) => {
        evt.preventDefault();

        const TodoObj = {
            id: Todo.length > 0? Todo[Todo.length -1].id +1  : 1,
            text: value, 
            isComplate: false,
        }
        setTodo([...Todo, TodoObj])
        // setAllTodo(AllTodo += 1)
    }

    const DeleteTodo = (evt) => {
        const deleteIndex = Todo.findIndex(item => item.id == evt.target.dataset.id);
        const arr = [...Todo]
        arr.splice(deleteIndex, 1)
        console.log(deleteIndex);
        setTodo(arr);
        console.log(Todo);
    }

    const EditTodo = (evt) => {
        const EditIndex = Todo.findIndex(item => item.id == evt.target.dataset.id);
        const text = prompt("Enter Text: ")
        const TodoObj = {
            id: evt.target.dataset.id,
            text: text, 
            isComplate: false,
        }
        const arr = [...Todo]
        arr.splice(EditIndex, 1, TodoObj)
        setTodo(arr);
    }

    const CheckTodo = (evt) => {
        const CheckIndex = Todo.findIndex(item => item.id == evt.target.dataset.id);
        const arr = [...Todo]
        if(arr[CheckIndex].isComplate){
            arr[CheckIndex].isComplate = false;
        }
        else{
            arr[CheckIndex].isComplate = true;
        }
        // console.log(Todo[CheckIndex]);
        setTodo(arr)                                                                                        
    }

    // knowComplateTodo()
    const TodoCard = ({id, text, isComplate}) => {
        return <>
            <li className="hero__item ">
                <label className="hero__label">
                    <input className="hero__checkbox visually-hidden" type="checkbox" onClick={CheckTodo} checked={isComplate} aria-label="Complate task" data-id={id}/>
                    <span className="hero__check"></span>
                </label>
                <p className="hero__text">
                    {text}
                </p>
                <div className="hero__btnbox">
                    <button className="hero__editbtn" type="button" onClick={EditTodo} data-id={id}>
                    </button>
                    <button className="hero__delbtn" type="button" onClick={DeleteTodo} data-id={id}>
                    </button>
                </div>
            </li>
        </>
    }

    return <>
        <main className="site-main">
            <section className="hero">
                <div className="container">
                    <form className="hero__form" method="get" onSubmit={AddTodo} action="#" autoComplete="off">
                        <input className="hero__input" type="text" onChange={evt => setValue(evt.target.value)} aria-label="Enter task" placeholder="Add a new task" required/>
                        <button className="hero__btn" type="submit">Create</button>
                    </form>

                    <div className="hero__counterbox">
                        <div className="hero__counterallbox">
                            <span className="hero__countertext">
                                All
                            </span>
                            <span className="hero__counterallnum">
                                {Todo.length}
                            </span>
                        </div>
                        <div className="hero__countercomplatebox">
                            <span className="hero__countertext">
                                Complate
                            </span>
                            <span className="hero__countercomplatenum">
                                {
                                    knowComplateTodo()
                                }
                            </span>
                        </div>
                    </div>

                    <ul className="hero__list">
                        {Todo.map(item  => {
                            return TodoCard(item)
                        })}
                    </ul>
                </div>
            </section>
        </main>
    </>
}

export default Main;