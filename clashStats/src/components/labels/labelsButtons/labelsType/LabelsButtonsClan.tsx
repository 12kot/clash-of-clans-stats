import React from "react";
import { selectFilterClanLabels } from "store/selectors/filterSelectors";
import { addClanLabel } from "store/slices/FilterSlice";
import LabelsButtons from "../LabelsButtons";
import { useActiveLabels } from "hooks/labels/useActiveLabels";
import { selectLabelsClans } from "store/selectors/labelsSelectors";
import { getLabelsClans } from "store/slices/LabelsSlice";
import { useRequest } from "hooks/request/useRequest";
import { TLabelsItem } from "types/types/slices/labelsTypes";
import { TLabel } from "types/types/label/labelTypes";

const LabelsButtonsClan = () => {
  const { active, onClick } = useActiveLabels(selectFilterClanLabels, addClanLabel);
  const { items } = useRequest<TLabelsItem, { labels: TLabel[] }, void>(selectLabelsClans, getLabelsClans);
  
  return <LabelsButtons labels={items} active={active} onClick={onClick} />;
};

export default LabelsButtonsClan;
