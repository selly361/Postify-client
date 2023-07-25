import { Fragment, ReactNode } from "react";

import AppProvider from "Contexts/AppProvider";
import TabProvider from "Contexts/TabProvider";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <TabProvider>
        <AppProvider>{children}</AppProvider>
      </TabProvider>
    </Fragment>
  );
}

export default Wrapper;
