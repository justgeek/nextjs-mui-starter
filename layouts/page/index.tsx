import { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

// Any Global functionality, or behavior that affects only pages can be handled here

export const Page: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <main>
        <section>{children}</section>
      </main>
    </>
  );
};
