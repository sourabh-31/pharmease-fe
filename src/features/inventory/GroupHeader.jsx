import { useMedicineContext } from "../../context/MedicineContext";
import TrashIcon from "../../data/inventory-assets/trash.svg";

import Button from "../../ui/Button";
import Search from "../../ui/Search";
import { useGroups } from "./useGroupAction";

function GroupHeader() {
  const { groupDeleteClicked, toggleGroupDelete, groupSearch, setGroupSearch } =
    useMedicineContext();

  const { groups } = useGroups();
  const groupLength = groups?.length;

  return (
    <div className="flex items-center justify-between mr-1 mt-6 mb-10">
      <div className="border-[1px] border-[#d1d5db] rounded-md">
        <Search
          placeholderText="Search Medicine Groups..."
          width="20"
          bgColor="white"
          value={groupSearch}
          onChange={(e) => setGroupSearch(e.target.value)}
        />
      </div>

      {groupLength > 0 && (
        <div className="-mt-1">
          <Button
            bgColor={groupDeleteClicked ? "#03a9f5" : "#f0483e"}
            img={groupDeleteClicked ? "" : TrashIcon}
            imgWidth="1.1rem"
            onClick={toggleGroupDelete}
          >
            {groupDeleteClicked ? "Cancel Delete" : "Delete Group"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default GroupHeader;
