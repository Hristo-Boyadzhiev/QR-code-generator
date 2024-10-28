// Accordion.tsx
import React, { ReactNode } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleAccordion = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["accordion-container"]}>
      <header onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </header>
      {isOpen && (
        <section className={styles["accordion-content"]}>{children}</section>
      )}
    </div>
  );
}
