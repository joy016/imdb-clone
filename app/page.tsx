import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

interface SearchParamsProps {
  genre?: string;
  // add any other properties you expect in the searchParams object
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const genre = searchParams.genre || 'fetchMostPopularMovies';
  const res = await fetch(
    `https://imdb-api.com/en/API/${
      genre === 'fetchMostPopularMovies' ? 'MostPopularMovies/' : 'ComingSoon/'
    }${API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();

  const results = data.items;

  return (
    <div>
      <Results results={results} />
      <h1>Test</h1>
    </div>
  );
}

// import Results from '@/components/Results';

// const API_KEY = process.env.API_KEY;

// interface SearchParamsProps {
//   genre?: string;
// }

// const Home = async ({ searchParams }: { searchParams: SearchParamsProps }) => {
//   const genre = searchParams.genre || 'fetchComingSoon';
//   const res = await fetch(
//     `https://imdb-api.com/en/API/${
//       genre === 'fetchMostPopularMovies' ? 'MostPopularMovies/' : 'ComingSoon/'
//     }${API_KEY}`,
//     { next: { revalidate: 10000 } }
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const data = await res.json();

//   const results = data.items;

//   return (
//     <div>
//       <Results results={results} />
//     </div>
//   );
// };

// export default Home;
