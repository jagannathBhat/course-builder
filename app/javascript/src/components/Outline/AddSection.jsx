import React, { useState } from "react";

import PropTypes from "prop-types";

import sectionsApi from "apis/sections";
import Input from "components/Input";

const AddSection = ({ fetchSections, sectionId, sectionName = "" }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(sectionName);

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

  const sectionUpdate = async () => {
    setLoading(true);
    try {
      await sectionsApi.update({
        id: sectionId,
        payload: { section: { name } }
      });
      setLoading(false);
      fetchSections();
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex-auto">
      {sectionId ? (
        <Input
          disabled={loading}
          iconClass={"ri-check-line"}
          value={name}
          onChange={e => setName(e.target.value)}
          onSubmit={() => sectionUpdate()}
        />
      ) : (
        <Input
          disabled={loading}
          iconClass="ri-add-line"
          placeholder="Add Section"
          value={name}
          onChange={e => setName(e.target.value)}
          onSubmit={() => sectionAdd()}
        />
      )}
    </div>
  );
};

AddSection.propTypes = {
  fetchSections: PropTypes.func,
  sectionId: PropTypes.number,
  sectionName: PropTypes.string
};

export default AddSection;
