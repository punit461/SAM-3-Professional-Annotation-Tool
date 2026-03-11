import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Library build mode: `vite build --mode lib`
  if (mode === 'lib') {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/lib.ts'),
          name: 'SAM3AnnotationTool',
          formats: ['es', 'cjs'],
          fileName: (format) => `sam3-annotation-tool.${format === 'es' ? 'mjs' : 'cjs'}`,
        },
        outDir: 'dist-lib',
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'jsxRuntime',
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                return 'style.css';
              }
              return assetInfo.name || 'asset';
            },
          },
        },
      },
    }
  }

  // Default: standalone app build / dev
  return {
    plugins: [react()],
    build: {},
    server: {
      host: '0.0.0.0',
      port: 5766,
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          changeOrigin: true,
        }
      }
    },
    preview: {
      host: '0.0.0.0',
      port: 5766,
      strictPort: true,
      allowedHosts: ['localhost'],
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          changeOrigin: true,
        }
      }
    }
  }
})
