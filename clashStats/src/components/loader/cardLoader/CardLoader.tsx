import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectViewType } from "store/selectors/viewTypeSelectors";
import BlockCardLoader from "./blockCard/BlockCardLoader";
import LineCardLoader from "./lineCard/LineCardLoader";

const CardLoader = (): ReactElement => {
  const viewType = useAppSelector(selectViewType);

  if (viewType === "block") return <BlockCardLoader />;
  return <LineCardLoader />;
};

export default CardLoader;
