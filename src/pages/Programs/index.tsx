import React, { Fragment, useCallback, useEffect } from "react";
import { useAppSelector } from "react-redux";
import { useAppDispatch } from "store";
import { getPrograms } from "store/program/action";
import {
  selectGetProgramReq,
  selectLoading,
  selectPrograms,
} from "store/program/selector";
import { updateGetTypeReq } from "store/program/slice";
import TableCustom from "components/Table";
import NavigationCustom from "components/Pagination";
import SearchCustom from "components/Search";

const Programs = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const pagingTypes = useAppSelector(selectPrograms);
  const programsParams = useAppSelector(selectGetProgramReq);

  useEffect(() => {
    dispatch(getPrograms(programsParams));
  }, [dispatch, programsParams]);

  const handlePage = useCallback(
    (page: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      dispatch(
        updateGetTypeReq({
          ...programsParams,
          page,
        })
      );
    },
    [dispatch, programsParams]
  );

  const onSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const valueSearch = (e.target as any).search.value;
      if (programsParams.keyword === valueSearch) return;

      dispatch(
        updateGetTypeReq({
          ...programsParams,
          keyword: valueSearch,
        })
      );
    },
    [dispatch, programsParams]
  );

  return (
    <Fragment>
      <h2 className="text-4xl font-extrabold text-black mb-4">
        Chế độ dinh dưỡng
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
          columns={[
            "#",
            "Tên",
            "Quy luật",
            "Cấu trúc",
            "Ghi chú",
            "Nhóm",
            "Đối tượng",
          ]}
          items={pagingTypes?.Items.map((item) => ({
            id: item.Id,
            name: item.Name,
            rules: item.Rules,
            structure: item.Structure,
            note: item.Note,
            parentId: item.ParentId,
            parentType: item.ParentType,
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

export default Programs;
