import CollectionPreview from "../shop-collection-perview/collectionPreview.component";
import withLoading from "../withLoading/withLoading";

const ShopItems = ({ collections }) => {
  return (
    <div>
      <h1>Collections</h1>
      {collections && collections.length > 0 ? (
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      ) : (
        <p>there are no items to show</p>
      )}
    </div>
  );
};

export default withLoading(ShopItems);
