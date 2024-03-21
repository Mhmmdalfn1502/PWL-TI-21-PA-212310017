const ButtonPrimary = ({ children, items, actions }) => {
    return (
      <button className={"btn btn-success " + items.btn_class}
  type="submit" 
  title={items.title} 
  onClick={actions}>
        { children }
      </button>
    )
  }
  
  const ButtonSecondary = ({ children, items, actions }) => {
    return (
      <button className={"btn btn-clear " + items.btn_class} 
  type="button" 
  title={items.title} 
  onClick={actions}>
        { children }
      </button>
    )
  }
  
  export { ButtonPrimary, ButtonSecondary }

{/* <ButtonPrimary items={{
    title: "Send",
    btn_class: "btn-icon",
    typpe: "submit"
}}
>
    <i className="bi bi-send"></i>
</ButtonPrimary> */}