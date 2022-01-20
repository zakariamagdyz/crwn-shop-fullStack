import CollectionPreview from "../collection-perview/collectionPreview.component";
import { connect } from "react-redux";

const Shop = ({ collections, isLoading }) => {
  return (
    <div>
      <h1>Collections</h1>
      {isLoading ? (
        <p>loading...</p>
      ) : collections && collections.length > 0 ? (
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      ) : (
        <p>there are no items to show</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.directory.categories,
  isLoading: state.directory.isLoading,
});

export default connect(mapStateToProps)(Shop);
