import { StyledHeader, StyledNav, Title } from "./Header.styles";

import { Button } from "components";
import React from "react";
import { useAppContext } from "Contexts/AppProvider";
import { useTabContext } from "Contexts/TabProvider";

function Header() {
  const { setTab, className } = useTabContext();
  const { editing } = useAppContext();

  const tabText = editing ? "Edit Post" : "Create Post";

  return (
    <StyledHeader>
      <Title>Postify</Title>

      <StyledNav>
        <Button
          active={className(tabText)}
          type="tab"
          onClick={() => setTab(tabText)}
        >
          {tabText}
        </Button>
        <Button
          active={className("Posts")}
          type="tab"
          onClick={() => setTab("Posts")}
        >
          Posts
        </Button>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
