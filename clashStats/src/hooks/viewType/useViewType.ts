import { useAppSelector } from "hooks/store";
import { useDispatch } from "react-redux";
import { selectViewType } from "store/selectors/viewTypeSelectors";
import { changeViewType } from "store/slices/ViewTypeSlice";

export const useViewType = () => {
    const dispatch = useDispatch();
    const viewType = useAppSelector(selectViewType);

  const handleClick = () => {
    dispatch(changeViewType());
  };

  return {
    handleClick, viewType,
  };
};
