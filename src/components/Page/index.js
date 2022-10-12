import React from "react";
import * as Styled from "./styled";

function Page({ children, RootBoxProps }) {
    return <Styled.Root {...RootBoxProps}>{children}</Styled.Root>;
}

export default Page;
