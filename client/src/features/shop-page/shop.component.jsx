import CollectionPreview from "../collection-perview/collectionPreview.component";
import { connect } from "react-redux";

const Shop = ({ collections }) => {
  return (
    <div>
      <h1>Collections</h1>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ collections: state.shopItems });

export default connect(mapStateToProps)(Shop);
