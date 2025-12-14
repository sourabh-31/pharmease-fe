import { useInvoiceContext } from "../../context/InvoiceContext";
import TrashIcon from "../../data/inventory-assets/trash.svg";

import Button from "../../ui/Button";
import Search from "../../ui/Search";
import { useCustomers } from "./useCustomerAction";

function CustomerHeader() {
  const {
    isCustomerDeleteClicked,
    toggleCustomerDelete,
    customerSearch,
    setCustomerSearch,
  } = useInvoiceContext();

  const { customers } = useCustomers();

  return (
    <div className="flex items-center justify-between mr-1 mt-6 mb-10">
      <div className="border-[1px] border-[#d1d5db]  rounded-md">
        <Search
          placeholderText="Search Customers..."
          width="20"
          bgColor="white"
          value={customerSearch}
          onChange={(e) => setCustomerSearch(e.target.value)}
        />
      </div>

      {customers?.length > 0 && (
        <div className="-mt-1">
          <Button
            bgColor={isCustomerDeleteClicked ? "#03a9f5" : "#f0483e"}
            img={isCustomerDeleteClicked ? "" : TrashIcon}
            imgWidth="1.1rem"
            onClick={toggleCustomerDelete}
          >
            {isCustomerDeleteClicked ? "Cancel Delete" : "Delete Customer"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default CustomerHeader;
