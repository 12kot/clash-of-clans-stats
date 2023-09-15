import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectViewType } from "store/selectors/viewTypeSelectors";
import BlockCardLoader from "./blockCard/BlockCardLoader";
import LineCardLoader from "./lineCard/LineCardLoader";

type Props = {
  header?: string;
};

const CardLoader = ({ header }: Props): ReactElement => {
  const viewType = useAppSelector(selectViewType);

  if (!!header || viewType === "block") return <BlockCardLoader header={header} />;
  return <LineCardLoader />;
};

export default CardLoader;
