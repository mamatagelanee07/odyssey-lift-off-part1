const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
    tracksForHome : [Track!]!
}

"A track is group of Modules that teaches about a specific topic"
type Track{
    id : ID!
    "The track's title"
    title : String!
    "The track's main author"
    author : Author!
    "the track's main illustration to display track card"
    thumbnail : String
    "The track's approximate length to complete in minutes"
    length : Int
    "The number of modules this track contains"
    modulesCount : Int
}

type Author{
    id : ID!
    name : String!
    photo : String
}
`;

module.exports = typeDefs;