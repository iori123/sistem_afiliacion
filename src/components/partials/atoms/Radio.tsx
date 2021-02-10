export const Radio = (props: { title: string , options : Array<string> ,names :string}) => {
    return (
        
            <div className="radio">
                <h4 className="radio__title">{ props.title }</h4>
                {
                     props.options.map ( (option,index  ) => {
                      return (
                        <div
                            className = 'radio__group'
                            key = {index}>
                            <input
                               type="radio"
                               id={props.names}
                               name={props.names} 
                               value={option}/>
                            <label
                                className="radio__label"
                                htmlFor={props.names}>{option} 
                            </label>
                        </div>
                      )  
                    })
                
                }
            </div>
           
        
        
    )
}
