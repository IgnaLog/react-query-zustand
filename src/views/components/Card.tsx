import { Repository } from "../../models/Repository";
import { useFavoriteRepoStore } from "../../store/favoriteRepoStore";

type Props = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = ({ repository, isFavorite }: Props) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteRepoStore();

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }

    addFavoriteRepo(repository.id);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  );
};
export default Card;
