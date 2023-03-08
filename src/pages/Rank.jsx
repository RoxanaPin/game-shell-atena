import { useParams } from 'react-router-dom';
import { Layout } from '../layouts';

export const Rank = () => {
  const { userId } = useParams();

  return (
    <Layout>
      <div className="container mx-auto px-4 mt-4">
        <header>
          <h1 className="text-3xl font-bold">User: {userId}</h1>
        </header>
      </div>
    </Layout>
  );
};
