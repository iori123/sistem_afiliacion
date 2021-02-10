
type Head = {
    title : string,
    resalt : string,
    subtitle : string,
}
function Head (props :{ head :Head} ): JSX.Element {
    const { head } = props ;
    return (
        <header className="head">
            <h2 className="head__title">{head.title}
                <b className="head__resalt"> {head.resalt}</b>
            </h2>
            <p className="head__subtitle">{head.subtitle}</p>  
        </header>
    );
}
export default Head ;