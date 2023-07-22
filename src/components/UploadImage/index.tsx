import {
  Container,
  StyledImage,
  UploadImageContainer,
} from "./UploadImage.styles";

import FileBase from "react-file-base64";
import { UploadImageIcon } from "Icons";
import { useAppContext } from "Contexts/AppProvider";

function UploadImage() {
  const { formData, setFormData } = useAppContext();

  return (
    <UploadImageContainer>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }: { base64: string }) =>
          setFormData((e) => ({ ...e, selectedFile: base64 }))
        }
      />
      <StyledImage image={formData.selectedFile}>
        <Container>
          <UploadImageIcon />
          <h3>+ Upload Image</h3>
        </Container>
      </StyledImage>
    </UploadImageContainer>
  );
}

export default UploadImage;
