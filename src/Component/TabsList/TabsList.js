import './TabList.css' 

const TabsList = props => {
    const {each, updateId} = props
    const {tabId, displayText} = each
    console.log(tabId)
    const onUpdate = () => {
      updateId(tabId)
    }
  
    return (
      <>&nbsp;
        <div className="background">
        <button className="button" onClick={onUpdate}> {displayText}</button>
        </div>
         
      </>
    )
  }
  export default TabsList