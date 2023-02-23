import esbuild from 'esbuild'
import tsPaths from 'esbuild-ts-paths'

await esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  packages: 'external',
  platform: 'node',
  target: ['node16'],
  outfile: 'build/index.js',
  external: ['node_modules'],
  plugins: [tsPaths()]
  //   watch: {
  //     onRebuild(error, result) {
  //       if (error) console.error('Error rebuilding:', error)
  //       else console.error('ESBuild Rebuilt:', result)
  //     }
  //   }
})
