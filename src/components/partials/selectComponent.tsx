

export const SelectComponent = (props : any) => {
    return (
        <select 
            className="Form__select"
            name="type_document" 
            onChange = { props.selectChange }
        >
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
        </select> 
    )
}
