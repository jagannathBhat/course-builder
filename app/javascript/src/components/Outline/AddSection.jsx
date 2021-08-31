import React, { useState } from "react";

import PropTypes from "prop-types";

import sectionsApi from "apis/sections";
import Input from "components/Input";

const AddSection = ({ fetchSections }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const sectionAdd = async () => {
    setLoading(true);
    try {
      await sectionsApi.create({ section: { name } });
      setName("");
      setLoading(false);
      fetchSections();
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Input
        disabled={loading}
        iconClass="ri-add-line"
        placeholder="Add Section"
        value={name}
        onChange={e => setName(e.target.value)}
        onSubmit={e => {
          e.preventDefault();
          sectionAdd();
        }}
      />
    </div>
  );
};

AddSection.propTypes = {
  fetchSections: PropTypes.func
};

export default AddSection;
