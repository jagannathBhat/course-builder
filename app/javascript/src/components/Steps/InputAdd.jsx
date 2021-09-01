import React, { useState } from "react";

import PropTypes from "prop-types";

import Input from "components/Input";

const InputAdd = ({ loading, setContent, stepAdd }) => {
  const [newContent1, setNewContent1] = useState("");
  const [newContent2, setNewContent2] = useState("");

  return (
    <div className="flex items-center">
      <div className="flex-1">
        <Input
          disabled={loading}
          iconClass="ri-add-line"
          placeholder="Add Step"
          value={newContent1}
          onChange={e => {
            setContent(e.target.value);
            setNewContent1(e.target.value);
          }}
          onSubmit={() => {
            setNewContent1("");
            stepAdd(1);
          }}
        />
      </div>
      <div className="flex-1">
        <Input
          disabled={loading}
          iconClass="ri-add-line"
          placeholder="Add Step"
          value={newContent2}
          onChange={e => {
            setContent(e.target.value);
            setNewContent2(e.target.value);
          }}
          onSubmit={() => {
            setNewContent2("");
            stepAdd(2);
          }}
        />
      </div>
    </div>
  );
};

InputAdd.propTypes = {
  loading: PropTypes.bool,
  setContent: PropTypes.func,
  stepAdd: PropTypes.func
};

export default InputAdd;
