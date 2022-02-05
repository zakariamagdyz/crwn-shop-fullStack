import { connect } from "react-redux";
import { useEffect } from "react";
import ShopItems from "./components/collection-items/CollectionItems";
import { Title } from "../../styles/Title";
import { fetchItemsByCategory } from "../../redux/directory/directoryAsyncActions";

const Shop = ({ collections, isLoading, getItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);
  return (
    <div>
      <Title>Collections</Title>
      <ShopItems isLoading={isLoading} data={collections} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.directory.categoriesWithItems,
  isLoading: state.directory.isLoading,
});

const mapDispatchToprops = (dispatch) => ({
  getItems: () => dispatch(fetchItemsByCategory()),
});

export default connect(mapStateToProps, mapDispatchToprops)(Shop);
