import Handlebars from "handlebars";
import { PluginOption } from "vite";

export const handlebars = (): PluginOption => {
  const fileRegexp = /\.hbs$|\.handlebars$/;
  return {
    name: "vite-plugin-handlebars-precompile",
    transform(src, id) {
      if (!fileRegexp.test(id)) {
        return;
      }
      const code = `
        import Handlebars from 'handlebars/runtime'

        export default Handlebars.template(${Handlebars.precompile(src)})
      `;

      return {
        code,
      };
    },
  };
};
