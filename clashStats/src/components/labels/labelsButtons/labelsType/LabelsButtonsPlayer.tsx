import React from "react";
import {
  selectFilterPlayerLabels,
} from "store/selectors/filterSelectors";
import { addPlayerLabel } from "store/slices/FilterSlice";
import { useActiveLabels } from "hooks/labels/useActiveLabels";
import { selectLabelsPlayers } from "store/selectors/labelsSelectors";
import LabelsButtons from "../LabelsButtons";
import { getLabelsPlayers } from "store/slices/LabelsSlice";
import { TLabelsItem } from "types/types/slices/labelsTypes";
import { TLabel } from "types/types/label/labelTypes";
import { useRequest } from "hooks/request/useRequest";

const LabelsButtonsPlayer = () => {
  const { active, onClick } = useActiveLabels(selectFilterPlayerLabels, addPlayerLabel);
  const { items } = useRequest<TLabelsItem, { labels: TLabel[] }, void>(selectLabelsPlayers, getLabelsPlayers);

  return <LabelsButtons labels={items} active={active} onClick={onClick} />;
};

export default LabelsButtonsPlayer;
