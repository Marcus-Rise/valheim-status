import type {FC, ButtonHTMLAttributes} from 'react';
import styles from "./button.module.scss"

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IProps> = (props) => {
  return (
    <button {...props} className={styles.root}>
      {props.children}
    </button>
  );
};

export {Button};
