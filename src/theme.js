  import { createTheme } from "@mui/material/styles";

  export const getDesignTokens = (mode) => ({
    palette :{
      mode,
      ...(mode === "light" ? 
        {
          // light color theme
          pimary:{main :"#6851ff"},
          background:{default :"#f5f5f5", paper:"#fff"},
          text :{primary :"#000"}
        } : {
        
          // dark color theme
          pimary:{main :"#6851ff"},
          background:{default :"#121212", paper:"#1e1e1e"},
          text :{primary :"#fff"}
        
        }
      )
    }
  })