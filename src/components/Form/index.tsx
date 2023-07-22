import {
  StyledFieldset,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
  UploadImageContainer,
} from "./Form.styles";

import Button from "components/Button";
import FileBase from "react-file-base64";
import { UploadImageIcon } from "Icons";
import { useAppContext } from "Contexts/AppProvider";

function Form() {
  const { editing, formData, setFormData, handleInputChange, handleSubmit } = useAppContext();

  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
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
          onChange={handleInputChange}
        />
      </StyledFieldset>
      <UploadImageContainer>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }: { base64: string }) =>
            setFormData((e) => ({ ...e, selectedFile: base64 }))
          }
        />
      </UploadImageContainer>
      <Button type="primary" onClick={handleSubmit}>Create Post</Button>
    </StyledForm>
  );
}

export default Form;
