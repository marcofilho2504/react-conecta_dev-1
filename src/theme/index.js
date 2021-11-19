import { createMuiTheme } from "@material-ui/core/styles";
import typography from "./typography";
import palette from "../theme/pallet";

const theme = createMuiTheme({
    palette,
    typography
})

export default theme;