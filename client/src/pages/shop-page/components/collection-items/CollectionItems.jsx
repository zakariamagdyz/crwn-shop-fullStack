import withChecks from "../../../../components/withChecks/WithChecks";
import CollectionItem from "../../../../components/collection-item/collectionItem.component";
import {
  Perview,
  CollectionTitle,
  CollectionsContainer,
} from "./collection.styles";

const ShopItems = ({ data: collections }) => {
  return (
    <div>
      {collections.map(({ _id, items, category }) => (
        <CollectionsContainer className="collection-preview" key={_id}>
          <CollectionTitle className="title">
            {category[0].name.toUpperCase()}
          </CollectionTitle>
          <Perview>
            {items?.length &&
              items
                .slice(0, 4)
                .map((item) => <CollectionItem key={item._id} item={item} />)}
          </Perview>
        </CollectionsContainer>
      ))}
    </div>
  );
};

export default withChecks(ShopItems);
