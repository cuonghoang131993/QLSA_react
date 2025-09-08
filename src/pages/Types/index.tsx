import React, { Fragment, useCallback, useEffect } from "react";
import { useAppSelector } from "react-redux";
import { useAppDispatch } from "store";
import { getTypes } from "store/type/action";
import {
  selectGetTypeReq,
  selectLoading,
  selectTypes,
} from "store/type/selector";
import { updateGetTypeReq } from "store/type/slice";
import TableCustom from "components/Table";
import NavigationCustom from "components/Pagination";
import SearchCustom from "components/Search";

const Types = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const pagingTypes = useAppSelector(selectTypes);
  const typesParams = useAppSelector(selectGetTypeReq);

  useEffect(() => {
    dispatch(getTypes(typesParams));
  }, [dispatch, typesParams]);

  const handlePage = useCallback(
    (page: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      dispatch(
        updateGetTypeReq({
          ...typesParams,
          page,
        })
      );
    },
    [dispatch, typesParams]
  );

  const onSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const valueSearch = (e.target as any).search.value;
      if (typesParams.keyword === valueSearch) return;

    dispatch(
      updateGetTypeReq({
        ...typesParams,
        keyword: valueSearch,
      })
    );
  }, [dispatch, typesParams]);

  return (
    <Fragment>
      <h2 className="text-4xl font-extrabold text-black mb-4">
        Kiểu thực phẩm
      </h2>

      {/* Search */}
      <SearchCustom onSearch={onSearch} />

      {/* Table */}
      {!loading &&
        (!pagingTypes?.Items || !Array.isArray(pagingTypes?.Items)) && (
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl xl:px-48 dark:text-gray-400">
            Chưa có dữ liệu
          </p>
        )}
      {!loading && pagingTypes && (
        <TableCustom
          columns={["#", "Tên"]}
          items={pagingTypes?.Items.map((item) => ({
            id: item.Id,
            name: item.Name,
          }))}
        />
      )}

      {/* Pagination */}
      {!loading && pagingTypes && !Number.isNaN(pagingTypes?.TotalPages) && (
        <NavigationCustom
          page={pagingTypes?.Page}
          totalPages={pagingTypes?.TotalPages}
          onClick={handlePage}
        />
      )}
    </Fragment>
  );
};

export default Types;
