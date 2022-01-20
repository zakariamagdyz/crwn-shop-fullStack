import { connect } from "react-redux";
import ShopItems from "../../components/shop-collection-items/CollectionItems";

const Shop = ({ collections, isLoading }) => {
  return (
    <div>
      <ShopItems isLoading={isLoading} collections={collections} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.directory.categories,
  isLoading: state.directory.isLoading,
});

export default connect(mapStateToProps)(Shop);
