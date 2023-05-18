import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
