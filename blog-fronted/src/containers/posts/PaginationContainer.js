import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { select } from "redux-saga/effects";
import Pagination from "../../components/posts/Pagination";
import { selectLoading } from "../../modules/slices/loading";
import { selectLastPage, selectList } from "../../modules/slices/posts";
import qs from "qs";
const PaginationContainaer = () => {
  const lastPage = useSelector(selectLastPage);
  const posts = useSelector(selectList);
  const loading = useSelector(selectLoading);
  const { page = 1 } = qs.parse(useLocation().search, {
    ignoreQueryPrefix: true,
  });

  if (!posts || loading === true) return null;
  return <Pagination lastPage={lastPage} page={parseInt(page, 10)} />;
};
export default PaginationContainaer;
