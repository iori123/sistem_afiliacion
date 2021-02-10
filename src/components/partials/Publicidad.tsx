
import { List } from "./atoms/List";

export const Publicidad = () => {
   
    return (
        <section className ="publicidad">
            <h1 className="publicidad__title">
                Seguro de <b>Salud</b>
            </h1>
            <List/>
            <footer className="publicidad__footer">&copy;2021 y Company</footer>
         </section>
    )
}
