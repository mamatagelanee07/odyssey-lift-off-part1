import React from 'react';
import { Layout, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';

export const TRACKS = gql`
query TracksForHome {
  tracksForHome {
    id
    title
    author {
      name
      id
      photo
    }
    thumbnail
    length
    modulesCount
  }
}

`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return 'Loading';
  if (error) return `Error! ${error.message}`
  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
  </Layout>;
};

export default Tracks;
