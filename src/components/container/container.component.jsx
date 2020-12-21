import { React } from "react";
import style from './container.module.scss'

export const Container = ({children}) => {
    return (
        <section className={style.Container}>
            {children}
        </section>
    )
}