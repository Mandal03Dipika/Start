const NumButton = (props)=>{
return(
    <>
    <button className="calculator__key" onClick={props.onClick}>{props.number}</button>
    </>
)

}
export default NumButton
