import { useRepoService } from "./api/useRepoService";
import { useFavoriteRepoStore } from "./store/favoriteRepoStore";
import Card from "./views/components/Card";

const App = () => {
  const { data, isLoading } = useRepoService("ignalog");
  const { favoriteReposIds } = useFavoriteRepoStore();

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      {data?.map((repository) => (
        <Card
          repository={repository}
          key={repository.id}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  );
};
export default App;
