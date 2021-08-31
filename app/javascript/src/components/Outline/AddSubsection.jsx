import React, { useState } from "react";

import PropTypes from "prop-types";

import subsectionsApi from "apis/subsections";
import Input from "components/Input";

const AddSubsection = ({ fetchSubsections, sectionId }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

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

  return (
    <div>
      <Input
        disabled={loading}
        iconClass="ri-add-line"
        placeholder="Add Subsection"
        value={name}
        onChange={e => setName(e.target.value)}
        onSubmit={e => {
          e.preventDefault();
          subsectionAdd();
        }}
      />
    </div>
  );
};

AddSubsection.propTypes = {
  fetchSubsections: PropTypes.func,
  sectionId: PropTypes.number
};

export default AddSubsection;
