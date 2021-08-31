import React, { useState } from "react";

import PropTypes from "prop-types";

import subsectionsApi from "apis/subsections";
import Input from "components/Input";

const AddSubsection = ({
  fetchSubsections,
  sectionId,
  subsectionId,
  subsectionName = ""
}) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(subsectionName);

  const subsectionAdd = async () => {
    setLoading(true);
    try {
      await subsectionsApi.create({
        subsection: { name, section_id: sectionId }
      });
      setName("");
      setLoading(false);
      fetchSubsections();
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const subsectionUpdate = async () => {
    setLoading(true);
    try {
      await subsectionsApi.update({
        id: subsectionId,
        payload: { subsection: { name } }
      });
      setLoading(false);
      fetchSubsections();
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex-auto">
      {subsectionId ? (
        <Input
          disabled={loading}
          iconClass="ri-check-line"
          value={name}
          onChange={e => setName(e.target.value)}
          onSubmit={() => subsectionUpdate()}
        />
      ) : (
        <Input
          disabled={loading}
          iconClass="ri-add-line"
          placeholder="Add Subsection"
          value={name}
          onChange={e => setName(e.target.value)}
          onSubmit={() => subsectionAdd()}
        />
      )}
    </div>
  );
};

AddSubsection.propTypes = {
  fetchSubsections: PropTypes.func,
  sectionId: PropTypes.number,
  subsectionId: PropTypes.number,
  subsectionName: PropTypes.string
};

export default AddSubsection;
