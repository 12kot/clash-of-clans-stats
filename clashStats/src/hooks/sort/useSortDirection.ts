import { changeSortDirection } from "store/slices/SortSlice";
import { selectSortDirection } from "./../../store/selectors/sortSelectors";
import { useAppDispatch, useAppSelector } from "hooks/store";

export const useSortDirection = () => {
  const dispatch = useAppDispatch();
  const direction = useAppSelector(selectSortDirection);

  const handleClick = (): void => {
    dispatch(changeSortDirection());
  };

  return {
    direction,
    handleClick,
  };
};
