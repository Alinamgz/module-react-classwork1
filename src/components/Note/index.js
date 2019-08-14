import React, {useState, useRef, useEffect} from 'react';
import './style.sass';

export const Note = (props) => {
    const [editStatus, setEditStatus] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const formElement = useRef();
    const titleInput = useRef();

    const editBtnHandler = () => {
        setEditStatus(true);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setTitle( formElement.current[0].value );
        setText( formElement.current[1].value );
        setEditStatus(false);
        // console.log( formElement.current[0].value );
    };

    useEffect( () => {
        if (editStatus) {
            // після жмяку на edit отримаємо фокус одразу в полі для title
            titleInput.current.focus()
        }
        console.log("note update");
    });

    //хз навіщо ще один useEffect. Мабуть, щоб показати, що один useEffect є аналогом componentDidMount, componentDidUpdate і componentWillUnmount
    useEffect( () => {
        console.log("note mounted");
    }, []);

    return (
        <div>
            { !editStatus ?
                <div>
                    <h1> {title} </h1>
                    <p> {text} </p>
                    <button onClick={editBtnHandler}> Edit</button>
                </div>
                :
                <div>
                    <form ref={formElement} onSubmit={onSubmitHandler}>
                        <input ref={titleInput}/>
                        <textarea></textarea>
                        <button>safe</button>
                    </form>
                </div>
            }
        </div>
    )
};