
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./', true, /\.svg$/))
} catch (error) {
}


export const iconNames = require.context('./', true, /\.svg$/).keys().map(icon => icon.replace(/\.\/|.svg/g, ''))

