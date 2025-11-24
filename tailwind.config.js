/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora-Regular'],
        thin: ['Sora-Thin'],
        extralight: ['Sora-ExtraLight'],
        light: ['Sora-Light'],
        regular: ['Sora-Regular'],
        medium: ['Sora-Medium'],
        semibold: ['Sora-SemiBold'],
        bold: ['Sora-Bold'],
        extrabold: ['Sora-ExtraBold'],
      },
    },
  },
  plugins: [],
}


