import { PanelProps } from "./Panel.props";
import styles from "./Panel.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import { Htag } from "../Htag/Htag";

export const Panel = ({
  children,
  appearance,
  handleBack,
  ...props
}: PanelProps): JSX.Element => {
  const [isHovered, setHovered] = useState<boolean>(false);
  if (!isHovered) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        className={cn(styles.panel)}
        {...props}
      >
        <div>eLofi</div>
      </div>
    );
  }

  // return <div onMouseLeave={() => { handleBack(); setHovered(false); }} className={cn(styles.panel)} {...props}>
  // 	<div className={styles.info}>
  // 		<Htag tag='h1'>Made by <a href='https://github.com/JijaLoqie'>JijaLoqie</a></Htag>
  // 		<p>Hello! My name is dima and I realy like creating new things related to studying</p>
  // 	</div>
  // 	{/* {children} */}
  // </div>;
  return (
    <div
      onMouseLeave={() => {
        handleBack();
        setHovered(false);
      }}
      className={cn(
        styles.panel,
        appearance == "info" ? styles.info : styles.normal
      )}
      {...props}
    >
      {appearance == "info" ? (
        <div className={styles.infoblock}>
          <Htag tag="h1">
            Made by <a href="https://github.com/JijaLoqie">JijaLoqie</a>
          </Htag>
          <div style={{ textAlign: `center` }}>
            Hello! My name is Dima and I realy like creating new things related
            to studying
          </div>
        </div>
      ) : (
        <></>
      )}
      {children}
    </div>
  );
};
