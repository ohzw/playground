import { gql, useQuery } from '@apollo/client';

export default function Graph() {
  const query = gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `;

  const { data } = useQuery(query);
  console.log(data);

  return <div></div>;
}
