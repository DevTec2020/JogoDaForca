import style from  "./styles.module.css"

import { Letter } from "../Letter"

export function LetterUsed() {
    return (
        <div className={style.lettersUsed}>
            <h5>Letras utilizadas</h5>

            <div>
                <Letter value="R" size="small" color="correct" />
                <Letter value="X" size="small" color="wrong" />
            </div>
        </div>


    )
}