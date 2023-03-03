import { RenderConfigScreenCtx } from "datocms-plugin-sdk";
import { Button, Canvas, TextField } from "datocms-react-ui";
import { useState } from "react";
import { isValidUrl } from "../utils/utils";

type Props = {
  ctx: RenderConfigScreenCtx;
};

// Plugin Types
export type PluginParameters = { baseUrl: string };

export default function ConfigScreen({ ctx }: Props) {
  const parameters = ctx.plugin.attributes.parameters as PluginParameters;

  const [newBaseUrl, setNewBaseUrl] = useState<string | undefined>(
    parameters.baseUrl
  );
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleOnChangeBaseUrl = (newBaseUrl: string | undefined) => {
    setIsValid(isValidUrl(newBaseUrl));
    setNewBaseUrl(newBaseUrl);
  };

  const handleOnSaveSettings = () => {
    ctx.updatePluginParameters({ baseUrl: newBaseUrl });
    ctx.notice("Settings updated successfully!");
  };

  return (
    <Canvas ctx={ctx}>
      <TextField
        id="01"
        name="livePreview"
        value={newBaseUrl}
        label="Enter the base url of your project:"
        hint="Based on the url entered we will be able to connect your content with your QA application."
        onChange={handleOnChangeBaseUrl}
        required
        textInputProps={{ type: "url" }}
        error={!isValid && <>Please enter a valid URL.</>}
      />

      <Button
        onClick={handleOnSaveSettings}
        style={{ marginTop: "1rem" }}
        disabled={!newBaseUrl || !isValid}
      >
        Save settings
      </Button>
    </Canvas>
  );
}
