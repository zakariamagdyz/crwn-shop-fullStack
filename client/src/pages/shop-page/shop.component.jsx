import { connect } from "react-redux";
import ShopItems from "../../components/shop-collection-items/CollectionItems";
import { Title } from "../../styles/Title";

const Shop = ({ collections, isLoading }) => {
  return (
    <div>
      <Title>Collections</Title>
      <ShopItems isLoading={isLoading} results={collections} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.directory.categories,
  isLoading: state.directory.isLoading,
});

export default connect(mapStateToProps)(Shop);
