import isDataFetched from "../isDataFetched/isDataFetched";
import CollectionItem from "../collection-item/collectionItem.component";
import {
  Perview,
  CollectionTitle,
  CollectionsContainer,
} from "./collection.styles";

const ShopItems = ({ results: collections }) => {
  return (
    <div>
      {collections.map(({ _id, shopItems, name }) => (
        <CollectionsContainer className="collection-preview" key={_id}>
          <CollectionTitle className="title">
            {name.toUpperCase()}
          </CollectionTitle>
          <Perview>
            {shopItems.slice(0, 4).map((item) => (
              <CollectionItem key={item._id} item={item} />
            ))}
          </Perview>
        </CollectionsContainer>
      ))}
    </div>
  );
};

export default isDataFetched(ShopItems);
