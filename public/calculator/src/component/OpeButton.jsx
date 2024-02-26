const OpeButton = (props)=>{
    return(
        <>
        <button className="calculator__key" onClick={props.onClick}>{props.item}</button>
        </>
    )

    }
    export default OpeButton
