import { Button, UploadImage } from "components";
import {
  StyledFieldset,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
} from "./Form.styles";

import { useAppContext } from "Contexts/AppProvider";

function Form() {
  const { editing, formData, setFormData, handleInputChange, handleSubmit, handleFinishEdit } = useAppContext();

  

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <Title>{editing ? "Edit Post" : "Create Post"}</Title>
      <StyledFieldset>
        <StyledLabel>Creator</StyledLabel>
        <StyledInput
          name="creator"
          value={formData.creator}
          onChange={handleInputChange}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLabel>Title</StyledLabel>
        <StyledInput
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLabel>Message</StyledLabel>
        <StyledInput
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLabel>Tags (comma separated)</StyledLabel>
        <StyledInput
          name="tags"
          value={formData.tags}
          onChange={({ target }) => {
            setFormData(e => ({...e, tags: target.value.replace(/\s+/g, '').split(",")}))
          }}
        />
      </StyledFieldset>
      <UploadImage />
      <Button type="primary" onClick={handleSubmit}>
        {editing ? "Edit Post" : "Create Post"}
      </Button>
      {editing ? <Button type="primary" onClick={handleFinishEdit}>Cancel Edit</Button> : null}
    </StyledForm>
  );
}

export default Form;
