import React from "react";
import PropTypes from "prop-types";

import AlgoliaPlaces from "algolia-places-react";

const options = {
  appid: "plETC7HUV2MK",
  apikey: "c25247bfc752c09ad72b48ba4f9ac417",
  language: "en",
  type: "city"
};

export const AutocompletePlace = ({ onChange }) => {
  return (
    <AlgoliaPlaces
      options={options}
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
        onChange(suggestion.name)
      }
    ></AlgoliaPlaces>
  );
};

AutocompletePlace.propTypes = {
  onChange: PropTypes.func
};
