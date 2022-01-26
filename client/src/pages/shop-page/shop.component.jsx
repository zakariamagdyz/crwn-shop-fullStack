import { connect } from "react-redux";
import { useEffect } from "react";
import ShopItems from "../../components/shop-collection-items/CollectionItems";
import { Title } from "../../styles/Title";
import { fetchItemsByCategory } from "../../redux/shopItems/shopAsyncActions";

const Shop = ({ collections, isLoading, getItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);
  return (
    <div>
      <Title>Collections</Title>
      <ShopItems isLoading={isLoading} results={collections} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.items.shopItems,
  isLoading: state.items.isLoading,
});

const mapDispatchToprops = (dispatch) => ({
  getItems: () => dispatch(fetchItemsByCategory()),
});

export default connect(mapStateToProps, mapDispatchToprops)(Shop);
