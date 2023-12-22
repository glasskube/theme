import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import path from 'path';

await esbuild.build({
  entryPoints: ['index.scss'],
  outdir: 'dist',
  bundle: true,
  metafile: true,
  minify: true,
  sourcemap: true,
  loader: {
    '.woff': 'file',
    '.woff2': 'file'
  },
  plugins: [
    sassPlugin({
      precompile(source, pathname) {
        // https://github.com/glromeo/esbuild-sass-plugin?tab=readme-ov-file#--rewriting-relative-urls
        // Does
        const basedir = path.dirname(pathname);
        return source.replace(/(url\(['"]?)(\.\.?\/)([^'")]+['"]?\))/g, `$1${basedir}/$2$3`);
      }
    }),
  ]
});
