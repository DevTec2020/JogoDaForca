import styles from "./styles.module.css"

export function Input({ ...rest }:  React.ComponentProps<"input">){
  return(
    <div >
        <h4>Palpite</h4>
        <input type="text" placeholder="?"  {...rest} className={styles.input} />
    </div>
  )
}