import { RenderItemFormSidebarPanelCtx } from "datocms-plugin-sdk";
import { ButtonLink, Canvas } from "datocms-react-ui";
import { FC } from "react";
import { PluginParameters } from "./ConfigScreen";

type Props = {
  ctx: RenderItemFormSidebarPanelCtx;
};

const LivePreview: FC<Props> = ({ ctx }) => {
  const getLivePreviewUrl = () => {
    console.log(ctx.item);

    // const fields = ctx
    //   .loadItemTypeFields("1007888")
    //   .then((field) => console.log(field))
    //   .then((d) => console.log(d))
    //   .catch((e) => console.error(e));

    const { baseUrl } = ctx.plugin.attributes.parameters as PluginParameters;
    const { slug: currentContentSlug } = ctx.formValues;

    // If the content has a prefix, we try to get it to add it in the final URL.
    // For example: /post/post-1
    const maybeSlugAttribute = Object.values(ctx.fields).find(
      (f) => f?.attributes.api_key === "slug"
    );

    const slugPrefix = maybeSlugAttribute?.attributes.appearance.parameters
      .url_prefix as string | undefined;

    if (slugPrefix) {
      return `${baseUrl}${slugPrefix}${currentContentSlug}`;
    }

    return `${baseUrl}/${currentContentSlug}`;
  };

  return (
    <Canvas ctx={ctx}>
      <ButtonLink href={getLivePreviewUrl()}>See live preview</ButtonLink>
    </Canvas>
  );
};

export default LivePreview;
