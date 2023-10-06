import { useLocalStorage } from "usehooks-ts";

// this hooks is acting as an reducer uses usehook uselocalstorage as a source of truth, allowing singleton store like hooks
export const useGlobalFilter = () => {
    const [filter, setFilter] = useLocalStorage<string>("filter", "");

    return {
        filter,
        setFilter,
    };
};
