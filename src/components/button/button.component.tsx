import type { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IProps> = (props) => (
  <button {...props} className={styles.root}>
    {props.children}
  </button>
);

export { Button };
