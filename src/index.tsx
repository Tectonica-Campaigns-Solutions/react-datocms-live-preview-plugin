import { connect, RenderConfigScreenCtx } from "datocms-plugin-sdk";
import { render } from "./utils/render";
import ConfigScreen from "./entrypoints/ConfigScreen";
import "datocms-react-ui/styles.css";
import LivePreview from "./entrypoints/LivewPreview";

connect({
  itemFormSidebarPanels() {
    return [
      {
        id: "livePreview",
        label: "Live Preview",
      },
    ];
  },
  renderItemFormSidebarPanel(sidebarPaneId, ctx) {
    render(<LivePreview ctx={ctx} />);
  },
  renderConfigScreen(ctx: RenderConfigScreenCtx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
});
