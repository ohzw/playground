import { ApolloProvider, DocumentNode, gql, useQuery } from '@apollo/client';
import { useRef, useState } from 'react';
import { useApolloClient } from '../lib/useApolloClient';

const initialQuery = gql`
  query {
    default {
      none
    }
  }
`;

export default function Graph() {
  const [uri, setUri] = useState<string>('');
  const apolloClient = useApolloClient(uri);
  return (
    <ApolloProvider client={apolloClient}>
      <input type={'text'} onChange={(e) => setUri(e.target.value)} />
      <QueryPanel />
    </ApolloProvider>
  );
}

function QueryPanel() {
  const queryTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [query, setQuery] = useState<DocumentNode>(initialQuery);
  const { data, error } = useQuery(query);
  const executeQuery = () => {
    try {
      const query = gql`
        ${queryTextareaRef.current?.value}
      `;
      setQuery(query);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <textarea ref={queryTextareaRef} spellCheck={false} rows={20} />

      <button onClick={executeQuery}>query!</button>

      <pre>{JSON.stringify(data, null, 4)}</pre>
      {error && <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 4)}</pre>}
    </div>
  );
}
