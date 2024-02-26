const ActionButton = (props)=>{

    return(
        <>
        <button className="calculator__key calculator__key--operator calculator__key--enter" onClick={props.onClick}>{props.item}</button>
        </>
    )

    }
    export default ActionButton
